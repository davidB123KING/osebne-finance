import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: { email, password: hashed },
    });

    return NextResponse.json({ message: "Registracija uspešna" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
