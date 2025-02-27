import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface OptionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
}

export default function OptionCard({ title, description, icon: Icon, href, onClick }: OptionCardProps) {
  const content = (
    <div className="p-6 rounded-lg shadow-lg bg-white text-black text-center hover:shadow-xl transition">
      <Icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );

  return href ? (
    <Link href={href} className="block w-full md:w-auto">
      {content}
    </Link>
  ) : (
    <button onClick={onClick} className="w-full md:w-auto">
      {content}
    </button>
  );
}
