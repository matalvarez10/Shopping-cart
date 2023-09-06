import { Link } from "react-router-dom";

const ErrorComponent = () => {
    const errorImg = "https://media.istockphoto.com/id/1269245576/vector/vector-concept-illustration-of-page-error-404.jpg?s=170667a&w=0&k=20&c=emKYALdPjbcZr-SUyIhy4ZJ2a02VShVE46WV9-qqxkE=";
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center gap-7">
      <img src={errorImg} alt="" />
      <p className="section-header">Oops! It looks like the page you're looking for doesn't exist.</p>
      <p className="text-lg font-semibold">Check the URL for typos and try again.</p>
      <Link to={"/"} className="red-btn bg-gray-900">Return to Homepage</Link>
    </section>
  );
};

export default ErrorComponent;
