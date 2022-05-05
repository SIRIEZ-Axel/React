import Banner from './assets/js/Banner'
import logo from './assets/img/leaf.png'
import Cart from './assets/js/cart'
import ShoppingList from './assets/js/ShoppingList'
import './assets/style/layout.css'
import Footer from './assets/js/footer'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart />
				<ShoppingList />
			</div>
			<Footer />
		</div>
	)
}

export default App