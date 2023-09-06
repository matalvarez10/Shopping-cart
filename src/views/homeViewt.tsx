import HeroComponent from "../components/homeComponents/heroComponent";
import PopularProductsComponent from "../components/homeComponents/popularProductsComponent";
import BrandsComponents from "../components/homeComponents/brandsComponent";
import SalesComponent from "../components/homeComponents/salesComponent";
import NewsletterComponent from "../components/homeComponents/newsletterComponent";
const HomeView = () => {
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
 
export default HomeView;