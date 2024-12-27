import "./App.css"
import { AddToCart, RemoveItem } from "./Icons"
import dessertsProdcts from "./data.json"

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/"

// function App() {
//   return (
//   <>
//   <h1>Hello World <AddToCart/>
//   </h1>
//   {/* <img src={BASE_URL + "cake-tablet.jpg"} alt="" /> */}
//   {dessertsProducts.map((dessert) => {
//         return (
//           <p key={dessert.name}>
//             <img src={BASE_URL + waffle-thumbnail.jpg} alt="" />
//           </p>
//         )
//       })}
//   <RemoveItem/>
//   </>
//   )

// }

// export default App

import React, { useState } from "react"
// import data from "./data.json"

const App = () => {
  // const desserts = [
  //   {
  //     id: 1,
  //     name: "Waffle with Berries",
  //     price: 6.5,
  //     img: "waffle-thumbnail.jpg"
  //   },
  //   {
  //     id: 2,
  //     name: "Vanilla Bean Crème Brûlée",
  //     price: 7,
  //     img: "creme-brulee-thumbnail.jpg"
  //   },
  //   { id: 3, name: "Macaron Mix of Five", price: 8, img: "macaron.jpg" },
  //   { id: 4, name: "Classic Tiramisu", price: 5.5, img: "tiramisu.jpg" },
  //   { id: 5, name: "Pistachio Baklava", price: 4, img: "baklava.jpg" },
  //   { id: 6, name: "Lemon Meringue Pie", price: 5, img: "pie.jpg" },
  //   { id: 7, name: "Red Velvet Cake", price: 4.5, img: "redvelvet.jpg" },
  //   { id: 8, name: "Salted Caramel Brownie", price: 4.5, img: "brownie.jpg" },
  //   { id: 9, name: "Vanilla Panna Cotta", price: 6.5, img: "pannacotta.jpg" }
  // ]

  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  return (
    <div style={styles.app}>
      {/* Menu Section */}
      <div style={styles.menu}>
        <h1 style={styles.title}>Desserts</h1>
        <div style={styles.dessertList}>
          {dessertsProdcts.map((dessert) => (
            <div key={dessert.id} style={styles.card}>
              <img
                src={BASE_URL + dessert.images.desktop}
                alt={dessert.name}
                style={styles.image}
              />
              <h3 style={styles.dessertName}>{dessert.name}</h3>
              <p style={styles.price}>${dessert.price.toFixed(2)}</p>
              <button
                style={styles.addButton}
                onClick={() => addToCart(dessert)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div style={styles.cart}>
        <h1 style={styles.title}>Your Cart ({cart.length})</h1>
        {cart.length === 0 ? (
          <p style={styles.emptyCartMessage}>Your cart is empty.</p>
        ) : (
          <>
            <ul style={styles.cartList}>
              {cart.map((item, index) => (
                <li key={index} style={styles.cartItem}>
                  <span>
                    {item.name} - ${item.price.toFixed(2)}
                  </span>
                  <button
                    style={styles.removeButton}
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div style={styles.cartTotal}>
              <p>Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>
            </div>
            <button
              style={styles.checkoutButton}
              onClick={() => alert("Proceeding to Checkout")}
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};


const styles = {
  app: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "2rem",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8eae3",
    height: "100vh"
  },
  menu: {
    flex: 3
  },
  cart: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
  },
  title: {
    color: "#d56c6c",
    fontSize: "1.5rem",
    marginBottom: "20px"
  },
  dessertList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px"
  },
  card: {
    width: "200px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px"
  },
  dessertName: {
    fontSize: "1rem",
    margin: "10px 0"
  },
  price: {
    color: "#888",
    marginBottom: "10px"
  },
  addButton: {
    backgroundColor: "#d56c6c",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer"
  },
  cartList: {
    listStyleType: "none",
    padding: 0
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px"
  },
  removeButton: {
    backgroundColor: "#d56c6c",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer"
  },
  cartTotal: {
    marginTop: "20px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  checkoutButton: {
    marginTop: "10px",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  emptyCartMessage: {
    fontSize: "16px",
    color: "#999",
    textAlign: "center",
  },
};
export default App