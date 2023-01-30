import rout from "./icons/router-app.png";
import cal from "./icons/react-calculator.png";
import auth from "./icons/auth-app.png";

function Project() {
  return (
    <div>
      <h1 style={{ marginTop: "25%" }} id="project">
        Some Of My Project
      </h1>
      <div class="flex flex3">
        <div class="flex-project2">
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
          <a href="https://Routerassignment.cyruz.repl.co">
            {" "}
            <button>live site</button>
          </a>
        </div>

        <div class="flex-project2">
          <img src={rout} width="90%" height="70%" alt="" />
        </div>
      </div>
      <div class="flex flex3">
        <div class="flex-project2">
          <img src={auth} width="60%" height="80%" alt="" />
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
          <a href="https://github.com/CyCodez/Authentication_App">
            <button>view repo</button>
          </a>
          <a href="https://bank-recharge.netlify.app/">
            {" "}
            <button>live site</button>
          </a>
        </div>
      </div>
      <div class="flex flex3">
        <div class="flex-project2">
          <img src={cal} alt="" width="80%" height="80%" />
        </div>

        <div class="flex-project2">
          <h3>Calculator App</h3>
          <p>A simple calculator that Performs Basic Mathematical operation.</p>
          <p>This project is hosted by replit</p>
          <a href="https://replit.com/@cyruz/react-calculator#src/App.css">
            <button>view repo</button>
          </a>
          <a href="https://react-calculator.cyruz.repl.co">
            <button>live site</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Project;
