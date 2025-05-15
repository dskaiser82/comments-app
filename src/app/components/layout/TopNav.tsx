import Link from "next/link";

interface TopNavProps {
  title?: string;
}

export const TopNav = ({ title = "The Gazette" }: TopNavProps) => {
  return (
    <nav className="w-full bg-primary shadow-md z-10 relative">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            {title}
          </Link>
        </div>
      </div>
    </nav>
  );
};
