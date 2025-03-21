import React from "react";
import ParticlesComponent from "../../components/Particles/Particles";
import styles from "../../components/Particles/Particle.module.css";
import "./AboutUs.Module.css";

const AboutUs = () => {
  return (
    <div>
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
          <ParticlesComponent className={styles.particle} />
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
      <div className="position-relative" style={{ height: "248vh" }}>
        <img
          src="src/assets/AboutUs/bg-solutions.svg"
          className="img-fluid w-100 h-100 object-fit-cover"
          alt="Background"
        />
        {/* Background */}
        <div
          className="position-absolute text-white"
          style={{
            top: "40% ",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1
            className="text-white text-center"
            style={{
              fontFamily: "Saira, sans-serif",
              fontWeight: 700,
              fontSize: "64px",
              lineHeight: "142%",
            }}
          >
            SERVICE <br />
            and <br />
            SOLUTIONS
          </h1>
        </div>
        {/* Background */}
        {/* Gems 1 */}
        <div
          className="position-absolute"
          style={{
            top: "6% ",
            left: "20%",
          }}
        >
          <img src="src/assets/AboutUs/Gem1.svg" alt="" />
        </div>
        {/* Gems 2 */}
        <div
          className="position-absolute"
          style={{
            top: "22% ",
            left: "2%",
          }}
        >
          <img src="src/assets/AboutUs/Gem2.svg" alt="" />
        </div>
        {/* Gems 3 */}
        <div
          className="position-absolute"
          style={{
            top: "39% ",
            left: "4%",
            zIndex: 1,
          }}
        >
          <img src="src/assets/AboutUs/Gem3.svg" alt="" />
        </div>
        {/* Gems 4 */}
        <div
          className="position-absolute"
          style={{
            top: "7% ",
            right: "18%",
          }}
        >
          <img src="src/assets/AboutUs/Gem4.svg" alt="" />
        </div>
        {/* Gems 5 */}
        <div
          className="position-absolute"
          style={{
            top: "20% ",
            right: "3%",
          }}
        >
          <img src="src/assets/AboutUs/Gem5.svg" alt="" />
        </div>
        {/* Gems 6 */}
        <div
          className="position-absolute"
          style={{
            top: "40% ",
            right: "5%",
            zIndex: 1,
          }}
        >
          <img src="src/assets/AboutUs/Gem6.svg" alt="" />
        </div>
        {/* Gems floor */}
        <div
          className="position-absolute"
          style={{
            top: "0 ",
            right: "0",
            // transform: "translate(50%,50%)",
          }}
        >
          <img src="src/assets/AboutUs/Gem-floor.svg" alt="" />
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
            top: "8%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 className="main-text-s64">Our Community</h1>
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
      </div>
    </div>
  );
};

export default AboutUs;
