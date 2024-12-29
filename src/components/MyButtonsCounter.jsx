import { useState } from 'react';
import MySmile from "./MySmile.jsx";

function MyButtonsCounter() {
    const images = [
        { src: 'src/assets/smile-1.png', alt: "smile-1" },
        { src: 'src/assets/smile-2.jpg', alt: "smile-2" },
        { src: 'src/assets/smile-3.jpg', alt: "smile-3" },
    ];
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    function handleClick(counters) {
        let maxValue = counters[0];
        let maxIndex = 0;
        for (let i = 1; i < counters.length; i++) {
            if (counters[i] > maxValue) {
                maxValue = counters[i];
                maxIndex = i;
            }
        }
        setModalImage(images[maxIndex].src);
        setShowModal(true);
    }

    return (
        <>
            <div className="container">
                <div className="row m-3">
                    {images.map((image, index) => (
                        <div key={index} className="col-4">
                            <MySmile src={image.src} alt={image.alt}/>
                        </div>
                    ))}
                </div>

                <div className="row m-3 justify-content-center">
                    <button
                        onClick={() => {
                            const counters = Array.from(
                                document.querySelectorAll('[data-count]'),
                                (el) => parseInt(el.dataset.count, 10)
                            );
                            handleClick(counters);
                        }}
                        className="btn-primary p-2 col-2"
                    >
                        Show Results
                    </button>
                </div>

                {showModal && (
                    <div
                        style={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "white",
                            padding: "20px",
                            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                            zIndex: 1000,
                        }}
                    >
                        <img src={modalImage} alt="Result" style={{width: 200, height: 200}}/>
                        <button
                            onClick={() => setShowModal(false)}
                            style={{
                                marginTop: "10px",
                                padding: "10px",
                                backgroundColor: "#007bff",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Close
                        </button>
                    </div>
                )}
                {showModal && (
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0,0,0.5)",
                            zIndex: 999,
                        }}
                    ></div>
                )}
            </div>
        </>
    );
}

export default MyButtonsCounter;