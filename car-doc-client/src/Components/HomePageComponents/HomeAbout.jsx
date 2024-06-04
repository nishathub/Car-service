import { Link } from "react-router-dom";

const HomeAbout = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
            {/* here, we set bg in one div and add an absolute div inside of it to get targeted style  */}
            <div className="relative col-span-1 lg:col-span-3">
                <h2 className="lg:hidden text-center lg:text-left text-error text-lg mb-4">About Us</h2>

                <div className="bg-[url('https://i.ibb.co/vwmhPtf/person.jpg')] w-full h-60 lg:w-[350px] lg:h-[320px] bg-cover rounded-lg">
                    {/* We can also remove bg and add img element to get similar style  */}
                    {/* 
                <img className="h-full w-full lg:hidden object-cover rounded-xl" src="https://i.ibb.co/vwmhPtf/person.jpg" alt="parts-photo" /> */}

                    <div className="absolute bottom-4 lg:bottom-0 right-4 lg:right-16 w-32 lg:w-[220px] lg:h-[200px] border-4 lg:border-8 border-gray-400 rounded-lg ">
                        <img className="h-full w-full object-cover " src="https://i.ibb.co/HC625JS/parts.jpg" alt="parts-photo" />
                    </div>
                </div>
            </div>
            <div className="lg:col-span-4 col-span-1 px-4 lg:px-0">
                <h2 className=" hidden lg:inline-block text-error text-xl tracking-wide mb-4">About Us</h2>
                <div className="flex flex-col gap-4">
                    <h4 className="lg:max-w-60 text-lg md:text-3xl font-bold">We are qualified & of experience in this field</h4>
                    <p className="text-sm capitalize lg:max-w-96 tracking-wide">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="text-sm capitalize lg:max-w-96 tracking-wide">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <Link><button className="btn btn-error btn-sm md:btn-md font-bold">Get More Info</button></Link>

                </div>
            </div>
        </div>
    );
};

export default HomeAbout;