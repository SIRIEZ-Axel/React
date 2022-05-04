import logo from '../img/wood-logo.svg';
import header1 from '../img/wood-left.svg';
import header2 from '../img/wood-right.svg';
import woodstock from '../img/WOOD-STOCK.svg';

const Header = () => {
  return (
    <header className="App-header">

      <div className='header-back'>
        <img src={header2} className='header2'></img>
        <img src={header1} className='header1'></img>
        <nav className="App-nav">
          <div className='header-middle'>
            <span className='wood-line'></span>
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
