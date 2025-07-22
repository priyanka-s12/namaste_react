function Shimmer() {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 10 }).map((element, i) => (
        <div key={i} className="shimmer-card"></div>
      ))}
    </div>
  );
}

export default Shimmer;
