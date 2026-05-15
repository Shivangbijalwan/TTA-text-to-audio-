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
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-orange-500 text-orange-500 text-sm font-medium transition-all duration-200 hover:bg-orange-500/10 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(249,115,22,0.25)] active:translate-y-0 active:shadow-none"
    >
      {label}
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 7.5h11M9 3.5l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}