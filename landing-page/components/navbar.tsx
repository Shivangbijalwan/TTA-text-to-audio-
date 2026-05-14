"use client";
import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { openSignIn, openSignUp, signOut } = useClerk();
  const { isSignedIn, user } = useUser();
  const router = useRouter();

  return (
    <nav className="sticky top-0 flex items-center justify-between z-50 bg-black/90 backdrop-blur-sm border-b border-white/10 px-5 py-4">
      <img src="logo.png" alt="logo" className="h-10 w-10" />
      <div className="flex items-center gap-2">
        {isSignedIn ? (
          <>
            <span className="text-white/60 text-sm">
              {user.firstName ?? user.emailAddresses[0].emailAddress}
            </span>
            <button
              onClick={() => router.push("/home")}
              className="text-white border border-white/30 px-4 py-2 rounded-3xl hover:bg-orange-500 hover:border-orange-500 transition-all text-sm"
            >
              Dashboard
            </button>
            <button
              onClick={() => signOut({ redirectUrl: "/" })}
              className="text-white border border-white/30 px-4 py-2 rounded-3xl hover:bg-red-500 hover:border-red-500 transition-all text-sm"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => openSignIn({ redirectUrl: "/home" })}
              className="text-white border border-white/30 px-4 py-2 rounded-3xl hover:bg-orange-500 hover:border-orange-500 transition-all text-sm"
            >
              Login
            </button>
            <button
              onClick={() => openSignUp({ redirectUrl: "/home" })}
              className="text-white border border-white/30 px-4 py-2 rounded-3xl hover:bg-orange-500 hover:border-orange-500 transition-all text-sm"
            >
              Signup
            </button>
          </>
        )}
      </div>
    </nav>
  );
}