import '../styles/Cart.css';
import { useState, useEffect } from 'react';

function Cart({cart, updateCart}) {

  const [isOpen, setIsOpen] = useState(true)
  const total = cart.reduce(
    (acc,plantType) => acc + plantType.amount * plantType.price,0
  )
  useEffect(() => {
    document.title = `LMJ : ${total}$ d'achat`
  }, [total]
  )

   return isOpen ? (
   <div className="lmj-cart">
       <button onClick={() => setIsOpen(false)} className = "lmj-cart-toggle-button">Fermer</button>

       {cart.length > 0 ? ( 
                <div>
                  <h2>Panier</h2>
                  <ul>
           {cart.map(({ name, price, amount }, index) => (
             <div key={`${name}-${index}`}>
               {name} {price}$ x {amount}
             </div>
           ))}
         </ul>
         <h3> Total: {total}$</h3>
         <button onClick={() => updateCart([])} className="lmj-cart-toggle-button">RĂ©initialiser le Panier</button>
         </div>
       ) : (
         <div>Votre panier est vide </div>
       )}
  </div>

   ) : (
     <div className  =" lmj-cart-closed">
            <button onClick={() => setIsOpen(true)} className = "lmj-cart-toggle-button" >Ouvrir le panier </button>
     </div>
   )
}

export default Cart;