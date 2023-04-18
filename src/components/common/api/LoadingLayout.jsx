import './LoadingLayout.css'

const LoadingLayout = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 flex flex-col items-center justify-center">
            <img className='h-full w-full' src="/images/loading.gif" />
        </div>
    )
}

export default LoadingLayout
