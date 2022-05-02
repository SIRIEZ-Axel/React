import logo from './wood-logo.svg';
import header1 from './wood-left.svg';
import header2 from './wood-right.svg';

const Header = () => {
  return (
    <header className="App-header">
      <div className='header-back'>
        <img src={header2} className='header2'></img>
        <img src={header1} className='header1'></img>
        <nav className="App-nav">
          <a href="#">
            <div className='burger-menu'>
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
            </div>
          </a>
          <a href="#"><img src={logo} alt="wood header" />
          </a>
          <span className="nav-link">
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
