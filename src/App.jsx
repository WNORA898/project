import "./App.css"
import  {AddToCart,RemoveItem} from "./Icons"
import dessertsProdcts from "./data.json"

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/"

function App() {
  return (
  <>
  <h1>Hello World <AddToCart/>
  </h1>
  {/* <img src={BASE_URL + "cake-tablet.jpg"} alt="" /> */}
  {dessertsProducts.map((dessert) => {
        return (
          <p key={dessert.name}>
            <img src={BASE_URL + dessert.images.thumbnail} alt="" />
          </p>
        )
      })}
  <RemoveItem/>
  </>
  )

}

export default App