import Link from "next/link";

interface GetStartedButtonProps {
  href: string;
  label?: string;
}

export default function GetStartedButton({
  href,
  label = "Get started",
}: GetStartedButtonProps) {
  return (
    <div className="flex items-center justify-center w-full">
      <Link
        href={href}
        className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-orange-500 text-orange-500 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-orange-500 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(249,115,22,0.35)] active:translate-y-0 active:shadow-none"
      >
        {label}
        <svg
          width="16"
          height="16"
          viewBox="0 0 15 15"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M2 7.5h11M9 3.5l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}