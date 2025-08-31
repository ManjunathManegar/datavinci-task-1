import './Home.css';
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdInfoOutline,
} from 'react-icons/md';
import { FaHeart, FaMinus, FaPlus } from 'react-icons/fa';
import { IoReload } from 'react-icons/io5';

import Popup from 'reactjs-popup';

import { useState } from 'react';
import bg from '../../assets/slickBackground.png';
import v2 from '../../assets/varientImage2.png';
import v3 from '../../assets/varientImage3.png';
import v4 from '../../assets/varientImage4.png';
import v5 from '../../assets/varientImage5.png';
import v6 from '../../assets/varientImage6.png';
import gi1 from '../../assets/galleryImage1.png';
import gi2 from '../../assets/galleryImage2.png';
import gi3 from '../../assets/galleryImage3.png';
import gi4 from '../../assets/galleryImage4.jpg';
import gi5 from '../../assets/galleryImage5.png';
import gi6 from '../../assets/galleryImage6.png';
import gi7 from '../../assets/galleryImage7.png';
import gi8 from '../../assets/galleryImage8.png';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';
import b1 from '../../assets/bundle1.png';
import spoon from '../../assets/spoon.png';
import f1 from '../../assets/footer1.png';
import { PiCurrencyDollarSimpleBold } from 'react-icons/pi';

