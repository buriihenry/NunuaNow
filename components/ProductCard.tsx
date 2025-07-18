import { Product } from '@/sanity.types';
import Image from 'next/image';
import React from 'react';
import { urlFor } from "@/sanity/lib/image";

interface Props{
    product: Product
}

const ProductCard = ({ product} : Props) => {
  return (
    <div  className="border border-gray-300 rounded-lg overflow-hidden group text-sm">
      <div>
        {product?.image && (
        <Image
              src={urlFor(product?.image).url()}
              alt="productImage"
              width={500}
              height={500}
              className={`w-full max-h-96 object-cover overflow-hidden  transition-transform duration-500 ${product?.stock !== 0 && "group-hover:scale-105"}`}
            />)}
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default ProductCard
