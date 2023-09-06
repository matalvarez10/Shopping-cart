const NewsletterComponent = () => {
    const emailImg = "https://static.vecteezy.com/system/resources/previews/005/065/335/original/email-marketing-envelope-email-newsletter-illustration-business-illustration-vector.jpg";
  return (
    <section className="flex flex-col justify-center items-center w-[80%] lg:w-[50%] mx-auto gap-3 py-7">
      <img src={emailImg} alt="email-vector" className="h-[200px] sm:h-[300px] rounded-full shadow-lg" />
      <p className="section-header p-2 text-center">
        Join our mailing list and be the first to discover our latest product
        releases
      </p>
      <p className="text-xl">Don't miss the new products!</p>
      <div className="flex flex-row flex-wrap items-center justify-center gap-5 h-14">
        <input
          className="appearance-none block w-[350px] bg-gray-300 text-gray-700 border border-gray-200  h-full px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Enter your Email"
          type="email"
        />
        <button className="red-btn h-full bg-gray-900" onClick={()=>alert("Subscribed!")}>SUBSCRIBE</button>
      </div>
    </section>
  );
};

export default NewsletterComponent;
