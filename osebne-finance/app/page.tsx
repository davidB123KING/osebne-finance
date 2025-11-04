export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-900">
      <div className="text-center p-8 rounded-2xl shadow-md bg-white">
        <h1 className="text-4xl font-bold mb-4">Moja Next.js Stran</h1>
        <p className="text-lg text-gray-600 mb-6">
          Dobrodošli! To je začetna verzija brez funkcionalnosti.
        </p>
        <p className="text-sm text-gray-500">
          (Kasneje bomo dodali File Upload in CRUD funkcionalnosti.)
        </p>
      </div>
    </main>
  );
}
