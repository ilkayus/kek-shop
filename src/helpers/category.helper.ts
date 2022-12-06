export const categoryName = (category: string) => {
  switch (category) {
    case "electronics":
      return "Electronics";

    case "Electronics":
      return "electronics";

    case "jewelry":
      return "Jewelry";

    case "Jewelry":
      return "jewelery";

    case "men's clothing":
      return "Men's Clothing";

    case "Men's Clothing":
      return "men's clothing";

    case "women's clothing":
      return "Women's Clothing";

    case "Women's Clothing":
      return "women's clothing";

    default:
      return category;
  }
};
