export default function Loader() {
    return (
        <div className="flex justify-center items-center flex-col w-full gap-4">
            <div className="relative w-24 h-24">
                <div className="absolute top-0 left-0 w-24 h-24 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-blue-600"></div>
                <div className="absolute top-0 left-0 w-24 h-24 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-blue-600 opacity-75"></div>
            </div>
            <span className="font-medium text-gray-400 text-lg">Loading...</span>
            <div className="text-gray-500">Hey, your quiz just loading, be prepared</div>
        </div>
    );
}
