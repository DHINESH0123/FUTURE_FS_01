const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 transition-opacity duration-300">
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
