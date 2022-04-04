import './App.css';
import { Toast } from 'bootstrap';
import RouteConfig from './routes/RouteConfig';
import { useContext, useEffect, useRef } from 'react';
import { ErrContext } from './contexts/ErrContext';

function App() {
    const { error, success } = useContext(ErrContext);
    const toastEl = useRef();
    useEffect(() => {
        if (error) {
            const toast = new Toast(toastEl.current);
            toast.show();
        }
        if (success) {
            const toast = new Toast(toastEl.current);
            toast.show();
        }
    }, [error, success]);

    console.log(error);
    return (
        <div className="position-relative">
            <div className="toast-container position-absolute p-3 me-5 start-50 bottom-0 translate-middle-x">
                <div
                    className={`toast align-items-center bottom-0 text-white ${
                        error && `bg-danger`
                    } ${success && `bg-success`} border-0`}
                    ref={toastEl}
                >
                    <div className="d-flex">
                        <div className="toast-body">
                            {error ? error : success ? success : <></>}
                        </div>

                        <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            data-bs-dismiss="toast"
                        ></button>
                    </div>
                </div>
            </div>

            <RouteConfig />
        </div>
    );
}

export default App;
