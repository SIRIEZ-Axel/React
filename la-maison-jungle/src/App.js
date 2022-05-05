import Banner from './assets/js/Banner'
import logo from './assets/img/leaf.png'
import Cart from './assets/js/cart'
import ShoppingList from './assets/js/ShoppingList'
import './assets/style/layout.css'
import Footer from './assets/js/footer'
import { useState } from 'react'

function App() {
	const [cart, updateCart] = useState([])
	const [isFooterShown, updateIsFooterShown] = useState(true)

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<button onClick={() => updateIsFooterShown(!isFooterShown)}>Cacher
			</button>
			{isFooterShown && <Footer cart={cart} />}
		</div>
	)
}

export default App