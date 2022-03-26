import React, { useState } from 'react';
import './mac.css';

function Mac() {
    const [price, setPrice] = useState(0);

    return (
        <div className="App" style={{ marginTop: '45vh' }}>
            <h1>{price}</h1>
            <button
                className="btn btn-primary me-3"
                onClick={() => setPrice((prev) => prev + 5000)}
            >
                +5000
            </button>
            <button
                className="btn btn-primary me-3"
                onClick={() => setPrice((prev) => prev + 10000)}
            >
                +10000
            </button>
            <button
                className="btn btn-primary me-3"
                onClick={() => setPrice((prev) => prev + 2000)}
            >
                +2000
            </button>
        </div>
    );
}

export default Mac;
