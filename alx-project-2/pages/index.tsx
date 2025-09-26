import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <Header />
      <main className="text-center mt-10">
        <h1 className="text-4xl font-bold">Welcome to alx-project-2 🚀</h1>
       
      </main>
    </div>
  );
}
