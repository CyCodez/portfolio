// import { motion, useAnimation } from "framer-motion";
import rlogo from "./icons/react-icon.jpg";
import cslogo from "./icons/css3_icon.webp";
import tlogo from "./icons/typescript.webp";
import hlogo from "./icons/html5-icon.png";
import vlogo from "./icons/vue-logo.png";
// import { useInView } from "react-intersection-observer";

// import { useEffect } from "react";

function About() {
  // const control = useAnimation();
  // const [ref, inView] = useInView();
  // const boxVariant = {
  //   visible: { opacity: 1, scale: 1 },
  //   hidden: { opacity: 0, scale: 0 },
  // };
  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   } else {
  //     control.start("hidden");
  //   }
  // }, [control, inView]);
  return (
    <div className="box">
      <h1 id="about">About Me</h1>

      <div className="About-Section">
        <p>
          I started out as a self-taught developer, trying to find the best
          possible way to improve my learning Experience.
        </p>
        <p>
          working with other developers, building Projects, joining communities
          and contributing to open source has been a sure fire way to improving
          my skill and keep me up to date with latest technologies in software.
        </p>
        <p>
          Among my exciting tech journey and experience is the Privledge of
          passing through altSchool with a diploma in Frontend Engineering
        </p>
        <p>
          With the increase in Cyber-Attack and software vulnurabilities I am
          Currenctly taking a course on cyber security, so as to better secure
          any organization I work for.
        </p>
        <p>
          I have a keen Interest in developing efficient and reliable solutions
          while meeting user expectation and satisfaction{" "}
        </p>
        <h2 style={{ marginLeft: "25px" }}>Here are few technologies I use</h2>
        <div className="grid-container">
          <div>
            <img src={hlogo} alt="react" width="80px" height="100px" />
          </div>
          <div>
            <img src={cslogo} alt="react" width="70px" height="100px" />
          </div>
          <div>
            <img src={rlogo} alt="react" width="90px" />
          </div>
          <div>
            <img src={tlogo} alt="react" width="90px" height="108px" />
          </div>
          <div>
            <img
              src={vlogo}
              style={{ marginBottom: "15px", border: "none" }}
              alt="react"
              width="90px"
              height="100px"
            />
          </div>
          <div className="iteml">Html5</div>

          <div className="iteml">css3</div>

          <div className="item">Reactjs</div>

          <div className="item">Typescript</div>

          <div className="item">Vuejs</div>
        </div>
      </div>
    </div>
  );
}
export default About;
