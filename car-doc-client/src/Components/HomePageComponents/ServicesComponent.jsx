import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import axios from "axios";

const ServicesComponent = () => {
  const [services, setServices] = useState([]);
  const [displayServices, setDisplayServices] = useState([]);
  const [displayCount, setDisplayCount] = useState(3);
  const [isLoading, setLoading] = useState(true);
  console.log(displayServices);

  useEffect(() => {
    try {
      // fetch('https://car-doc-server-5h2za3pf1-nishats-projects-890e0902.vercel.app/allServices', {
      //     credentials: 'include',
      // })
      //     .then(res => res.json())

      // AXIOS

      axios
        .get(
          "https://car-doc-server-5h2za3pf1-nishats-projects-890e0902.vercel.app/allServices"
        )
        .then((res) => {
          console.log(res.data);

          setServices(res.data);
          setDisplayServices(res.data.slice(0, 3));
          setLoading(false);
        });
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }, []);

  const handleMoreServiceClick = (e) => {
    // every click will show extra 3 services with previous items
    const newDisplayCount = displayCount + 3;
    const filteredService = services.slice(0, newDisplayCount);
    setDisplayServices(filteredService);
    setDisplayCount(displayCount + 3);

    // Hide the MoreService Button when all data are loaded
    if (newDisplayCount >= services.length) {
      e.target.style.display = "none";
    }
  };

  return (
    <div className="space-y-8 md:space-y-12 px-4">
      <div className="text-center space-y-2 md:space-y-4">
        <h2 className="text-error text-xl tracking-wider ">Service</h2>
        <h4 className="text-xl md:text-3xl font-bold">Our Service Area</h4>
        <p className="lg:max-w-lg mx-auto capitalize">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div>
        {isLoading ? (
          <p className="text-center">Loading</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 ">
            {displayServices.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
        )}
      </div>
      <div className="text-center">
        <button
          onClick={() => handleMoreServiceClick(event)}
          className="btn btn-outline btn-error btn-sm md:btn-md"
        >
          More Services
        </button>
      </div>
    </div>
  );
};

export default ServicesComponent;
