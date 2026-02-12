import type { JsonApiResource } from "next-drupal";

export interface Blogs extends JsonApiResource {
  id: string;
  title: string;
  body: {
    summary: string;
  };
  field_blog_types: {
    name: string;
  };
  field_estimated_read_time: number;
  field_blogimage: {
    field_media_image: {
      uri: {
        url: string;
      };
    };
  }
}

export interface News {
  date: string;
  month: string;
  year: string;
  title: string;
  description: string;
}
export interface Product {
  /** Unique product identifier */
  id: string | number;

  /** Main display name */
  productName: string;

  /** Category label (e.g. OTC, Prescription, Device) */
  productCategory: string;

  /** Price string or number (₹299 / $12.99) */
  productPrice: string | number;

  /** Rating value (4.5, 3, etc.) */
  productRating?: number;

  /** Product image URL */
  imageUrl?: string;

  /** Brand name (Pfizer, Bayer, etc.) */
  brand?: string;

  /** SKU or internal reference */
  sku?: string;

  /** Availability flag */
  inStock?: boolean;
};
