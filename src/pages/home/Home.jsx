import React from 'react';
import ProductCard from '../../components/products/productcard/ProductCard';
import './home.css';

function Home() {
    return (
        <div className="homeBody">
            <div>
                <div className="row">
                    <div className="col-sm-12 col-xs-12 homeBanner d-flex flex-column justify-content-center">
                        Banner
                    </div>
                    <div className="col-sm-4 col-xs-12 productCardContainer">
                        <ProductCard />
                    </div>
                    <div className="col-sm-4 col-xs-12 productCardContainer">
                        <ProductCard />
                    </div>
                    <div className="col-sm-4 col-xs-12 productCardContainer">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
