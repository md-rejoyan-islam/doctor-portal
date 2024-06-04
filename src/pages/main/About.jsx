import about from "../../assets/images/Banner_Images_About_Us.jpg";
import { CiStethoscope } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";

function About() {
  const teams = [
    {
      id: 1,
      name: "John Doe",
      image: "https://www.ksosn.com/wp-content/uploads/2021/07/syed-shah.png",
      position: "Transplant Nephrologist",
      role: "President, Director",
    },
    {
      id: 2,
      name: "Isaac Newton",
      image: "https://www.ksosn.com/wp-content/uploads/2021/07/syed-shah.png",
      position: "Cardiologist",
      role: "Assistant Director",
    },
    {
      id: 3,
      name: "Albert Einstein",
      image: "https://www.ksosn.com/wp-content/uploads/2021/07/syed-shah.png",
      position: "Neurologist",
      role: "Assistant Director",
    },
    {
      id: 4,
      name: "Marie Curie",
      image: "https://www.ksosn.com/wp-content/uploads/2021/07/syed-shah.png",
      position: "Oncologist",
      role: "Assistant Director",
    },
    {
      id: 5,
      name: "Nikola Tesla",
      image: "https://www.ksosn.com/wp-content/uploads/2021/07/syed-shah.png",
      position: "Surgeon",
      role: "Board Member",
    },
    {
      id: 6,
      name: "Galileo Galilei",
      image: "https://www.ksosn.com/wp-content/uploads/2021/07/syed-shah.png",
      position: "Orthopedic Surgeon",
      role: "Arthopedic Surgeon",
    },
    {
      id: 7,
      name: "Aristotle",
      image: "https://www.ksosn.com/wp-content/uploads/2021/07/syed-shah.png",
      position: "Dentist",
      role: "Dentist",
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="hidden sm:block"
      >
        <div className="hero-content text-center text-white h-full  mx-auto">
          <h1 className="text-6xl font-bold backdrop-blur-md text-primary backdrop-brightness-100">
            About Us
          </h1>
        </div>
      </div>
      <div className="py-20 max-w-[1280px] mx-auto px-4">
        <h3 className="text-4xl text-primary font-semibold text-center">
          Leadership Team
        </h3>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2  md:grid-cols-3  gap-6 py-10">
          {teams.map((team) => (
            <div
              className=" border rounded-md border-sky-200 hover:border-orange-200  shadow-lg"
              key={team.id}
            >
              <img
                src="https://www.ksosn.com/wp-content/uploads/2021/07/syed-shah.png"
                alt=""
                className="rounded-full w-32 h-32 mx-auto my-4"
              />
              <h2 className="font-bold text-xl text-center px-4 pb-2">
                {team.name}
              </h2>
              <hr className="border-none h-[1px] w-full bg-slate-200" />
              <div className="mt-3 block p-6">
                <p className="flex gap-2 items-center justify-center">
                  <CiStethoscope className="text-primary text-2xl" />
                  {team.position}
                </p>
                <p className="flex gap-2 items-center justify-center pt-1">
                  <FaBriefcase className="text-primary text-xl" /> {team.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
