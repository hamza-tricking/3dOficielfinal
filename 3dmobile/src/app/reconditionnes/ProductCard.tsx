import Link from 'next/link';
import Image from 'next/image';
import { Product } from './products-data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Generate slug from product name and storage
  const slug = product.name.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return (
    <Link href={`/reconditionnes/products/${slug}`} className="block group cursor-pointer">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={`${product.name} ${product.storage}`}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            Reconditionné
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900 mb-1">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{product.storage}</p>
          
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">
              {product.price} €
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-rose-500 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-rose-600 transition-all duration-300 text-sm font-semibold">
              Voir détails
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
