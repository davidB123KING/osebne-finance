import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const USERS_FILE = path.join(process.cwd(), "data", "users.json");

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!fs.existsSync(USERS_FILE)) {
    return NextResponse.json({ message: "Ni registriranih uporabnikov." }, { status: 400 });
  }

  const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
  const user = users.find((u: any) => u.username === username);

  if (!user) {
    return NextResponse.json({ message: "Uporabnik ne obstaja." }, { status: 400 });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json({ message: "Napačno geslo." }, { status: 400 });
  }

  return NextResponse.json({ message: "Prijava uspešna!" });
}
