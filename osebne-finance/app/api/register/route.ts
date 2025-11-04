import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const USERS_FILE = path.join(process.cwd(), "data", "users.json");

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Če mapa "data" še ne obstaja, jo ustvarimo
  if (!fs.existsSync(path.dirname(USERS_FILE))) {
    fs.mkdirSync(path.dirname(USERS_FILE));
  }

  let users: any[] = [];
  if (fs.existsSync(USERS_FILE)) {
    users = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
  }

  if (users.find((u) => u.username === username)) {
    return NextResponse.json({ message: "Uporabnik že obstaja." }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

  return NextResponse.json({ message: "Registracija uspešna!" });
}
