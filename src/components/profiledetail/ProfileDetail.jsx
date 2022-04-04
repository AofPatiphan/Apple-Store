import axios from '../../config/axios';
import React, { useState } from 'react';
import './profiledetail.css';

function ProfileDetail({ userData, setUserData }) {
    const [isEdit, setIsEdit] = useState(false);
    const [address, setAddress] = useState(userData.address);
    const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber);

    const handleClickSubmitChange = async () => {
        try {
            const res = await axios.patch('/users', { address, phoneNumber });
            setUserData(res.data.user);
            setIsEdit(false);
        } catch (err) {
            console.log(err.message);
        }
    };

    if (!userData) {
        return <></>;
    }

    return (
        <>
            {/* Modal */}
            <div
                className="modal fade"
                id="profileDetail"
                tabIndex="-1"
                aria-labelledby="profileDetailLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="profileDetailLabel">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {!isEdit ? (
                                <>
                                    <div>Address :</div>
                                    <div>{userData?.address}</div>
                                    <br />
                                    <div>Phone Number :</div>
                                    <div>{userData?.phoneNumber}</div>
                                </>
                            ) : (
                                <>
                                    <div>Address :</div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={address}
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                    />
                                    <br />
                                    <div>Phone Number :</div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={phoneNumber}
                                        onChange={(e) =>
                                            setPhoneNumber(e.target.value)
                                        }
                                    />
                                </>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            {isEdit ? (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleClickSubmitChange}
                                >
                                    Save changes
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => setIsEdit(!isEdit)}
                                >
                                    Edit
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileDetail;
