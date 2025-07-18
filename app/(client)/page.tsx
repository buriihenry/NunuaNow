import DiscountBanner from "@/components/DiscountBanner";

import { getAllProducts, getSale } from "@/sanity/helpers";

export default async function Home() {
  const products = await getAllProducts();

  const sales = await getSale();

  console.log(products)


  return (
   <div>
   
   <DiscountBanner sales={sales}/>
   
   </div>
  );
}

