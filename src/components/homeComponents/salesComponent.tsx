import { Link } from "react-router-dom";

const SalesComponent = () => {
  const imgUrl =
    "https://sothebys-com.brightspotcdn.com/48/96/0e52d4f747f8ae65370528164053/top-10-jordans.jpg";

  return (
    <section className="bg-gray-900 h-[500px] w-full mt-28 flex flex-row">
      <img src={imgUrl} alt="sales-pic" className="hidden lg:block lg:w-[50%] xl:h-full" />
      <div className="text-indigo-50 gap-4 flex flex-col justify-center items-cente font-montserrat p-10 text-left">
        <p className="text-2xl">Flash Sales</p>
        <p className="text-5xl  font-bold">
          For a brief time, enjoy savings of up to 50% on all footwear!
        </p>
        <Link to={"products/sneakers"} className="red-btn w-[300px] hover:bg-slate-500">
          EXPLORE COLLECTION
        </Link>
      </div>
    </section>
  );
};

export default SalesComponent;
