import twitter from "./icons/twitter-icon.png";
import linked from "./icons/linkedIn-icon.png";
import git from "./icons/github-icon.png";
import instagram from "./icons/instagram-icon.jpg";
import hello from "./icons/hello-icon.jpg";
function Contact() {
  return (
    <div>
      <h2 id="contact" style={{ textAlign: "center", marginTop: "40px" }}>
        Contact Me
      </h2>
      <div class="flex flex3">
        <div class="flex-project">
          <h2>
            Get In Touch{" "}
            <img
              src={hello}
              alt=""
              width="50px"
              style={{ backgroundColor: "black", color: "black" }}
            />
          </h2>
          <p>Feel free to reach out to me</p>
          <p>Either to get acquinted, collaborate on Project or for work</p>
          <div>
            <img
              src={twitter}
              style={{
                margin: "5px",
                padding: "7px",
                width: "35px",
                height: "45px",
              }}
            />
            <img
              src={linked}
              style={{
                margin: "5px",
                padding: "7px",
                width: "35px",
                height: "45px",
              }}
            />
            <img
              src={git}
              style={{
                margin: "5px",
                padding: "7px",
                width: "35px",
                height: "45px",
              }}
            />
            <img
              src={instagram}
              style={{
                margin: "5px",
                padding: "7px",
                width: "35px",
                height: "45px",
              }}
            />
          </div>
        </div>

        <div class="flex-project">
          <p>
            <input type="text" style={{ width: "300px", height: "30px" }} />
          </p>
          <p>
            <input type="text" style={{ width: "300px", height: "30px" }} />
          </p>
          <p>
            <textarea rows="4" cols="50" />
          </p>
          <p>
            <button>send</button>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
