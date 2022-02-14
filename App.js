//import logo from './logo.svg';
//import '../App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import CareScale from './Carescale'; 
import PlantItem from './PlantItem';
import Footer from './Footer';
import '../styles/Layout.css';
import { useEffect, useState } from 'react';



function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

 return (
   <div>
     <Banner />
   <div className='lmj-layout-inner'>
     <Cart cart = {cart} updateCart = {updateCart} />
     <ShoppingList cart = {cart} updateCart = {updateCart} />
   </div>
     <CareScale />
     <PlantItem />
     <Footer />

   </div>
 )
}

export default App;