import { plantList } from '../datas/planList'
import PlantItem from './PlantItem'
import '../style/shoppinglist.css'

function ShoppingList({ cart, updateCart }) {
	// Petite précision : categories nous vient de la partie précédente pour récupérer toutes les catégories uniques de plantes.
	
		const categories = plantList.reduce(
			(acc, elem) =>
				acc.includes(elem.category) ? acc : acc.concat(elem.category),
				[]
		)
		
		function addToCart(name, price) {
			const currentPlantSaved = cart.find((plant) => plant.name === name)
			if (currentPlantSaved) {
				const cartFilteredCurrentPlant = cart.filter(
					(plant) => plant.name !== name
				)
				updateCart([
					...cartFilteredCurrentPlant,
					{ name, price, amount: currentPlantSaved.amount + 1 }
				])
			} else {
				updateCart([...cart, { name, price, amount: 1 }])
			}
		}

		return (
			<div className='lmj-shopping-list'>
				<ul>
					{categories.map((cat) => (
					<li key={cat}>{cat}</li>
					))}
				</ul>
				<ul className='lmj-plant-list'>
					{plantList.map(({ id, cover, name, water, light, price }) => (
						<div key={id}>
							<PlantItem cover={cover} name={name} water={water} light={light} price={price} />
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					))}
				</ul>
			</div>
		)
	}
	
	export default ShoppingList