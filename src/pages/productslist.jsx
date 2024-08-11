import React from 'react';
import '../styles/product-list.css';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    imgSrc: 'https://th.bing.com/th/id/OIP.bO4R3L5_jk0ZSqYG5s3jdQHaHa?rs=1&pid=ImgDetMain',
    discountLabel: '-20%',
    title: "Car Spoiler [Universal]",
    price: 'INR : 10000',
    originalPrice: 'INR : 15000',
  },
  {
    id: 2,
    imgSrc: 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/90107914_XL1_20211020.jpg',
    title: "Windshield Cleaner [Universal]",
    price: 'INR : 350',
  },
  {
    id: 3,
    imgSrc: 'https://www.spectrachemie.cz/files/spectra-foam-gun-365.png',
    title: "Foam gun",
    price: 'INR : 1500',
    originalPrice: 'INR : 2500',
  },
  {
    id: 4,
    imgSrc: 'https://i5.walmartimages.com/asr/f3d465cf-f9e8-4fa8-ae0e-158f0f103efc_1.01402210b1529c29e2a75efd20780547.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
    title: "Air freshner",
    price: 'INR : 400',
  },
  {
    id: 5,
    imgSrc: 'https://cdn11.bigcommerce.com/s-c824d/images/stencil/960w/products/199732/179665/Cummins-Oil-Fill-Cap-26760-3__11030.1654700334.jpg?c=2',
    title: "Engine Oil Cap",
    price: 'INR : 300',
  },
  {
    id: 6,
    imgSrc: 'https://th.bing.com/th/id/OIP.lGL6DhcIxrekHsyp5PZRHAHaHa?w=1500&h=1500&rs=1&pid=ImgDetMain',
    title: "Engine Oil Filter",
    price: 'INR : 3000',
  },
  {
    id: 7,
    imgSrc: 'https://th.bing.com/th/id/OIP.J--t3BYea_5JbzSUEKgcNwHaHa?rs=1&pid=ImgDetMain',
    title: "LED Head lights",
    price: 'INR : 5000',
  },
  {
    id: 9,
    imgSrc: 'https://cdn.shopclues.com/images1/detailed/104909/149011739-104909787-1581194155.jpg',
    title: "Roof rack",
    price: 'INR : 30000',
  },
  {
    id: 10,
    imgSrc: 'https://cdn11.bigcommerce.com/s-o7ivkhfbpd/images/stencil/2048x2048/products/3770/8146/1__47807.1532332934.jpg?c=2',
    title: "Ambient lights",
    price: 'INR : 14000',
  },
  {
    id: 11,
    imgSrc: 'https://i5.walmartimages.com/asr/b7198a49-7730-482d-b10c-4af1c6c02fc2_1.606340155816e665119ddc0c057b2505.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
    title: "Seat covers",
    price: 'INR : 13000',
  },
  {
    id: 12,
    imgSrc: 'https://th.bing.com/th/id/OIP.b8bVKCKFq1Tfh1VGW1qbLAHaHa?rs=1&pid=ImgDetMain',
    title: "Exhaust 2 pipe",
    price: 'INR : 12000',
  },
  {
    id: 13,
    imgSrc: 'https://th.bing.com/th/id/OIP.gi1yVX1XKArFxrO0poc4AAHaHa?w=768&h=768&rs=1&pid=ImgDetMain',
    title: "Door guard",
    price: 'INR : 2000',
  },
  {
    id: 14,
    imgSrc: 'https://i5.walmartimages.com/asr/96d97910-6b72-4ebc-989a-17ef25d73e3e_1.824eea46534177d5348d59ef7b0bde05.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
    title: "Speaker System for car",
    price: 'INR : 40000',
  },
];

const ProductList = () => (
  <div className="product-list">
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3 col-sm-6" key={product.id}>
          <div className="product-grid">
            <div className="product-image">
              <Link to="#">
                <img className="pic-1" src={product.imgSrc} alt={product.title} />
              </Link>
              {product.discountLabel && (
                <span className="product-discount-label">{product.discountLabel}</span>
              )}
            </div>
            <div className="product-content">
              <h3 className="title">
                <Link to="#">{product.title}</Link>
              </h3>
              <div className="price">
                {product.price}
                {product.originalPrice && <span>{product.originalPrice}</span>}
              </div>
              <Link to="/paymentnew">
                <button className="product-button">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductList;
