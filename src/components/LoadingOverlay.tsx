// Loading overlay component with animated bars
const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90">
      {/* Loader Animation - 5 bars that animate vertically */}
      <div className="loader">
        <div className="Box"></div>
        <div className="Box"></div>
        <div className="Box"></div>
        <div className="Box"></div>
        <div className="Box"></div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
