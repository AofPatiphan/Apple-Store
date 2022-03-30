import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './store.css';
import ProductCard from '../../components/products/productcard/ProductCard';
import { getProduct } from '../../apis/store';

function Store() {
    const [allProduct, setAllProduct] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await getProduct();
            setAllProduct(res.data.products);
        } catch (err) {
            console.log(err.message);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="storebody">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <div>เลือกชนิดสินค้า</div>
                        <ul className="categorylist">
                            <li>
                                <Link to={'/store/mac'}>Mac</Link>
                            </li>
                            <li>
                                <Link to={'/store/ipad'}>iPad</Link>
                            </li>
                            <li>
                                <Link to={'/store/iphone'}>iPhone</Link>
                            </li>
                            <li>
                                <Link to={'/store/watch'}>Watch</Link>
                            </li>
                            <li>
                                <Link to={'/store/airpods'}>Airpods</Link>
                            </li>
                            <li>
                                <Link to={'/store/tv'}>TV & Home</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                        <div className="row ">
                            {allProduct.map((item) => (
                                <ProductCard productData={item} key={item.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Store;
