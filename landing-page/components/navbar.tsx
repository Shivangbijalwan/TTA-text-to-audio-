"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { openSignIn, openSignUp, signOut } = useClerk();
  const { isSignedIn, user } = useUser();
  const router = useRouter();

  const handleSignIn = async () => {
    await openSignIn();

    // redirect after auth handled manually
    router.push("/home");
  };

  const handleSignUp = async () => {
    await openSignUp();

    // redirect after auth handled manually
    router.push("/home");
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/90 px-5 py-4 backdrop-blur-sm">
      
      <img src="/logo.png" alt="logo" className="h-10 w-10" />

      <div className="flex items-center gap-2">
        {isSignedIn ? (
          <>
            <span className="text-sm text-white/60">
              {user?.username ||
                user?.emailAddresses?.[0]?.emailAddress}
            </span>

            <button
              onClick={() => router.push("/home")}
              className="rounded-3xl border border-white/30 px-4 py-2 text-sm text-white transition-all hover:border-orange-500 hover:bg-orange-500"
            >
              Dashboard
            </button>

            <button
              onClick={() => signOut()}
              className="rounded-3xl border border-white/30 px-4 py-2 text-sm text-white transition-all hover:border-red-500 hover:bg-red-500"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleSignIn}
              className="rounded-3xl border border-white/30 px-4 py-2 text-sm text-white transition-all hover:border-orange-500 hover:bg-orange-500"
            >
              Login
            </button>

            <button
              onClick={handleSignUp}
              className="rounded-3xl border border-white/30 px-4 py-2 text-sm text-white transition-all hover:border-orange-500 hover:bg-orange-500"
            >
              Signup
            </button>
          </>
        )}
      </div>
    </nav>
  );
}