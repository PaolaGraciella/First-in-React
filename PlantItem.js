import CareScale from "./Carescale"
import '../styles/PlantItem.css'

function HandleClick(plantName) {

       alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix`)
}

function PlantItem ({id, cover, name, water, light, price}) {
    return (

                <li  className = 'lmj-plant-item'  onClick = {() => HandleClick }>
                    <span className="lmj-plant-item-price">{price}$</span>
                    <img src = {cover} className="lmj-plant-item-cover" alt = {`${name}cover`} />
                    {name}
                    <div>
                    <CareScale careType = 'water' scaleValue = {water} />
                    <CareScale careType = 'light' scaleValue = {light} />
                    </div>
                </li>
    )
       
}


export default PlantItem;