// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import rout from "./icons/router-app.png";
import cal from "./icons/react-calculator.png";
import auth from "./icons/auth-app.png";

function Project() {
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
    <div
    // ref={ref}
    // variants={boxVariant}
    // initial="hidden"
    // animate={control}
    // className="box"
    >
      <h1 style={{ marginTop: "25%" }} id="project">
        Some Of My Project
      </h1>
      <div class="flex flex3">
        <div class="flex-project">
          <h3>Router App</h3>
          <p>
            This is an Application that fetches profiles of random individual
            from an external Api
          </p>
          <p>
            Using React Router to display the Profiles of these individuals in
            separate route
          </p>
          <p>This project is hosted by Replit an Online IDE</p>
          <a href="https://replit.com/@cyruz/Routerassignment">
            <button>view repo</button>
          </a>
          <button>live site</button>
        </div>

        <div class="flex-project">
          <a href="https://Routerassignment.cyruz.repl.co">
            {" "}
            <img src={rout} width="90%" height="70%" />
          </a>
        </div>
      </div>
      <div class="flex flex3">
        <div class="flex-project2">
          <a href="https://Routerassignment.cyruz.repl.co">
            {" "}
            <img src={auth} width="60%" height="80%" />
          </a>
        </div>

        <div class="flex-project2">
          <h3>Authentication App</h3>
          <p>
            this is an Application that requires users to log into their account
            using a valid user name
          </p>
          <p>
            In order to perform some simple transaction, and have details of the
            user stored
          </p>
          <p>This project is hosted by netlify</p>
          <button>view repo</button>
          <button>live site</button>
        </div>
      </div>
      <div class="flex flex3">
        <div class="flex-project2">
          <a href="https://Routerassignment.cyruz.repl.co">
            {" "}
            <img src={cal} width="80%" height="80%" />
          </a>
        </div>

        <div class="flex-project2">
          <h3>Authentication App</h3>
          <p>A simple calculator that Performs Basic Mathematical operation.</p>
          <p>This project is hosted by replit</p>
          <button>view repo</button>
          <button>live site</button>
        </div>
      </div>
    </div>
  );
}
export default Project;
