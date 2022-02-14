import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
}

function CareScale ({scaleValue, careType}) {

    const tab = [1, 2, 3]
    const scaleType = careType === 'light' ? (
        <img src = {Sun} alt = 'sun-icon' />
    ): (
        <img src = {Water} alt = 'water-icon' />
    )

    return (
        <div
            onClick = {() =>
            alert(
                `Cette plante requiert ${quantityLabel[scaleValue]} ${
                    careType === 'light' ? 'de lumière' : "d'arrosage"
                }`
            )
            }
            >
            {tab.map((tabElement) => 
               scaleValue >= tabElement ?  (
                <span key = {tabElement.toString()}>{scaleType}</span>
               )   : null
            )}
        </div>
    )
}

export default CareScale;