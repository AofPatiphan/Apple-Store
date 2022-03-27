import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import './productcard.css';

function ProductCard({ productData }) {
    const { role } = useContext(AuthContext);
    return (
        <Link
            className="col-lg-4 col-md-12 col-sm-12 col-xs-12 productCard"
            to={`${role === 'guest' ? '/login' : `/store/${productData.id}`}`}
        >
            <img
                className="productPicture"
                src={`${productData.ProductImages[0].image}`}
                alt=""
            />
            <div className="productName">{productData.modelName}</div>
            <div className="productDetail">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum voluptas aliquid, deserunt maxime dicta nobis maiores
                    tempore fuga minus facilis! In quo aspernatur inventore
                    similique? Eos quae sint voluptatem placeat?
                </p>
            </div>
            <div className="productPrice">฿ {productData.price}</div>
        </Link>
    );
}

export default ProductCard;
