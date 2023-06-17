import { gql } from "@apollo/client";

export const BASE_PRODUCTS = gql`query {
  allProducts {
    name,
    description,
    image_url,
    category
  }
}`;