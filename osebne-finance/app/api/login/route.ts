import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";

const sql = neon(process.env.DATABASE_URL!);

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Manjkajoči podatki." },
        { status: 400 }
      );
    }

    // Najdi userja po emailu
    const rows = await sql`
      SELECT * FROM users WHERE email = ${email} LIMIT 1;
    `;

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, message: "Uporabnik s tem emailom ne obstaja." },
        { status: 404 }
      );
    }

    const user = rows[0];

    // Preveri geslo
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json(
        { success: false, message: "Napačno geslo." },
        { status: 401 }
      );
    }

    // Uspešno
    return NextResponse.json({
      success: true,
      message: "Prijava uspešna.",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
