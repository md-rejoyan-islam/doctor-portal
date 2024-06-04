import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import contact from "../../assets/images/Contact_Us_Banner_imag.jpg";
import ContactForm from "../../components/main/contact/ContactForm";
function Contact() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="hidden sm:block"
      >
        <div className="hero-content text-center text-white h-full  mx-auto">
          <h1 className="text-6xl font-bold">Contact Us</h1>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex  my-24 items-center flex-col md:flex-row">
          <div className="md:w-[400px] ">
            <h3 className="text-primary text-4xl font-semibold pb-3 text-center md:text-left">
              Call Centre
            </h3>
            <p className="text-sm max-w-[500px]">
              For enquiries on your <b>appointment or preparations needed</b>,
              or to change an appointment: <br />
              <b>Hotline Operating Hours:</b> 8am to 5.30pm on weekdays. 8am to
              1pm on Saturdays. Closed on Sundays and Public Holidays.
            </p>
          </div>
          <div className="divider divider-horizontal "></div>
          <div className="grid lg:grid-cols-2 gap-6  py-6 md:py-0 ">
            <div className="flex gap-2 items-center shadow-lg p-6 rounded-md border border-sky-100 ">
              <MdOutlinePhoneInTalk className="text-5xl text-primary" />

              <div>
                <h3>PHONE</h3>
                <p className="font-bold">(65) 6388 4333</p>
              </div>
            </div>
            <div className="flex gap-2 items-center shadow-lg p-6 rounded-md border border-sky-100">
              <IoLogoWhatsapp className="text-5xl text-primary" />
              <div>
                <h3>WHATSAPP</h3>
                <p className="font-bold">(65) 8798 8008</p>
              </div>
            </div>
            <div className="flex gap-2 items-center shadow-lg p-6 rounded-md border border-sky-100">
              <MdEmail className="text-5xl text-primary" />
              <div>
                <h3>Email</h3>
                <p className="font-bold">info@doctor.portal.hotmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex my-10 flex-col md:flex-row items-center">
          <div className="md:w-[400px]">
            <h3 className="text-primary text-4xl font-semibold pb-3 text-center md:text-left">
              Patient Assistance Centre
            </h3>
            <p className="text-sm max-w-[500px] text-center mx-auto md:text-left">
              For Enquiries on <b>Our Hospitals or Doctors:</b>
            </p>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid lg:grid-cols-2 gap-6  py-6 md:py-0 ">
            <div className=" flex gap-2 items-center p-6 shadow-md border border-sky-100 rounded-md w-full sm:w-[380px] mx-auto md:w-full">
              <MdOutlinePhoneInTalk className="text-5xl text-primary" />
              <div>
                <h3>PHONE</h3>
                <p className="font-bold">(65) 6388 4300</p>
              </div>
            </div>
            <div
              className="flex gap-2 items-center p-6 shadow-md border border-sky-100 rounded-md sm:w-[380px] md:w-full mx-auto
             w-full"
            >
              <CgWebsite className="text-5xl text-primary" />
              <div>
                <h3>WEBSITE</h3>
                <p className="font-bold">ww.doctor.portal.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* form  */}
        <div className="hero  my-20 ">
          <div className="hero-content flex-col lg:flex-row w-full">
            <div className="text-center basis-1/2 lg:text-left">
              <h1 className="text-4xl font-bold text-primary">
                We want to hear from you{" "}
              </h1>
              <p className="py-6 max-w-[600px]">
                We listen to all feedback with professional clarity and concern.
                Let us know how you are doing and how we can give you a better
                service. We will get back to you within three working days.
              </p>
            </div>
            <div className="card w-full max-w-[600px] lg:w-1/2  ">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
