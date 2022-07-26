
import { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import BeatLoader from "react-spinners/BeatLoader";


function App() {
  const [products,SetProducts] = useState([]);
  const [search, setSearch] = useState("")
  let [loading, setLoading] = useState(true);
  const [minimum, SetMin] = useState(0)
  const [maximum, SetMax] = useState(1000)

  const override: CSSProperties = {
    display: "block",
    borderColor: "red",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: "translate(-50%,-50%)"
  };

  useEffect (() => {
    fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(data=> {
            SetProducts(data)
             setTimeout(() => {
        setLoading(false)
      }, 2000);
        })
        
})
const SearcHandler = (e) => {
  setSearch(e.target.value)
 }
 const Minimum = (e) => {
    SetMin(e.target.value)
 } 
 const Maximum = (e) => {
  SetMax(e.target.value)
} 
 const filteredProducts = products.filter(products => products.title.toLowerCase().includes(search.toLowerCase()))
 const filterPrice = products.filter(products => products.price > minimum && products.price < maximum)
  return (
    <div className="App">
        <div className="row justify-content-between align-item-center text-center ">
          <div className="form-group my-3 w-50 mx-auto d-flex justify-content-between">
            <input onChange={SearcHandler} className='form-control' placeholder='Search' type="text" />
            <input onChange={Minimum} className='ms-3 w-25  form-control' type="number" placeholder='min'/>
            <input onChange={Maximum} className='ms-2 f w-25  form-control' type="number" placeholder='max'/>
          </div>
        </div>
{
  loading ? <BeatLoader loading={loading} cssOverride={override} size={20} />  : filterPrice.map(product => {
    return(
          <ProductList
          title = {product.title}
          price = {product.price}
          description = {product.description}
          category = {product.category}
          image = {product.image}
          />
    )
  })
}
{/* {
    loading ? <BeatLoader loading={loading} cssOverride={override} size={20} />  : filteredProducts.map(product => {
      return(
            <ProductList
            title = {product.title}
            price = {product.price}
            description = {product.description}
            category = {product.category}
            image = {product.image}
            />
      )
    })
} */}
    </div>
  );
}

export default App;
