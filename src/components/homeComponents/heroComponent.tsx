import { Link } from "react-router-dom";
const HeroComponent = () => {
  return (
    <div className=" h-[500px] md:h-[720px] bg-gray-900 text-indigo-50 display flex flex-row md:text-center justify-evenly items-center gap-2 p-6 overflow-hidden ">
      <div className="flex flex-col w-[40%] h-full justify-center items-center gap-4">
        <p className=" font-montserrat text-base md:text-lg lg:text-5xl font-extrabold">
          Elevate Your Every Step with Our Premium Footwear
        </p>
        <p className="font-lato text-sm md:text-lg lg:text-xl  font-medium">
          Step into Style and Comfort Discover the Perfect Pair of Shoes
        </p>
        <Link to={"products/sneakers"} className="red-btn hover:bg-slate-500">
          SHOP NOW
        </Link>
      </div>

      <div className="aspect-square transform rotate-45 rounded-full bg-slate-500 h-[180px] md:h-[400px] lg:h-[80%] flex justify-center items-center p-5">
        <img
          src="https://pngimg.com/d/running_shoes_PNG5816.png"
          alt="hero-shoes"
          className=" h-[100%] lg:h-[100%]"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
