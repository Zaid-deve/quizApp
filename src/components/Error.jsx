import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div className="h-screen bg-gray-50 flex items-center justify-center p-5">
            <div className="container-md mx-auto p-6 py-8 shadow-2xl rounded-xl bg-white flex flex-col items-center text-center" style={{maxWidth:"620px"}}>
                <div className="text-5xl text-red-600 mb-4">
                <img width="100" height="100" src="https://img.icons8.com/clouds/100/wifi.png" alt="wifi"/>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong.</h1>
                <p className="text-lg text-gray-500 mb-6">It seems like there was an issue with the connection or loading the data. Please check your internet connection and try again.</p>
                <div className="flex gap-4">
                    <button
                        onClick={() => navigate('/quiz')}
                        className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 cursor-pointer transition-all duration-300"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        </div>
    );
}
