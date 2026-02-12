import { NextDrupal } from "next-drupal"
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { Blogs } from "@/types/content";


const drupal = new NextDrupal(process.env.NEXT_PUBLIC_DRUPAL_BASE_URL!,);




export async function fetchBlogs(): Promise<Blogs[]> {
  const params = new DrupalJsonApiParams()
    .addFields("node--blogs", ["id", "title", "body", "field_blog_types", "field_estimated_read_time", "field_blogimage"])
    .addInclude(["field_blogimage.field_media_image", "field_blog_types"])
    .addSort("created", "DESC");


  const response = await drupal.getResourceCollection("node--blogs", {
    params: params.getQueryObject(),
    cache: "no-store" // Ensures fresh data
  });

  return response as Blogs[];
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

export type SearchResponse = {
  items: SearchItem[];
};

export async function searchProducts(query: string): Promise<SearchResponse> {
  const q = query.trim();
  if (!q) return { items: [] }; // Return an empty object with items array
  const response = await fetch(`http://localhost:8000/api/products/search?q=${encodeURIComponent(q)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store", // Ensures fresh data
  });

  return await response.json();
}