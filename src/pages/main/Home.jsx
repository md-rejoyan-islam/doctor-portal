import Banner from "../../components/main/home/Banner";
import Connect from "../../components/main/home/Connect";
import InfoCards from "../../components/main/home/InfoCards";
import MakeAppointment from "../../components/main/home/MakeApppointMent";
import Services from "../../components/main/home/Services";
import Terms from "../../components/main/home/Terms";
import Testimonial from "../../components/main/home/Testimonial";

function Home() {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <Banner />
      <InfoCards />
      <Services />
      <Terms />
      <MakeAppointment />
      <Testimonial />
      <Connect />
    </div>
  );
}

export default Home;
