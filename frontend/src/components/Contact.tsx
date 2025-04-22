import React, { useState, useEffect } from "react";
import "./Contact.css";
import emailIcon from "../assets/AboutUs/icon-email.svg";
import facebookIcon from "../assets/AboutUs/icon-facebook.svg";
import Map from "../assets/AboutUs/map.svg";

interface CompanyInfo {
  name: string;
  phone: string;
  address: string;
}

const Contact = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/company-information`);
        const data = await response.json();
        console.log("Company Info:", data.data);
        setCompanyInfo(data.data);
      } catch (error) {
        console.error("Error fetching Company Info:", error);
      }
    };

    fetchCompanyInfo();
  }, [apiUrl]);

  return (
    <div className="contact-layout">
      <div className="contact-inner">
        <div className="row">
          <h1 className="contact-title">
            {companyInfo ? companyInfo.name : "Loading..."}
          </h1>
        </div>
        <div className="row">
          {/* ด้านซ้าย */}
          <div className="col-md-6 mb-4">
            <p className="mt-3 text-white" style={{ fontSize: "1.2rem" }}>
              {companyInfo ? companyInfo.phone : "Loading..."}
            </p>
            <img src={emailIcon} alt="Email" />
            <img src={facebookIcon} alt="Facebook" />
            <p className="mb-3 text-white" style={{ fontSize: "1rem" }}>
              {companyInfo ? companyInfo.address : "Loading..."}
            </p>
            <img src={Map} alt="Map" />
          </div>
          <div className="col-md-6">
            <div className="row">
              <h2 className="mb-4 text-white" style={{ fontFamily: "Saira" }}>
                Menu
              </h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div
                  className="mb-3 text-white"
                  style={{ fontFamily: "Saira" }}
                >
                  <h5>Service and Solutions</h5>
                  <ul className="list-unstyled ps-3">
                    <li>Network and solutions</li>
                    <li>Data center</li>
                    <li>Data management</li>
                    <li>Collaboration management</li>
                    <li>Multimedia solution</li>
                    <li>Digital transformation</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="mb-3 text-white"
                  style={{ fontFamily: "Saira" }}
                >
                  <h5>Our Community</h5>
                  <ul className="list-unstyled ps-3">
                    <li>Company events</li>
                    <li>Knowledge</li>
                    <li>Society</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
