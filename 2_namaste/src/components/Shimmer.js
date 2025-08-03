function Shimmer() {
  return (
    <div className="flex flex-wrap">
      {Array.from({ length: 10 }).map((element, i) => (
        <div
          key={i}
          className="w-[200px] h-[200px] bg-gray-500 m-[200px]"
        ></div>
      ))}
    </div>
  );
}

export default Shimmer;
