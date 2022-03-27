import React from 'react';

function Submodel({ item }) {
    return (
        <div className="woman">
            <input
                type="radio"
                className="btn-check "
                name="options-outlined"
                id={`${item.name}`}
                autoComplete="off"
                value={+item.price}
            />
            <label
                className="btn  inputrgt d-flex justify-content-between selectermodel"
                htmlFor={`${item.name}`}
            >
                <div style={{ color: '#1d1d1f' }}>{item.name}</div>
                <div style={{ color: '#1d1d1f' }}>+ {item.price}</div>
            </label>
        </div>
    );
}

export default Submodel;
