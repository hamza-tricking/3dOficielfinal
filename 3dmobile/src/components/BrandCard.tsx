import Image from "next/image";
import Link from "next/link";

interface BrandCardProps {
  src: string;
  alt: string;
  href?: string;
}

export default function BrandCard({ src, alt, href }: BrandCardProps) {
  const cardContent = (
    <div className="bg-white cursor-pointer hover:border-2 hover:border-blue-600 transition-all duration-300 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center h-32">
      <Image
        src={src}
        alt={alt}
        width={80}
        height={40}
        className="object-contain"
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
