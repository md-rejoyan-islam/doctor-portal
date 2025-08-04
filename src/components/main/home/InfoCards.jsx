import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00 am to Close 7.00 pm",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary bg-primary ",
    },
    {
      id: 2,
      name: "Visit our location",
      description: "Brooklyn,NY 10036 ,United States",
      icon: marker,
      bgClass: "bg-neutral",
    },
    {
      id: 3,
      name: "Contact us now",
      description: "+000 123 456789",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary bg-primary",
    },
  ];
  return (
    <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 pt-6">
      {cardData.map((card, index) => (
        <div
          className={`card sm:card-side ${card.bgClass} shadow-xl  p-[24px]`}
          key={index}
        >
          <figure className="">
            <img src={card.icon} alt="" className="sm:w-100" />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title text-center block sm:text-left">
              {card.name}
            </h2>
            <p className="text-center sm:text-left text-[15px]">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
