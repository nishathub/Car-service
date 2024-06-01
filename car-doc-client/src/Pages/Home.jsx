import HomeAbout from "../Components/Shared/HomePageComponents/HomeAbout";
import HomeBanner from "../Components/Shared/HomePageComponents/HomeBanner";

const Home = () => {

    return (
        <div className="">
            <div className="lg:pb-12">
                <HomeBanner></HomeBanner>
            </div>
            <div className="py-12">
                <HomeAbout></HomeAbout>
            </div>
        </div>
    );
};

export default Home;