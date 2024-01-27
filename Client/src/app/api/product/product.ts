import axios from "axios";

const API_BASE_URL = "http://localhost:3060";

export async function getProductBySlug(slug: string) {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/product/getSingle/${slug}`
    );
    const product = response.data;

    return product;
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return null;
  }
}
