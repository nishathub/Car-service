import Marquee from "react-fast-marquee";


const FeaturesSection = () => {
    const expertIcon = '../../../public/icons/group.svg';
    const timeIcon = '../../../public/icons/Group 38729.svg';
    const personIcon = '../../../public/icons/person.svg';
    const toolIcon = '../../../public/icons/Wrench.svg';
    const guardIcon = '../../../public/icons/check.svg';
    const deliveryIcon = '../../../public/icons/deliveryt.svg';

    return (
        <div className="">

            <div className="text-center space-y-2 md:space-y-4">
                <h2 className="text-error text-xl tracking-wider ">Core Features</h2>
                <h4 className="text-xl md:text-3xl font-bold">Why Choose Us</h4>
                <p className="lg:max-w-lg mx-auto px-4 capitalize">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <Marquee >
                <div className="mt-12 flex flex-wrap gap-6 px-4 items-center justify-center">
                    <div className="w-40 flex flex-col gap-4 items-center p-4 border border-gray-500 rounded-lg hover:invert duration-300 text-accent">
                        <div> <img src={expertIcon} alt="group-icon" /></div>
                        <div><h4 className="font-bold">Expert Team</h4></div>
                    </div>
                    <div className="w-40 flex flex-col gap-4 items-center p-4 border border-gray-500 rounded-lg hover:invert duration-300 text-accent">
                        <div> <img src={timeIcon} alt="group-icon" /></div>
                        <div><h4 className="font-bold">Punctuality</h4></div>
                    </div>
                    <div className="w-40 flex flex-col gap-4 items-center p-4 border border-gray-500 rounded-lg hover:invert duration-300 text-accent">
                        <div> <img src={guardIcon} alt="group-icon" /></div>
                        <div><h4 className="font-bold">100% Guaranty</h4></div>
                    </div>
                    <div className="w-40 flex flex-col gap-4 items-center p-4 border border-gray-500 rounded-lg hover:invert duration-300 text-accent">
                        <div> <img src={toolIcon} alt="group-icon" /></div>
                        <div><h4 className="font-bold">Best Equipment</h4></div>
                    </div>
                    <div className="w-40 flex flex-col gap-4 items-center p-4 border border-gray-500 rounded-lg hover:invert duration-300 text-accent">
                        <div> <img src={personIcon} alt="group-icon" /></div>
                        <div><h4 className="font-bold">24/7 support</h4></div>
                    </div>
                    <div className="w-40 flex flex-col gap-4 items-center p-4 border border-gray-500 rounded-lg hover:invert duration-300 text-accent">
                        <div> <img src={deliveryIcon} alt="group-icon" /></div>
                        <div><h4 className="font-bold">Timely Delivery</h4></div>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default FeaturesSection;