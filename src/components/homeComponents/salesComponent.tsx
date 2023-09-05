const SalesComponent = () => {
  const imgUrl =
  "https://sothebys-com.brightspotcdn.com/48/96/0e52d4f747f8ae65370528164053/top-10-jordans.jpg";
  
  return (
    <section className="bg-gray-900 h-[500px] w-full my-28 flex flex-row">
      <img src={imgUrl} alt="sales-pic" className="h-full" />
      <div className="text-indigo-50">
        <p>LIMITED OFFER!!!!!!!!!</p>
      </div>
    </section>
  );
};

export default SalesComponent;
