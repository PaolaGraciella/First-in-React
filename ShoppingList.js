import { plantList } from "../datas/PlantList";
import '../styles/ShoppingList.css';
import PlantItem from "./PlantItem";
import './Cart';
import { useState } from "react";
import Categories from "./Categories";

function ShoppingList({cart, updateCart}) {
    const [activeCategory, updateCategories] = useState('')
    const categories = plantList.reduce(
        (acc, plant) => 
               acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function addToCart (name, price){
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if(currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount : currentPlantSaved.amount + 1}
            ])
        } else {
            updateCart ([...cart,{name,price,amount:1}])
        }
    }
    return (
        <div>
            <Categories 
                      categories={categories}
                      updateCategories = {updateCategories}
                      activeCategory = {activeCategory}
            />

            <ul className="lmj-plant-list">
            {plantList.map(({id, cover,name,water,light,price, category}) => 
            !activeCategory || activeCategory === category ? (
                <div key = {id}>
                <PlantItem
                   id = {id}
                   name = {name}
                   cover = {cover}
                   water = {water}
                   light = {light}
                   price = {price}
                />
                <button onClick={() => addToCart(name, price)} className = 'lmj-cart-toggle-button'>Ajouter</button>
                </div>
            ) : null
            )}
            </ul>
        </div>
        
    )
}
export default ShoppingList;