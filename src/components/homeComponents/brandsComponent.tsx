import {
  SiAdidas,
  SiPuma,
  SiNike,
  SiReebok,
  SiJordan,
  SiUnderarmour,
} from "react-icons/si";

const BrandsComponents = () => {
  return (
    <section className="flex justify-center items-center flex-col m-4">
      <p className="section-header">Featured <span className="font-light">Brands</span></p>
      <div className="text-7xl grid-cols-3 grid md:grid-cols-6 gap-12">
        <SiAdidas />
        <SiNike />
        <SiReebok />
        <SiPuma />
        <SiJordan />
        <SiUnderarmour />
      </div>
    </section>
  );
};

export default BrandsComponents;
