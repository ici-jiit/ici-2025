const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <svg
        width="120"
        height="220"
        viewBox="0 0 100 100"
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="stroke-current text-blue-500"
          cx="50"
          cy="50"
          r="21"
          fill="none"
          strokeWidth="6"
        />
      </svg>
    </div>
  );
};
export default Loader;