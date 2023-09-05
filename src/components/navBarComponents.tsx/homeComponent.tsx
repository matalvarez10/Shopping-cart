import HeroComponent from "../homeComponents/heroComponent";
import PopularProductsComponent from "../homeComponents/popularProductsComponent";
import BrandsComponents from "../homeComponents/brandsComponent";
import SalesComponent from "../homeComponents/salesComponent";
import NewsletterComponent from "../homeComponents/newsletterComponent";
const HomeComponent = () => {
    return (  
        <section className="my-20">
            <HeroComponent/>
            <BrandsComponents/>
            <PopularProductsComponent/>
            <SalesComponent/>
            <NewsletterComponent/>
        </section>
    );
}
 
export default HomeComponent;