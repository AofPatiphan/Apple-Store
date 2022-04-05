import React from 'react';
import './admin.css';

function Admin() {
    return (
        <>
            <div className="row pt-4 ">
                <div className="col-2"></div>
                <div className="col-8 admincontainer">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="order-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#order"
                                type="button"
                                role="tab"
                                aria-controls="order"
                                aria-selected="true"
                            >
                                Order
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="addProduct-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#addProduct"
                                type="button"
                                role="tab"
                                aria-controls="addProduct"
                                aria-selected="false"
                            >
                                Add Product
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div
                            className="tab-pane fade show active"
                            id="order"
                            role="tabpanel"
                            aria-labelledby="order-tab"
                        >
                            ...
                        </div>
                        <div
                            className="tab-pane fade"
                            id="addProduct"
                            role="tabpanel"
                            aria-labelledby="addProduct-tab"
                        >
                            ...
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </>
    );
}

export default Admin;