const galleyImages = [gi1, gi2, gi3, gi4, gi5, gi6, gi7, gi8];
const varientImages = [v2, v3, v4, v5, v6];
const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleyImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleyImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const keyHandlePrev = (event) => {
    if (event.key === 'ArrowLeft') {
      handlePrevious();
    }
  };

  const keyHandleNext = (event) => {
    if (event.key === 'ArrowRight') {
      handleNext();
    }
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <div className="galery-section">
        <button
          className="arrow-button"
          type="button"
          onKeyDown={keyHandlePrev}
          onClick={handlePrevious}
        >
          <MdArrowBackIos className="arrow" />
        </button>
        <div
          className="display-section"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <img
            src={galleyImages[currentIndex]}
            alt="gallery-image"
            className="gallery"
          />
        </div>
        <button
          className="arrow-button"
          type="button"
          onKeyDown={keyHandleNext}
          onClick={handleNext}
        >
          <MdArrowForwardIos className="arrow" />
        </button>
      </div>
      <h1 className="title">
        Manuka Honey UMF<span className="span-item">TM</span> 24+ MGO1122+
      </h1>
      <div className="info-section">
        <div>
          <Popup trigger={<MdInfoOutline size={18} />} position="bottom left">
            {(close) => (
              <div className="popup-container">
                <div className="card">
                  <p>
                    <strong>UMF</strong> is the strength and purity rating of
                    Manuka honey.
                  </p>
                  <div className="colored-cards">
                    <div className="card-item1">
                      <p>10+</p>
                    </div>
                    <div className="card-item2">
                      <p>15+</p>
                    </div>
                    <div className="card-item3">
                      <p>20+</p>
                    </div>
                    <div className="card-item4">
                      <p>24+</p>
                    </div>
                    <div className="card-item5">
                      <p>26+</p>
                    </div>
                    <div className="card-item6">
                      <p>28+</p>
                    </div>
                    <div className="card-item7">
                      <p>30+</p>
                    </div>
                  </div>
                  <p>
                    The higher the number, the greater the potency and rarity of
                    Manuka honey.
                  </p>
                </div>
                <div className="card">
                  <p>
                    <strong>MGO </strong>is the key natural compound that gives
                    Manuka honey its special antibacterial strength.
                  </p>
                  <div className="colored-cards">
                    <div className="card-item1">
                      <p>263+</p>
                    </div>
                    <div className="card-item2">
                      <p>514+</p>
                    </div>
                    <div className="card-item3">
                      <p>829+</p>
                    </div>
                    <div className="card-item4">
                      <p>1122+</p>
                    </div>
                    <div className="card-item5">
                      <p>1281+</p>
                    </div>
                    <div className="card-item6">
                      <p>1450+</p>
                    </div>
                    <div className="card-item7">
                      <p>1620+</p>
                    </div>
                  </div>
                  <p>
                    The higher the number, the higher the antibacterial
                    properties in the honey.
                  </p>
                </div>
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                >
                  Close
                </button>
              </div>
            )}
          </Popup>
        </div>
        <p className="info-para">What is UMF and MGO?</p>
      </div>
      <p className="tag-name">Gallery</p>
      <div className="thumbnails">
        {galleyImages.map((image) => (
          <button
            className="thumbnail-button"
            onClick={() => setCurrentIndex(galleyImages.indexOf(image))}
          >
            <img
              className={`thumbnail ${image === galleyImages[currentIndex] ? 'opacity' : ''}`}
              src={image}
              alt="thumbnail"
            />
          </button>
        ))}
      </div>
      <div className="revew-section">
        <p>The Optimiser</p>
        <div className="review">
          <FaHeart size={20} className="heart" />
          <FaHeart size={20} className="heart" />
          <FaHeart size={20} className="heart" />
          <FaHeart size={20} className="heart" />
          <FaHeart size={20} className="heart" />
          <p className="count">825 Reviews</p>
        </div>
        <p>
          For those times in life when quality comes first. This pure UMF™ 24+
          Manuka Honey is powerfully active, sourced from wild and rugged
          locations around Aotearoa New Zealand and great for almost all uses.
          It has a full, delicious flavour and your body will love you for it.
        </p>
        <div className="logo-container">
          {logos.map((logo) => (
            <img src={logo} alt="logos" className="logos" />
          ))}
        </div>
      </div>
      <p className="tag-name">
        Size (Select One)
        <br />
        Variant: 125g | 4.4oz
      </p>
      <div className="varients">
        {varientImages.map((item) => (
          <img
            className={`varient ${item === varientImages[0] ? 'selected' : ''}`}
            src={item}
            alt="varient"
          />
        ))}
      </div>
      <p className="tag-name">PAYMENT OPTIONS (SELECT ONE)</p>
      <div className="payment-card">
        <div className="payment-options">
          <div className="selected-payment-option">
            <p>One-time purchase</p>
            <p>$55.88 USD</p>
          </div>
          <div className="other-payment-option">
            <p>Subscribe & save 20%</p>
            <p>$44.70 USD</p>
          </div>
        </div>
        <div className="subscription-detail">
          <IoReload size={16} />
          <p>What is a Subscription?</p>
        </div>
      </div>
      <p className="tag-name">Select Quantity</p>
      <div className="quantity-selection-card">
        <div className="quantity-bg">
          <button
            className="quantity-button"
            type="button"
            onClick={handleDecrease}
          >
            <FaMinus className="minus" />
          </button>
          <p>{quantity}</p>
          <button
            className="quantity-button"
            type="button"
            onClick={handleIncrease}
          >
            <FaPlus />
          </button>
        </div>
        <button className="add-to-cart">Add to cart</button>
      </div>
      <div className="bundle-card">
        <div className="top-sec">
          <MdArrowBackIos className="arrow" />
          <p>Beauty Bundle</p>
          <MdArrowForwardIos className="arrow" />
        </div>
        <div className="bundle">
          <div className="container">
            <img src={b1} className="bundle-image" />
            <p>UMF 20+</p>
          </div>
          <FaPlus size={40} color="#000000" />
          <div className="container">
            <img src={gi1} className="bundle-image" />
            <p>UMF 24+</p>
          </div>
          <FaPlus size={40} color="#000000" />
          <div className="container">
            <img src={spoon} className="bundle-image" />
            <p>Wooden Spoon</p>
          </div>
          <div className="bundle-value">
            <p className="strike-para">$478.75 USD</p>
            <strong>$430.88 USD</strong>
            <p className="save-para">Save 10%</p>
          </div>
        </div>
        <button className="add-to-cart">Add bundle to cart </button>
      </div>
      <div className="footer-section">
        <div className="footer-top">
          <img src={f1} className="footer-image" />
          <p>Colourclub members earn up to</p>
          <div className="reward">
            <p>56</p>
          </div>
          <p>reward points when buy this item.</p>
          <a href="#">Sign up or log in</a>
        </div>
        <div className="delivery-details">
          <p>
            Delivery
            <br />
            FREE DELIVERY ON ORDERS OVER $30
          </p>
          <p>ESTIMATED DELIVERY DATE: Jun 9 - Jun 13</p>
        </div>
        <div className="delivery-details">
          <p>After Pay or 4 interest-free payments of $13.97 with </p>
          <div className="dollar">
            <PiCurrencyDollarSimpleBold color="#ffffff" />
          </div>
          <strong>Afterpay</strong>
          <MdInfoOutline size={40} style={{ marginLeft: '10px' }} />
        </div>
        <p className="tag-name">UMF™ scale</p>
        <div className="colored-cards">
          <div className="card-item1">
            <p>UMF™ 10+</p>
          </div>
          <div className="card-item2">
            <p>UMF™ 15+</p>
          </div>
          <div className="card-item3">
            <p>UMF™ 20+</p>
          </div>
          <div className="card-item4" style={{ borderBottom: '4px solid' }}>
            <p>UMF™ 24+</p>
          </div>
          <div className="card-item5">
            <p>UMF™ 26+</p>
          </div>
          <div className="card-item6">
            <p>UMF™ 28+</p>
          </div>
          <div className="card-item7">
            <p>UMF™ 30+</p>
          </div>
        </div>
        <p className="tag-name">Taste Profile</p>
        <input type="range" />
        <div className="range">
          <p>Clean & Intense</p>
          <p>Bold & Intense</p>
        </div>
      </div>
    </>
  );
};

export default Home;
