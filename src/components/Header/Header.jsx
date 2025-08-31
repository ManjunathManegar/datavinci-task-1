import './Header.css';
import { useState } from 'react';
import logo from '../../assets/logo.png';
import { HiMiniBars4 } from 'react-icons/hi2';
import { GoPerson } from 'react-icons/go';
import { IoSearchOutline, IoBagOutline } from 'react-icons/io5';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenu = () => {
    setIsMenuActive((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <button className="hamburger-menu" onClick={handleMenu}>
          <HiMiniBars4 color="#000000" className="menu-icon" />
        </button>
        <div className="desktop-left-view">
          <div className="desktop-para">
            <p className="para">WHICH MANUKA IS FOR ME?</p>
          </div>
          <div className="left-options">
            <p className="para">Shop</p>
            <p className="para">Explore</p>
          </div>
        </div>
        <img src={logo} alt="logo" className="logo" />
        <div className="desktop-right-view">
          <div className="box1">
            <p className="para">About</p>
          </div>
          <div className="box2">
            <p className="para">Rewards</p>
          </div>
          <div className="box3">
            <p className="para">Contact</p>
          </div>
          <GoPerson color="#000000" className="icon1" />
          <IoSearchOutline color="#000000" className="icon2" />
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <IoBagOutline color="#000000" className="icon3" />
            <span
              style={{
                position: 'absolute',
                top: '-5px',
                right: '-3px',
                paddingLeft: '7px',
                paddingRight: '7px',
                paddingTop: '2px',
                paddingBottom: '2px',
                backgroundColor: 'yellow',
                color: '#000000',
                borderRadius: '50%',
                fontSize: '10px',
                fontWeight: 'bold',
              }}
            >
              0
            </span>
          </div>
        </div>
      </nav>
      {isMenuActive && (
        <div className="dropdown-options">
          <p>About</p>

          <p>Rewards</p>
          <p>Contact</p>
        </div>
      )}
    </>
  );
};

export default Header;
