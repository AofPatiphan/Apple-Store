import React from 'react';
import './productcard.css';

function ProductCard() {
    return (
        <div className="col-md-4 col-sm-4 col-xs-12 productCard">
            <div className="productPicture">Product Pic</div>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-6 productName">Product Name</div>
                        <div className="col-6 productPrice">Price</div>
                    </div>
                </div>
                <div className="col-12 productDetail">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsum voluptas aliquid, deserunt maxime dicta nobis
                        maiores tempore fuga minus facilis! In quo aspernatur
                        inventore similique? Eos quae sint voluptatem placeat?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
