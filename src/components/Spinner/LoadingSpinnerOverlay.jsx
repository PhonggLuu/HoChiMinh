import React from 'react';
import { CircleLoader } from 'react-spinners';

const LoadingSpinnerOverlay = () => {

    return (
        <>
            {/* Overlay to make content behind it appear dimmed */}
            <div className="overlay"></div>
            
            {/* Spinner */}
            <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <CircleLoader size={50} color="#36d7b7" />
            </div>
        </>
    );
};

export default LoadingSpinnerOverlay;
