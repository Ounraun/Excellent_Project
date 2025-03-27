import React, { useState, useMemo } from "react";
import ParticlesComponent from "../../components/Particles/Particles";
import styles from "../../components/Particles/Particle.module.css";
import "./AboutUs.Module.css";
import emailIcon from "../../assets/AboutUs/icon-email.svg";
import facebookIcon from "../../assets/AboutUs/icon-facebook.svg";
import Map from "../../assets/AboutUs/map.svg";
import CommunityCard from "./CommunityCard";
// import Footer from "../../components/Footer";

const AboutUs = () => {
  const [isHoveredGem1, setIsHoveredGem1] = useState(false);
  const [isHoveredGem2, setIsHoveredGem2] = useState(false);
  const [isHoveredGem3, setIsHoveredGem3] = useState(false);
  const [isHoveredGem4, setIsHoveredGem4] = useState(false);
  const [isHoveredGem5, setIsHoveredGem5] = useState(false);
  const [isHoveredGem6, setIsHoveredGem6] = useState(false);

  const particles = useMemo(() => {
    return <ParticlesComponent className={styles.particle} />;
  }, []);

  return (
    <div>
      {/* hero  */}
      <div
        className="position-relative bg-dark"
        style={{
          zIndex: 1,
          height: "600px",
          margin: 0,
          padding: 0,
          width: "100%",
        }}
      >
        <div className={styles.particleWrapper}>
          {particles}
          <div className="content-layout">
            <div className="p-4">
              <h1
                className="main-title"
                style={{
                  paddingTop: "0px",
                }}
              >
                The Excellent
              </h1>
              <p
                className="main-text-s32 "
                style={{
                  fontWeight: "400",
                  lineHeight: "170%",
                  letterSpacing: "-1.9%",
                  marginTop: "30px",
                }}
              >
                The Excellent Communication Company Limited was founded in 2007.
                to be an IT Solution and Engineering company who provide
                product, solution including design and Engineering we
                continuously develop all our solutions to be the most stability,
                efficiency and data safe.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* service and solutions */}
      <div
        className="position-relative"
        style={{ height: "293vh", overflow: "hidden" }}
      >
        {" "}
        {/* Background */}
        <img
          src="src/assets/AboutUs/bg-solutions.svg"
          alt="Background"
          className="w-100 h-100 object-fit-cover"
          style={{ objectPosition: "center" }}
        />
        {/* Background */}
        <div
          className="position-absolute text-white"
          style={{
            top: "27% ",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1
            className="text-white text-center fw-bold display-4 display-md-3 display-lg-1"
            style={{
              fontFamily: "Saira, sans-serif",
              // fontWeight: 700,
              // fontSize: "64px",
              lineHeight: "142%",
            }}
          >
            SERVICE <br />
            and <br />
            SOLUTIONS
          </h1>
        </div>
        {/* Gems 1 */}
        <div
          className={`position-absolute gem-float-1 ${
            isHoveredGem1 ? "hovered" : ""
          }`}
          style={{
            top: "8% ",
            left: "25%",
            width: "300px",
            height: "300px",
            zIndex: 5,
          }}
          onMouseEnter={() => {
            setIsHoveredGem1(true);
          }}
          onMouseLeave={() => {
            setIsHoveredGem1(false);
          }}
        >
          <img
            src="src/assets/AboutUs/Gem1.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        {/* Gems 2 */}
        <div
          className={`position-absolute gem-float-2 ${
            isHoveredGem2 ? "hovered" : ""
          }`}
          style={{
            top: "16% ",
            left: "10%",
            width: "300px",
            height: "300px",
            zIndex: 5,
          }}
          onMouseEnter={() => {
            setIsHoveredGem2(true);
          }}
          onMouseLeave={() => {
            setIsHoveredGem2(false);
          }}
        >
          <img
            src="src/assets/AboutUs/Gem2.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        {/* Gems 3 */}
        <div
          className={`position-absolute gem-float-3 ${
            isHoveredGem3 ? "hovered" : ""
          }`}
          style={{
            top: "27% ",
            left: "17%",
            zIndex: 5,
            width: "320px",
            height: "320px",
          }}
          onMouseEnter={() => {
            setIsHoveredGem3(true);
          }}
          onMouseLeave={() => {
            setIsHoveredGem3(false);
          }}
        >
          <img
            src="src/assets/AboutUs/Gem3.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        {/* Gems 4 */}
        <div
          className={`position-absolute gem-float-4 ${
            isHoveredGem4 ? "hovered" : ""
          }`}
          style={{
            top: "8% ",
            right: "27%",
            width: "280px",
            height: "280px",
            zIndex: 5,
          }}
          onMouseEnter={() => {
            setIsHoveredGem4(true);
          }}
          onMouseLeave={() => {
            setIsHoveredGem4(false);
          }}
        >
          <img
            src="src/assets/AboutUs/Gem4.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        {/* Gems 5 */}
        <div
          className={`position-absolute gem-float-5 ${
            isHoveredGem5 ? "hovered" : ""
          }`}
          style={{
            top: "16% ",
            right: "13%",
            width: "300px",
            height: "300px",
            zIndex: 5,
          }}
          onMouseEnter={() => {
            setIsHoveredGem5(true);
          }}
          onMouseLeave={() => {
            setIsHoveredGem5(false);
          }}
        >
          <img
            src="src/assets/AboutUs/Gem5.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        {/* Gems 6 */}
        <div
          className={`position-absolute gem-float-6 ${
            isHoveredGem6 ? "hovered" : ""
          }`}
          style={{
            top: "28% ",
            right: "18%",
            zIndex: 5,
            width: "300px",
            height: "300px",
          }}
          onMouseEnter={() => {
            setIsHoveredGem6(true);
          }}
          onMouseLeave={() => {
            setIsHoveredGem6(false);
          }}
        >
          <img
            src="src/assets/AboutUs/Gem6.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        {/* Gems floor */}
        <div
          className="position-absolute"
          style={{
            top: "0 ",
            right: "14%",
            width: "70%",
            // zIndex: 0,
            // transform: "translate(50%,50%)",
          }}
        >
          {/* <img
            src="src/assets/AboutUs/Gem-floor.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          /> */}
          <img
            src="src/assets/AboutUs/Gem-floor.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="vl"></div>
        <div className="iso-layout">
          <div className="iso-item">
            <div className="iso-item-content text-white">
              <p>Empower your business with IT solutions by</p>
              <p>
                <span className="color-gradient-1">
                  Experts understand your every need.
                </span>{" "}
              </p>
              <p>
                <span>
                  Guarantees with The{" "}
                  <span className="color-gradient-2">ISO 9001:2015</span>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* community */}
      <div className="position-relative community-layout bg-community">
        <div className="filter-bg-community-1"></div>
        <div className="filter-bg-community-2"></div>
        <div className="circle-bg-community-1"></div>
        <div className="circle-bg-community-2"></div>
        <div className="position-absolute w-100 h-100">
          <div className="position-relative wave-bg-community w-100 h-100">
            <img
              className="position-absolute bg-wave-filter "
              src="../../src/assets/AboutUs/bg-wave-service.svg"
              alt=""
            />
            <img
              className="position-absolute bg-wave"
              src="../../src/assets/AboutUs/bg-wave.svg"
              alt=""
            />
          </div>
        </div>
        <div
          className="position-absolute text-white"
          style={{
            zIndex: 6,
            bottom: "5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1 className="main-text-s50">“ Tailored IT solutions </h1>
          <h1 className="main-text-s50">
            we're ready to consult and serve you. ”
          </h1>
        </div>
        <div
          className="position-absolute text-white"
          style={{
            zIndex: 6,
            top: "5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 className="main-text-s64">Our Community</h1>
        </div>
        <CommunityCard />
      </div>

      {/* contact */}
      <div className="container-fluid contact-layout py-5 px-5 ">
        <div className="row">
          <h1 className="contact-title">The Excellent Communication</h1>
        </div>
        <div className="row">
          {/* ด้านซ้าย */}
          <div className="col-md-6 mb-4">
            <p className="mt-3 text-white" style={{ fontSize: "1.2rem" }}>
              02-000-8180
            </p>
            <img src={emailIcon} alt="Email" />
            <img src={facebookIcon} alt="Facebook" />
            <p className="mb-3 text-white" style={{ fontSize: "1rem" }}>
              290 C2 Building Raintree Office Garden 1A, Soi Soonvijai 4, Bang
              Kapa, Huai Khwang, Bangkok 10310
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

export default AboutUs;
