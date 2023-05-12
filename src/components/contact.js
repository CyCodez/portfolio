import twitter from "../icons/twitter-icon.png";
import linked from "../icons/linkedIn-icon.png";
import git from "../icons/github-icon.png";
import instagram from "../icons/instagram-icon.jpg";
import hello from "../icons/hello-icon.jpg";
function Contact() {
  return (
    <div className="footerC">
      <h2 id="contact" style={{ textAlign: "center", marginTop: "40px" }}>
        Contact Me
      </h2>
      <div className="flex flex3">
        <div className="flex-project2">
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
          <div className="socialM">
            <a href="https://twitter.com/uwaoma_cyrus?t=OZV8vv4NK3o8cEfTK7HUEw&s=09">
              {" "}
              <img
                src={twitter}
                alt=""
                style={{
                  margin: "5px",
                  padding: "7px",
                  width: "35px",
                  height: "45px",
                }}
              />
            </a>

            <a href="https://www.linkedin.com/in/uwaoma-cyrus-webdev">
              {" "}
              <img
                src={linked}
                alt=""
                style={{
                  margin: "5px",
                  padding: "7px",
                  width: "35px",
                  height: "45px",
                }}
              />
            </a>
            <a href="https://github.com/CyCodez">
              <img
                src={git}
                alt=""
                style={{
                  margin: "5px",
                  padding: "7px",
                  width: "35px",
                  height: "45px",
                }}
              />
            </a>
            <a href="https://www.instagram.com/uwaomacyrus/">
              <img
                src={instagram}
                alt=""
                style={{
                  margin: "5px",
                  padding: "7px",
                  width: "35px",
                  height: "45px",
                }}
              />
            </a>
          </div>
        </div>

        <div className="flex-project2">
          <p>
            <input
              type="text"
              placeholder="full Name"
              style={{ width: "300px", height: "30px" }}
              required="required"
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="email Address"
              style={{ width: "300px", height: "30px" }}
              required="required"
            />
          </p>
          <p>
            <textarea rows="4" cols="50" placeholder="Message" required />
          </p>
          <p>
            <a href="mailto:uwaomacyruz@gmail.com">
              <button className="sendBtn">send</button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
