# 💸 Osebne Finance

Aplikacija za upravljanje osebnih financ, izdelana v **Next.js**, ki uporabnikom omogoča nadzor nad prihodki, odhodki in mesečnim proračunom.  

---

## 🚀 Funkcionalnosti

- 🔐 **Prijava in registracija uporabnika**
  - Varnostno hashiranje gesel (bcrypt)
  - JWT avtorizacija prek HttpOnly piškotkov

- 💰 **Upravljanje financ**
  - Dodajanje prihodkov in odhodkov
  - Pregled mesečnih bilanc
  - Filtriranje po kategorijah (hrana, transport, zabava, itd.)
  - Prikaz grafov in povzetkov

- 🧾 **Zgodovina transakcij**
  - Pregled vseh vnosov po datumih
  - Urejanje ali brisanje starih zapisov

- 📊 **Vizualizacija**
  - Grafični prikaz prihodkov/odhodkov (npr. s Chart.js ali Recharts)
  - Dinamični dashboard

---

## 🛠️ Tehnologije

| Sloj | Tehnologija |
|------|--------------|
| Frontend | [Next.js 14](https://nextjs.org/) |
| Backend | API Routes (Next.js) |
| Baza podatkov | [PostgreSQL](https://www.postgresql.org/) |
| ORM | [Prisma](https://www.prisma.io/) |
| Avtorizacija | JWT + bcrypt |
| Gostovanje | [Vercel](https://vercel.com/) |
| Stilizacija | Tailwind CSS |

---

## ⚙️ Namestitev in zagon

### 1️⃣ Kloniraj repozitorij
```bash
git clone https://github.com/tvoje-uporabnisko-ime/osebne-finance.git
cd osebne-finance
