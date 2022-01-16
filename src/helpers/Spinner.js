const Spinner = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-3">
      <div className="spinner-border text-dark mb-1" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <p className="text-center">Loading...</p>
    </div>
  );
};

export default Spinner;
