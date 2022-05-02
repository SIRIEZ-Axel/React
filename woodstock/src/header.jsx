import logo from './wood-logo.svg';
import header1 from './wood-left.svg';
import header2 from './wood-right.svg';
import woodstock from './WOOD-STOCK.svg';

const Header = () => {
  return (
    <header className="App-header">

      <div className='header-back'>
        <img src={header2} className='header2'></img>
        <img src={header1} className='header1'></img>
        <nav className="App-nav">
          <div className='header-middle'>
            <img src={woodstock} alt="wood header" className='woodstock-header' />
          </div>
          <a href="#">
            <div className='burger-menu'>
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
            </div>
          </a>
          <span className="nav-link">
            <a href="#"><img src={logo} alt="wood header" /></a>
            <a href="#">About</a>
            <a href="#">Furnitures</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>
          </span>
        </nav>
      </div>
    </header>
  )
}
export default Header;
