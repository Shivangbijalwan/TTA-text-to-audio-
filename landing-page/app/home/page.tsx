import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar";

export default async function HomePage() {
  const { userId } = await auth();

  if (!userId) redirect("/");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <h1>Welcome to Home!</h1>
      </div>
    </div>
  );
}