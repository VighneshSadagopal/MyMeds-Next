import { NextDrupal } from "next-drupal"
import { DrupalJsonApiParams } from "drupal-jsonapi-params";


const drupal = new NextDrupal("https://mymeds.ddev.site:8443/"!);


process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // To fix the development fetch error


export async function fetchBlogs() {
 const params = new DrupalJsonApiParams()
   .addFields("node--blogs", ["id","title", "body","field_blog_types", "field_estimated_read_time", "field_blogimage"])
   .addInclude(["field_blogimage.field_media_image", "field_blog_types"])
   .addSort("created", "DESC");


 const response = await drupal.getResourceCollection("node--blogs", {
   params: params.getQueryObject(),
   cache: "force-cache" // Ensures fast loading
 });

 return response;
}

export async function fetchAllProducts() {
  const response = await fetch(`http://localhost:8000/api/all-products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store", // Ensures fresh data
  });

  
  return await response.json();
}

export type SearchItem = {
  id: string;
  title: string;
  // add fields you actually use in UI
};

export async function searchProducts(query:string): Promise<SearchItem[]> {
  const q = query.trim();
  if (!q) return [];
  const response = await fetch(`http://localhost:8000/api/products/search?q=${encodeURIComponent(q)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store", // Ensures fresh data
  });

  
  return await response.json();
}