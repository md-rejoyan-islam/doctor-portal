import about from "../../assets/images/Banner_Images_About_Us.jpg";
import { CiStethoscope } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getAllDoctorsData } from "../../feature/doctor/doctorSlice";

function About() {
  const { doctors } = useSelector(getAllDoctorsData);

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
          <h1 className="text-6xl font-bold backdrop-blur-md text-blue-300 backdrop-brightness-100">
            About Us
          </h1>
        </div>
      </div>
      <div className="py-20 max-w-[1280px] mx-auto px-4">
        <h3 className="text-4xl text-primary font-semibold text-center">
          Leadership Team
        </h3>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2  md:grid-cols-3  gap-6 py-10">
          {doctors.map((team) => (
            <div
              className=" border rounded-md border-sky-200 hover:border-orange-200  shadow-lg"
              key={team._id}
            >
              <img
                src={team?.photo}
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
                  {team?.specialty}
                </p>
                <p className="flex gap-2  justify-center pt-1 ">
                  <FaBriefcase className="text-primary text-xl w-10" />{" "}
                  {team?.degree}
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
