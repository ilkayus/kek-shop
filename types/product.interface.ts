interface IProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category:
    | "electronics"
    | "jewelry"
    | "men's clothing"
    | "women's clothing"
    | "Electronics"
    | "Jewelry"
    | "Men's Clothing"
    | "Women's Clothing";
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default IProductData;
