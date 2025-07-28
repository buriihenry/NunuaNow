import { Product } from '@/sanity.types';
import Image from 'next/image';
import React from 'react';
import { urlFor } from "@/sanity/lib/image";
import Link from 'next/link';

interface Props{
    product: Product
}

const ProductCard = ({ product} : Props) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden group text-sm bg-white hover:shadow-lg transition-all duration-300">
      <div className="relative">
        {product?.image && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product?.image).url()}
              alt="productImage"
              width={500}
              height={500}
              loading="lazy"
              className={`w-full max-h-80 object-cover overflow-hidden transition-transform duration-500 ${product?.stock !== 0 && "group-hover:scale-105"}`}
            />
          </Link>
        )}
        
        {/* Status Label */}
        {product?.status && (
          <div className="absolute top-2 left-2">
            <span className={`px-2 py-1 text-xs font-semibold text-white rounded ${
              product.status === 'new' ? 'bg-green-500' :
              product.status === 'hot' ? 'bg-red-500' :
              product.status === 'sale' ? 'bg-orange-500' : 'bg-gray-500'
            }`}>
              {product.status.toUpperCase()}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
