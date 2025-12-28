
const Div = () => {
    return (
        <div className="h-screen w-screen bg-gray-700 text-white flex justify-evenly items-center gap-3 text-center font-semibold " >
            <div className="flex h-40 w-40 bg-blue-900  justify-center items-center rounded-sm">blue</div>
            <div className="flex h-40 w-40 bg-red-900 justify-center items-center rounded-lg shadow-amber-200">red</div>
            <div className="flex h-40 w-40 bg-green-900 justify-center items-center rounded-lg">green</div>

        </div>
    )
}
export default Div