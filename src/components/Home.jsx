import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="size-full flex items-center bg-white">
            <div className="container-md rounded-xl p-5 text-center mx-auto">
                <span className="text-[9rem]">🚀</span>
                <h1 className="text-5xl font-bold mt-5">Welcome to the Ultimate Quiz Challenge!</h1>
                <p className="text-lg mt-3 opacity-80">Test your knowledge and earn rewards 🎯</p>
                <Link to="/quiz" className="px-6 py-3 text-lg rounded-xl bg-black text-white font-bold mt-5 cursor-pointer hover:bg-gray-700 block w-full">
                    Start Quiz
                </Link>
            </div>
        </div>
    )
}