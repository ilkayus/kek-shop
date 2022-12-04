const getAllProducts = () => {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => json);
};

const getUserCart = (id: string) => {
  return fetch(`https://fakestoreapi.com/carts/user/${id}`)
    .then((response) => response.json())
    .then((json) => json);
};

const getUser = (id: string) => {
  return fetch(`https://fakestoreapi.com/users/${id}`)
    .then((response) => response.json())
    .then((json) => json);
};

const getCategories = () => {
  return fetch("https://fakestoreapi.com/products/categories")
    .then((response) => response.json())
    .then((json) => json);
};

export { getAllProducts, getUserCart, getUser, getCategories };
