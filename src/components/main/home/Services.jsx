import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
  const services = [
    {
      id: "01",
      name: "Fluoride Treatment",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eveniet impedit non in repudiandae quo fugiat nisi id hic quasi!",
      icon: fluoride,
    },
    {
      id: "02",
      name: "Cavity Filings",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eveniet impedit non in repudiandae quo fugiat nisi id hic quasi!",
      icon: cavity,
    },
    {
      id: "01",
      name: "Teeth Whitening",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eveniet impedit non in repudiandae quo fugiat nisi id hic quasi!",
      icon: whitening,
    },
  ];
  return (
    <div className="py-12 px-4">
      <div className="text-center py-8">
        <h2 className="text-primary font-bold text-2xl">OUR SERVICES</h2>
        <h3 className="text-neutral font-bold text-lg">Services We Provide</h3>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {services.map((service, index) => (
          <div
            className="card service-card  bg-base-100 shadow-md border border-zinc-100 hover:border-sky-200 hover:shadow-sky-200"
            key={index}
          >
            <figure className="px-10 pt-10">
              <img src={service.icon} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{service.name}</h2>
              <p>{service.details}</p>
              <div className="card-actions"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
