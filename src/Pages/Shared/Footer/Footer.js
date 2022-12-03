import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
      
      <footer
        className=" p-10 "
        style={{ background: `url(${footer})`, backgroundSize: "100% 100%" }}
      >
        <div className="footer">
          <div>
            <span className="footer-title">SERVICES</span>
            <Link className="link link-hover">Emergency Checkup</Link>
            <Link className="link link-hover">Monthly Checkup</Link>
            <Link className="link link-hover">Weekly Checkup</Link>
            <Link className="link link-hover">Deep Checkup</Link>
          </div>
          <div>
            <span className="footer-title">ORAL HEALTH</span>
            <Link className="link link-hover">Fluoride Treatment</Link>
            <Link className="link link-hover">Cavity Filling</Link>
            <Link className="link link-hover">Teeth Whitening</Link>
          </div>
          <div>
            <span className="footer-title">OUR ADDRESS</span>
            <Link className="link link-hover">New York -10000Uk</Link>
          </div>
        </div>
        <div className="text-center pt-16 ">
        Copyright 2022 All Rights Reserved
        </div>
      </footer>
    );
};

export default Footer;<h1>footer</h1>