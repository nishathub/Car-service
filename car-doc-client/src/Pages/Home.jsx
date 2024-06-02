import ContactCard from "../Components/HomePageComponents/ContactCard";
import FeaturesSection from "../Components/HomePageComponents/FeaturesSection";
import HomeAbout from "../Components/HomePageComponents/HomeAbout";
import HomeBanner from "../Components/HomePageComponents/HomeBanner";
import ServicesComponent from "../Components/HomePageComponents/ServicesComponent";

const Home = () => {

    return (
        <div className="">
            <div className="pb-4 lg:pb-12">
                <HomeBanner></HomeBanner>
            </div>
            <div className="py-4 lg:py-12">
                <HomeAbout></HomeAbout>
            </div>
            <div className="py-4 lg:py-12">
                <ServicesComponent></ServicesComponent>
            </div>
            <div className="py-4 lg:py-12">
                <ContactCard></ContactCard>
            </div>
            <div className="py-4 lg:py-12">
                <FeaturesSection></FeaturesSection>
            </div>
        </div>
    );
};

export default Home;