import ContactCard from "../Components/HomePageComponents/ContactCard";
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
        </div>
    );
};

export default Home;