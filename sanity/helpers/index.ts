import { sanityFetch } from "../lib/live";
import  { CATEGORIES_QUERY, PRODUCTS_QUERY, SALE_QUERY, PRODUCT_BY_SLUG  } from "./queries"


export const getSale = async () => {
  try {
    const products = await sanityFetch({
      query: SALE_QUERY,
    });
    return products?.data || [];
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};

export const getAllProducts = async () => {
  
  try {
    const products = await sanityFetch({
      query: PRODUCTS_QUERY
    });
    return products.data || [];
  } catch (error) {
    console.log("Error fetching all products:", error);
    return [];
  }
};

export const getAllCategories = async () => {

  try {
    const categories = await sanityFetch({
      query: CATEGORIES_QUERY,
    });
    return categories.data || [];
  } catch (error) {
    console.log("Error fetching all categories:", error);
    return [];
  }
};

export const getProductBySlug = async (slug:string) =>{
  try{
    const product = await sanityFetch({
      query: PRODUCT_BY_SLUG,
      params: { 
        slug 
      },

    });
    return product?.data || null;
  } catch(error){
    console.log("Product fetching all categories:", error);
    return null;
  }
}