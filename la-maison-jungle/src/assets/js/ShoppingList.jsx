import '../style/shoppinglist.css';
import carescale from './carescale.jsx';

const plantlist = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

function Shoppinglist() {
    return (
        <ul className='shoppinglist'>
            {plantlist.map((plant, index) => (
                <li className='listitems' key={`${plant}-${index}`}>
                    {plant}
                    <carescale />
                </li>
            ))}
        </ul>
    )
}

export default Shoppinglist;