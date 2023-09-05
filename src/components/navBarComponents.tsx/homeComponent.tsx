import HeroComponent from "../homeComponents/heroComponent";
import PopularProductsComponent from "../homeComponents/popularProductsComponent";
import BrandsComponents from "../homeComponents/brandsComponent";
import SalesComponent from "../homeComponents/salesComponent";
const HomeComponent = () => {
    return (  
        <section className="my-20">
            <HeroComponent/>
            <BrandsComponents/>
            <PopularProductsComponent/>
            <SalesComponent/>
        </section>
    );
}
 
export default HomeComponent;