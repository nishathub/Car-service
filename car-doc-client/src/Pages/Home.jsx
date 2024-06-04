import ContactCard from "../Components/HomePageComponents/ContactCard";
import FeaturesSection from "../Components/HomePageComponents/FeaturesSection";
import HomeAbout from "../Components/HomePageComponents/HomeAbout";
import HomeBanner from "../Components/HomePageComponents/HomeBanner";
import ServicesComponent from "../Components/HomePageComponents/ServicesComponent";
import Testimonial from "../Components/HomePageComponents/Testimonial";
// import TestimonialCarousel from "../Components/HomePageComponents/TestimonialCarousel";

const Home = () => {

    return (
        <div className="">
            <div className="pb-4 lg:pb-12" id="home-banner">
                <HomeBanner />
            </div>
            <div className="py-4 lg:py-12" id="home-about">
                <HomeAbout />
            </div>
            <div className="py-4 lg:py-12" id="services-component">
                <ServicesComponent />
            </div>
            <div className="py-4 lg:py-12" id="contact-card">
                <ContactCard />
            </div>
            <div className="py-4 lg:py-12" id="features-section">
                <FeaturesSection />
            </div>
            <div className="py-4 lg:py-12" id="testimonial">
                <Testimonial />
            </div>
           
        </div>
    );
};

export default Home;