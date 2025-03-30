import { RotatingLines } from "react-loader-spinner"

function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-[450px]">
      <div className="flex flex-col items-center gap-3">
        <RotatingLines
          visible={true}
          height="65"
          width="65"
          color="#2563eb" // Changed to blue-600
          strokeWidth="4"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
        <p className="text-slate-500 animate-pulse font-medium">Loading...</p>
      </div>
    </div>
  )
}

export default Loader

