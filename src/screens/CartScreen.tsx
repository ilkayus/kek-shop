import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { ProductListCard } from "../components";
import { selectUserCart } from "../features/user/userSlice";
import { selectProducts } from "../features/commonData/dataSlice";
import { useAppSelector } from "../hooks/typedReduxHooks";

const CartScreen = () => {
  const cart = useAppSelector(selectUserCart);
  const products = useAppSelector(selectProducts);
  const cartProducts =
    cart.length > 0
      ? cart[0].products.map((cartProduct) => {
          const product = products.find(
            (product) => product.id === cartProduct.productId
          );
          if (product) {
            return {
              product,
              count: cartProduct.quantity,
              sumPrice:
                cartProduct.quantity * (product.discountPrice || product.price),
            };
          } else return;
        })
      : [];

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.headerText}>Your Cart</Text>
        {cartProducts.length > 0 ? (
          <View>
            <FlatList
              data={cartProducts}
              renderItem={({ item }) => (
                <ProductListCard
                  product={item?.product}
                  count={item?.count}
                  sumPrice={item?.sumPrice}
                />
              )}
            />
          </View>
        ) : (
          <Text style={styles.empty}>Your cart is empty!</Text>
        )}
      </View>
      <View style={styles.checkout}>
        <Text style={styles.price}>
          Total: $
          {cartProducts
            .reduce(
              (prev, next) => prev + (next === undefined ? 0 : next.sumPrice),
              0
            )
            .toFixed(2)}
        </Text>
        <View style={{ flex: 5 }}>
          <Button color="#442120" title="Check Out" />
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 15,
    fontWeight: "bold",
    color: "#442120",
  },
  empty: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 15,
    fontWeight: "bold",
    color: "#442120",
  },
  price: {
    flex: 3,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
  },
  summary: {
    flex: 15,
  },
  checkout: {
    marginTop: 25,
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});
