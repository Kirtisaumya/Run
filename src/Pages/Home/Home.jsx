import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import image1 from "../../image/1Bg.jpg";
import image2 from "../../image/2Bg.jpg";
import image3 from "../../image/3Bg.jpg";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import image4 from "../../image/4Bg.jpg";
import image5 from "../../image/5Bg.jpg";
import image6 from "../../image/6Bg.jpg";

import image7 from "../../image/C2A.png";
import image8 from "../../image/C2B.png";
import image9 from "../../image/C2C.png";
import image10 from "../../image/C2D.png";

import image11 from "../../image/Bbg.jpg";

import Footer from "../../Components/Footer"


import "./Home.css";
import { useCartContext } from "../../Context/CartContext";

const Home = () => {
  const{cart,setCart}=useCartContext()
  const [activeIndex, setActiveIndex] = useState(0);
  
  const AddCart =()=>{
      setCart(cart+1)
  }
  useEffect(() => {
    const loadCarousel = async () => {
      const bootstrap = await import("bootstrap");
      const carousel = document.querySelector("#carouselExampleIndicators");

      if (carousel) {
        const carouselInstance = new bootstrap.Carousel(carousel, {
          interval: 5000,
          wrap: true,
          pause: false,
        });

        carouselInstance._element.addEventListener(
          "slid.bs.carousel",
          function (event) {
            setActiveIndex(event.to);
          }
        );
      }
    };

    loadCarousel();
  }, []);

  return (
    <div className="home-container">
      <div className="carousel-wrapper">
        <div className="carousel-indicators">
          <span
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className={activeIndex === 0 ? "active" : ""}
          ></span>
          <span
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            className={activeIndex === 1 ? "active" : ""}
          ></span>
          <span
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            className={activeIndex === 2 ? "active" : ""}
          ></span>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
            <img src={image1} className="d-block w-100" alt="First slide" />
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
            <img src={image2} className="d-block w-100" alt="Second slide" />
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
            <img src={image3} className="d-block w-100" alt="Third slide" />
          </div>
        </div>
      </div>
      <div className="text-container">
        <p>Now Offering</p>
        <h1>Free Home Delivery</h1>
        <p>New Products to your door</p>
        <Link to="/Product" className="shop-now-button">
          Shop Now
        </Link>
      </div>

   <CardGroup>
      <Card>
      <Card.Img variant="top" src={image4} alt="Image description for card 1" />
        <Card.Body>
          <Card.Title>Nike</Card.Title>
          <Link to="/Product" className="shop-now-button">
          Shop
        </Link>
          
        </Card.Body>
        
      </Card>
      <Card>
      <Card.Img variant="top" src={image5} alt="Image description for card 1" />
        <Card.Body>
          <Card.Title>Adidas</Card.Title>
          <Link to="/Product" className="shop-now-button">
          Shop
        </Link>
          
        </Card.Body>
        
      </Card>
      <Card>
      <Card.Img variant="top" src={image6} alt="Image description for card 1" />
        <Card.Body>
          <Card.Title>New Balance</Card.Title>
          <Link to="/Product" className="shop-now-button">
          Shop
        </Link>
          
        </Card.Body>
        
      </Card>
    </CardGroup>
    <div className="shoe-text">
        
        <h1>Nike</h1>
        </div>
    <CardGroup>
      <Card>
      <Card.Img variant="top" src={image7} alt="Image description for card 1" />
        <Card.Body>
          <Card.Title>Nike Dunk Low Retro</Card.Title>
          <Card.Text>
            199.99$
          </Card.Text>
          <button className="shop-now-button" onClick={AddCart}>
          Add to cart
        </button>
        </Card.Body>
        
      </Card>
      <Card>
      <Card.Img variant="top" src={image8} alt="Image description for card 1" />
        <Card.Body>
          <Card.Title>Nike V2K Run</Card.Title>
          <Card.Text>
            209.99$
          </Card.Text>
          <button className="shop-now-button" onClick={AddCart}>
          Add to cart
        </button>
        
        </Card.Body>
        
      </Card>
      <Card>
      <Card.Img variant="top" src={image9} alt="Image description for card 1" />
        <Card.Body>
          <Card.Title>Tatum 2</Card.Title>
          <Card.Text>
            200.00$
          </Card.Text>
          <button className="shop-now-button" onClick={AddCart}>
          Add to cart
        </button>
        
        </Card.Body>
        
      </Card>
      <Card>
      <Card.Img variant="top" src={image10} alt="Image description for card 1" />
        <Card.Body>
          <Card.Title>Nike Air Max 1</Card.Title>
          <Card.Text>
            150.00$
          </Card.Text>
          <button className="shop-now-button" onClick={AddCart}>
          Add to cart
        </button>
        </Card.Body>
       
      </Card>
    </CardGroup>
    
    <div className="container-fluid">
    
    <img src={image11} alt="New Image Description" className="img-fluid" style={{ margin: "0" }}/>
    <div className="image-text"><h1>Buy 2 and get 20% OFF</h1> 
    </div>
    
        </div>
        
<Footer/>

</div>
  );
};

export default Home;
