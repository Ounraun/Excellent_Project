import React, { useState, useEffect } from "react";
import "./Contact.css";
import emailIcon from "../assets/AboutUs/icon-email.svg";
import facebookIcon from "../assets/AboutUs/icon-facebook.svg";
import Map from "../assets/AboutUs/map.svg";
import { useTranslation } from "react-i18next";

import type { CompanyInfo } from "../types/contact";
import { getCompanyInfo } from "../services/strapi";

// interface LocalCompanyInfo {
//   name: string;
//   phone: string;
//   address: string;
// }

const Contact = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const { t, i18n } = useTranslation(["common", "contact"]);
  // const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    getCompanyInfo()
      .then((res) => setCompanyInfo(res.data))
      .catch((err) => console.error("Failed fetching Company Info:", err));
  }, [i18n.language]);

  console.log("Company Info:", companyInfo);

  return (
    <div className="contact-layout">
      <div className="contact-inner overflow-hidden">
        <div className="row">
          <h1 className="contact-title">
            {companyInfo ? companyInfo.name : "Loading..."}
          </h1>
        </div>
        <div className="row">
          {/* ด้านซ้าย */}
          <div className="col-md-6 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="text-white mb-0" style={{ fontSize: "1.2rem" }}>
                {companyInfo ? companyInfo.phone : "Loading..."}
              </p>
              <div>
                <img src={emailIcon} alt="Email" className="me-3" />
                <img src={facebookIcon} alt="Facebook" />
              </div>
            </div>

            <p className="mb-3 text-white" style={{ fontSize: "1rem" }}>
              Location : {companyInfo ? companyInfo.location : "Loading..."}
              <br />
              {companyInfo ? companyInfo.address : "Loading..."}
            </p>
            <img src={Map} alt="Map" />
          </div>
          <div className="col-md-6">
            <div className="row">
              <h2 className="mb-4 text-white" style={{ fontFamily: "Saira" }}>
                {t("contact:menu")}
              </h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div
                  className="mb-3 text-white"
                  style={{ fontFamily: "Saira" }}
                >
                  <h5>{t("contact:serviceAndSolutions")}</h5>
                  <ul className="list-unstyled ps-3">
                    <li>{t("contact:networkAndSolutions")}</li>
                    <li>{t("contact:dataCenter")}</li>
                    <li>{t("contact:dataManagement")}</li>
                    <li>{t("contact:centralizeManagement")}</li>
                    <li>{t("contact:multimediaSolution")}</li>
                    <li>{t("contact:digitalTransformation")}</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="mb-3 text-white"
                  style={{ fontFamily: "Saira" }}
                >
                  <h5>{t("contact:ourCommunity")}</h5>
                  <ul className="list-unstyled ps-3">
                    <li>{t("contact:companyEvents")}</li>
                    <li>{t("contact:knowledge")}</li>
                    <li>{t("contact:society")}</li>
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
