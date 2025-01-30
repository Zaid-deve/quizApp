import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Result() {
    const { state } = useLocation();
    const { score, total, mistakes, correct } = state;
    const navigate = useNavigate();

    // the overall result emoji based on score
    const calculateResultEmoji = () => {
        if (score === total) {
            return '🏆';  // Perfect score
        } else if (score >= total * 0.7) {
            return '🎉';  // Good score
        } else {
            return '😞';  // Needs improvement
        }
    };

    return (
        <div className="h-screen bg-gray-50 p-5 overflow-auto">
            <div className="container-md mx-auto p-6 shadow-2xl rounded-xl bg-white">
                <div className="flex flex-col items-center text-center">
                    <div className="text-5xl font-bold mb-4">
                        {calculateResultEmoji()}
                    </div>
                    <h1 className="text-2xl font-semibold mb-2">Your Result</h1>
                    <div className="text-lg text-gray-600 mb-6">
                        You answered {total - mistakes} out of {total} questions correctly!
                    </div>
                    <div className="flex justify-center gap-10 mb-8">
                        <div className="flex flex-col items-center p-5 bg-green-100 rounded-lg shadow-xl">
                            <span className="text-xl font-bold text-green-700">Score</span>
                            <div className="text-4xl font-semibold text-green-800 mt-2">{score} / {total}</div>
                            <div className="text-sm text-gray-500 mt-2">Total Questions</div>
                        </div>
                        <div className="flex flex-col items-center p-5 bg-yellow-100 rounded-lg shadow-xl">
                            <span className="text-xl font-bold text-yellow-700">Mistakes</span>
                            <div className="text-4xl font-semibold text-yellow-800 mt-2">{mistakes}</div>
                            <div className="text-sm text-gray-500 mt-2">Incorrect Answers</div>
                        </div>
                    </div>

                    {/* Question Result Section */}
                    <div className="my-6">
                        <h2 className="text-xl font-semibold mb-4">Questions Review</h2>
                        <div className="flex flex-wrap gap-6 justify-center">
                            {Array(total).fill(0).map((_, index) => (
                                <div key={index} className="p-4 w-1/4 min-w-[100px] text-center bg-gray-100 rounded-xl shadow-md">
                                    <div className={`p-4 rounded-full ${correct.includes(index) ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                                        {index + 1}
                                    </div>
                                    <div className="text-sm font-bold mt-2">
                                        {correct.includes(index) ? 'Correct' : 'Incorrect'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Retry Button */}
                    <button
                        onClick={() => navigate('/quiz')}
                        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer w-100"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        </div>
    );
}
