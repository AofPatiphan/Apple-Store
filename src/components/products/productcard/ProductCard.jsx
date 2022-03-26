import React from 'react';
import { Link } from 'react-router-dom';
import './productcard.css';

function ProductCard() {
    return (
        <Link
            className="col-lg-4 col-md-12 col-sm-12 col-xs-12 productCard"
            to={'/store/mac'}
        >
            <img
                className="productPicture"
                src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1648234011/Wow/mba_cgn1an.png"
                alt=""
            />
            <div className="productName">MacBook Air M1 128Gb</div>
            <div className="productDetail">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum voluptas aliquid, deserunt maxime dicta nobis maiores
                    tempore fuga minus facilis! In quo aspernatur inventore
                    similique? Eos quae sint voluptatem placeat?
                </p>
            </div>
            <div className="productPrice">฿ 32,900</div>
        </Link>
    );
}

export default ProductCard;
