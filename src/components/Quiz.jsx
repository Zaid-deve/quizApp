import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
    const [quizData, setQuizData] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [mistakes, setMistakes] = useState(0);
    const [correct, setCorrect] = useState([]);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);
    const [showDes, setShowDes] = useState(false);
    const [answered, setAnswered] = useState(false); // Track if the answer was submitted
    const navigate = useNavigate();

    // Fetching quiz data from the API
    const fetchQuizData = async () => {
        try {
            const response = await fetch('/api');
            const data = await response.json();
            setQuizData(data);
        } catch (error) {
            navigate('/error');
        }
    };

    useEffect(() => {
        fetchQuizData();
    }, []);

    // Handle option selection
    const handleOptionChange = (optionIndex) => {
        setSelectedOption(optionIndex);
    };

    // Handle answer submission
    const handleSubmitAnswer = () => {
        if (selectedOption === null) {
            setError('Please select an answer for this question.');
            return;
        }

        // Check if the question is mandatory and no answer has been selected
        const currentQuestion = quizData.questions[currentQuestionIndex];
        if (currentQuestion.is_mandatory && selectedOption === null) {
            setError('This question is mandatory. Please select an answer.');
            return;
        }

        setError(null); // Reset error message

        const correctOption = currentQuestion.options.findIndex(op => op.is_correct);

        // Check if the answer is correct and update score
        if (correctOption === selectedOption) {
            setScore(prevScore => prevScore + parseFloat(quizData.correct_answer_marks));
            setCorrect([...correct, currentQuestionIndex]);
        } else {
            setMistakes(prevMistakes => prevMistakes + 1);
            setScore(prevScore => prevScore - parseFloat(quizData.negative_marks));
        }

        setAnswered(true); // Mark answer as submitted
    };

    // Handle moving to the next question
    const handleNextQuestion = () => {
        setAnswered(false); // Reset for the next question
        setSelectedOption(null); // Reset the selected option

        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < quizData.questions_count) {
            setCurrentQuestionIndex(nextIndex);
            setShowDes(false); // Hide description for the next question
            setProgress(prevProgress => prevProgress + 1); // Increment progress
        } else {
            handleSubmitQuiz(); // If it's the last question, submit the quiz
        }
    };

    // Handle quiz submission
    const handleSubmitQuiz = () => {
        alert(`Quiz submitted! Your score is: ${score} / ${quizData.questions_count} with ${mistakes} mistakes.`);
        navigate('/result', { state: { score, total: quizData.questions_count, mistakes,correct } });
    };

    const currentQuestion = quizData.questions?.[currentQuestionIndex];

    return (
        <div className="h-screen flex items-center bg-white p-5 overflow-auto">
            <div className="container-md shadow-2xl rounded-2xl p-5 mx-auto w-full" style={{ maxWidth: "820px" }}>
                <div>
                    {Object.keys(quizData).length === 0 ? (
                        <div className="w-full h-96 flex justify-center items-center">
                            <Loader />
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-end">
                                <span className="text-green-500 font-medium bg-gray-100 py-1 px-5 rounded-xl">
                                    Question.
                                </span>
                                <div className="flex flex-col text-sm bg-gray-50 p-3 rounded-xl font-semibold">
                                    <span>Progress: {progress}/{quizData.questions_count}</span>
                                    <span>Score: {score}/{quizData.questions_count * Number(quizData.correct_answer_marks)}</span>
                                </div>
                            </div>
                            <div className="my-4">
                                <hr className="text-gray-200" />
                            </div>
                            <h1 className="text-xl font-bold mt-2"><span className='text-gray-500'>{currentQuestionIndex + 1})</span> {currentQuestion.description}</h1>
                            <div className="my-4">
                                <hr className="text-gray-200" />
                            </div>
                            <span className="text-green-500 font-medium bg-gray-100 py-1 px-5 rounded-xl">Options.</span>
                            <div className="my-5 flex flex-col gap-3">
                                {currentQuestion.options.map((option, index) => (
                                    <div key={index}>
                                        <label className="flex items-center space-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="option"
                                                className="form-radio h-5 w-5 text-blue-600"
                                                onChange={() => handleOptionChange(index)}
                                                checked={selectedOption === index}
                                                disabled={answered} // Disable option selection after answer submission
                                            />
                                            <span className="text-sm text-gray-600 font-bold">{option.description}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                            {error && <div className="my-3">
                                <span className='text-red-500 text-sm'>{error}</span>
                            </div>}
                            {answered && (
                                <>
                                    <button className='text-blue-500 font-medium block ms-auto my-3 cursor-pointer' onClick={() => setShowDes(!showDes)}>Show Detailed Description</button>
                                    {showDes && <div className="my-4 text-sm p-3 bg-gray-100 rounded">
                                        {currentQuestion.detailed_solution}
                                    </div>}
                                </>
                            )}
                            <div className="flex gap-3">
                                <button
                                    className="px-6 py-3 text-lg rounded-xl bg-red-600 text-white font-bold mt-5 cursor-pointer hover:bg-red-700 transform transition-all ease-out duration-300 block w-full"
                                    onClick={handleSubmitQuiz}
                                >
                                    Cancel Quiz
                                </button>
                                <button
                                    className="px-6 py-3 text-lg rounded-xl bg-blue-800 text-white font-bold mt-5 cursor-pointer hover:bg-blue-900 transform transition-all ease-out duration-300 block w-full"
                                    onClick={answered ? handleNextQuestion : handleSubmitAnswer}
                                >
                                    {answered ? (currentQuestionIndex === quizData.questions_count - 1 ? 'Submit Quiz' : 'Next Question') : 'Submit Answer'}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
