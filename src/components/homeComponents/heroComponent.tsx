const HeroComponent = () => {
  return (
    <div className="h-[720px] bg-gray-900 text-[#d3d3d3] display flex flex-row text-center justify-evenly items-center overflow-hidden">
      <div className="flex flex-col w-[40%] h-full justify-center items-center gap-4">
        <p className=" font-montserrat text-5xl font-extrabold">Elevate Your Every Step with Our Premium Footwear</p>
        <p className="font-lato text-xl font-medium">Step into Style and Comfort Discover the Perfect Pair of Shoes</p>
        <button className="bg-[#ff3f6b] text-[#fefefe] font-lato font-bold py-3 px-10 ">SHOP NOW</button>
      </div>

        <div className="transform rotate-45 rounded-full bg-slate-500 h-[80%] flex justify-center items-center p-5">
          <img
            src="https://pngimg.com/d/running_shoes_PNG5816.png"
            alt="hero-shoes"
            className="h-[100%]"
          
          />
        </div>
    </div>
  );
};

export default HeroComponent;
