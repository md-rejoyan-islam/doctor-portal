import { Link } from "react-router-dom";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      className=" p-10  max-w-[1440px] mx-auto"
      style={{ background: `url(${footer})`, backgroundSize: "100% 100%" }}
    >
      <div className="footer justify-center md:justify-between ">
        <div>
          <span className="footer-title mx-auto md:mx-0">SERVICES</span>
          <Link className="mx-auto md:mx-0 link link-hover">
            Emergency Checkup
          </Link>
          <Link className="mx-auto md:mx-0 link link-hover">
            Monthly Checkup
          </Link>
          <Link className="mx-auto md:mx-0 link link-hover">
            Weekly Checkup
          </Link>
          <Link className="mx-auto md:mx-0 link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <span className=" mx-auto md:mx-0 footer-title">ORAL HEALTH</span>
          <Link className=" mx-auto md:mx-0 link link-hover">
            Fluoride Treatment
          </Link>
          <Link className=" mx-auto md:mx-0 link link-hover">
            Cavity Filling
          </Link>
          <Link className=" mx-auto md:mx-0 link link-hover">
            Teeth Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title  mx-auto md:mx-0">OUR ADDRESS</span>
          <Link className="link link-hover  mx-auto md:mx-0">
            New York -10000Uk
          </Link>
        </div>
      </div>
      <div className="text-center pt-16 ">
        Copyright 2024 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
