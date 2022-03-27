import React, { useState } from 'react';
import './selectmodel.css';
import Submodel from './Submodel';

function SelectModel({ item, setSumPrice, productDetail, setSubPriceList }) {
    const handleChange = (e) => {
        setSubPriceList((prev) => ({ ...prev, [item.name]: +e.target.value }));
        setSumPrice(+productDetail.price + +e.target.value);
    };
    return (
        <form onChange={handleChange}>
            <label className="col-form-label model-lebel">{item.name}</label>
            <div
                className="radioGroup"
                style={{
                    borderBottom: '1px solid #d2d2d7',
                    padding: '0 0 30px 0',
                }}
            >
                {item.Submodels?.map((item) => (
                    <Submodel
                        item={item}
                        key={item.id}
                        setSumPrice={setSumPrice}
                    />
                ))}
            </div>
        </form>
    );
}

export default SelectModel;
