import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {

    return (
        <div className="px-4">
            <div className="text-center space-y-2 md:space-y-4">
                <h2 className="text-error text-xl tracking-wider ">Testimonials</h2>
                <h4 className="text-xl md:text-3xl font-bold">What Customers Say</h4>
                <p className="lg:max-w-lg mx-auto px-4 capitalize">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8">
                {/* testimonial card  */}
                <div className="w-96 lg:w-full p-8 border border-gray-500 space-y-4 rounded-md">
                    {/* upper  */}
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2 items-center" >
                            <div className="w-12">
                                <img className="rounded-full" src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />
                            </div>
                            <div>
                                <p className="text-lg font-bold">Rifat Ahmed</p>
                                <p>Textile Engineer</p>
                            </div>
                        </div>
                        <div className="text-4xl text-orange-400"><FaQuoteRight /></div>
                    </div>
                    {/* lower  */}
                    <div className="space-y-2">
                        <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" checked />
                            </div>
                        </div>
                    </div>
                </div>
                {/* testimonial card  */}
                <div className="w-96 lg:w-full p-8 border border-gray-500 space-y-4 rounded-md">
                    {/* upper  */}
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2 items-center" >
                            <div className="w-12">
                                <img className="rounded-full" src="https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg" alt="" />
                            </div>
                            <div>
                                <p className="text-lg font-bold">Abu Yusuf</p>
                                <p>Professor</p>
                            </div>
                        </div>
                        <div className="text-4xl text-orange-400"><FaQuoteRight /></div>
                    </div>
                    {/* lower  */}
                    <div className="space-y-2">
                        <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" checked />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;