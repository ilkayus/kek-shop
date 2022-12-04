interface IShoppingCart {
  id: number;
  userId: number;
  products: {
    productId: number;
    quantity: number;
  }[];
}

export default IShoppingCart;
