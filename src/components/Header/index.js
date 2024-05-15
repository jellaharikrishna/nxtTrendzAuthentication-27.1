import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="logo-logout-card-mobile">
      <img
        className="nav-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <Link to="/login" className="logout-link">
        <img
          className="nav-logout"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
        />
      </Link>
    </div>
    <div className="menu-card-mobile">
      <img
        className="menu-icon"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
        alt="nav home"
      />
      <img
        className="menu-icon"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
        alt="nav products"
      />
      <img
        className="menu-icon"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
        alt=" nav cart"
      />
    </div>
    <div className="logo-menu-card-laptop">
      <img
        className="nav-logo-laptop"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="menu-card-laptop">
        <li className="menu-heading">Home</li>
        <li className="menu-heading">Products</li>
        <li className="menu-heading">Cart</li>
        <Link to="/login" className="logout-link">
          <button type="button" className="logout-btn">
            Logout
          </button>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header
