import { useState } from "react";
import '../styles/Footer.css'


function Footer () {
    const [inputValue, setInputValue] = useState('')

    function HandleInput(e) {
        setInputValue(e.target.value)
    }

    function HandleBlur() {
        if(!inputValue.includes('@')) {
            alert("Attention, pas assez d'@, ceci n'est pas une adresse valide ")
        }
    }

    return (
        <footer className="lmj-footer">
            <div className="lmj-footer-element">
                Pour les passionné.e.s des plantes
            </div>
            <div className="lmj-footer-element">
                Laissez nous votre mail : 
            </div>
            <input 
                 placeholder="Enter votre mail"
                 onChange={HandleInput}
                 value = {inputValue}
                 onBlur = {HandleBlur}
            />
        </footer>
    )
}

export default Footer ;