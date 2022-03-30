import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SelectModel from '../../components/selectmodel/SelectModel';
import './productdetail.css';
import { getProductById } from '../../apis/product';
import { createCart } from '../../apis/cart';

function ProductDetail() {
    const [productDetail, setProductDetail] = useState({});
    const [sumPrice, setSumPrice] = useState(0);
    const [subPriceList, setSubPriceList] = useState({});
    const navigate = useNavigate();

    const { productId } = useParams();

    useEffect(() => {
        fetchProductById();
    }, []);
    useEffect(() => {
        setSumPrice(
            +productDetail.price +
                Object.values(subPriceList).reduce(
                    (previousValue, currentValue) =>
                        previousValue + currentValue,
                    0
                )
        );
    }, [subPriceList]);

    const fetchProductById = async () => {
        try {
            const res = await getProductById(productId);
            setProductDetail(res.data.product);
            setSumPrice(res.data.product.price);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleClickAddToCart = async () => {
        try {
            const amount = 1;
            const res = await createCart(productId, amount, sumPrice);
            navigate(`/cart`);
        } catch (err) {
            console.log(err.message);
        }
    };

    if (!productDetail.ProductImages) {
        return <></>;
    }

    return (
        <div>
            <div className="product-nav">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="nav-title">
                            <div className="product-nav-name">
                                {productDetail.modelName}
                            </div>
                            <div
                                style={{
                                    textAlign: 'right',
                                    fontSize: '17px',
                                    fontWeight: '400',
                                }}
                            >
                                ฿{productDetail.price}
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>

            <div className="row">
                <div className="col-2"></div>
                <div className="col-4">
                    <div>
                        <img
                            src={`${productDetail.ProductImages[0].image}`}
                            alt=""
                            className="productpic"
                        />
                    </div>
                </div>
                <div className="col-4 Product-header">
                    <div>ซื้อ {productDetail.modelName}</div>

                    {/* model */}
                    {productDetail.Models?.map((item) => (
                        <SelectModel
                            item={item}
                            key={item.id}
                            setSumPrice={setSumPrice}
                            productDetail={productDetail}
                            setSubPriceList={setSubPriceList}
                        />
                    ))}

                    {/* summary */}
                    <div className="detailsummary">
                        <div style={{ fontSize: '32px' }}>฿{sumPrice}</div>
                        <button
                            className="btn btn-primary"
                            onClick={handleClickAddToCart}
                        >
                            ใส่ลงในถุง
                        </button>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
}

export default ProductDetail;
