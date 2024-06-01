import { Link } from "react-router-dom";

const HomeAbout = () => {
    return (
        <div className="grid md:grid-cols-7">
            {/* here, we set bg in one div and add an absolute div inside of it to get targeted style  */}
            <div className="relative md:col-span-3">
                <div className="bg-[url('https://i.ibb.co/vwmhPtf/person.jpg')] md:w-[350px] md:h-[320px] bg-cover rounded-lg">
                    {/* We can also remove bg and add img element to get similar style  */}

                {/* <img className="h-full w-full object-cover rounded-xl" src="https://i.ibb.co/vwmhPtf/person.jpg" alt="parts-photo" /> */}

                    <div className="absolute bottom-0 right-16 md:w-[220px] md:h-[200px]">
                        <img className="h-full w-full object-cover rounded-xl" src="https://i.ibb.co/HC625JS/parts.jpg" alt="parts-photo" />
                    </div>
                </div>
            </div>
            <div className="md:col-span-4">
                <h2 className="text-error text-lg mb-4">About Us</h2>
                <div className="flex flex-col gap-4">
                    <h4 className="md:max-w-60 md:text-3xl">We are qualified & of experience in this field</h4>
                    <p className="text-sm capitalize md:max-w-96 tracking-wide">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="text-sm capitalize md:max-w-96 tracking-wide">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <Link><button className="btn btn-error ">Get More Info</button></Link>

                </div>
            </div>
        </div>
    );
};

export default HomeAbout;