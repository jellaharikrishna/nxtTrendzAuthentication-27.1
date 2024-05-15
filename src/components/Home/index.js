import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-content-container">
      <div className="content-card">
        <h1 className="home-title-heading">Clothes That Get YOU Noticed</h1>
        <img
          className="home-title-image-mobile"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
          alt="clothes that get you noticed"
        />
        <p className="home-title-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard way
          you are .So, celebrate the seasons new and exciting fashion in your
          own way.
        </p>
        <button type="button" className="home-shopnow-btn">
          Shop Now
        </button>
      </div>
      <img
        className="home-title-image-laptop"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)

export default Home
