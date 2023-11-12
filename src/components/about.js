import { FaReact as ReactIcon } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const IconText = ({ icon, text }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {icon}
      <p style={{ textAlign: "center" }}>{text}</p>
    </div>
  );
};

function About() {
  return (
    <div className="box">
      <h1 id="about">About Me</h1>
      <div></div>
      <div className="About-Section">
        <p className="text-format">
          I started out as a self-taught developer, trying to find the best
          possible way to improve my learning Experience. working with other
          developers, building Projects, joining communities and contributing to
          open source has been a sure fire way to improving my skill and keep me
          up to date with latest technologies in software. Among my exciting
          tech journey and experience is the Privledge of passing through
          altSchool with a diploma in Frontend Engineering With the increase in
          Cyber-Attack and software vulnurabilities I am Currenctly taking a
          course on cyber security, so as to better secure any organization I
          work for. I have a keen Interest in developing efficient and reliable
          solutions while meeting user expectation and satisfaction{" "}
        </p>
        <h2>Here are few technologies I use</h2>
        <div
          className="tech"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            flex: "400px",
          }}
        >
          <IconText
            icon={
              <FaHtml5
                size={32}
                style={{
                  color: "red",
                  backgroundColor: "white",
                  margin: "10px",
                }}
              />
            }
            text="HTML5"
          />
          <IconText
            icon={
              <FaCss3Alt
                size={32}
                style={{
                  color: "red",
                  backgroundColor: "white",
                  margin: "10px",
                }}
              />
            }
            text="CSS3"
          />
          <IconText
            icon={
              <ReactIcon
                size={32}
                style={{
                  color: "red",
                  backgroundColor: "white",
                  margin: "10px",
                }}
              />
            }
            text="React"
          />
          <IconText
            icon={
              <SiTypescript
                size={32}
                style={{
                  color: "red",
                  backgroundColor: "white",
                  margin: "10px",
                }}
              />
            }
            text="Typescript"
          />
          <IconText
            icon={
              <FaVuejs
                size={32}
                style={{
                  color: "red",
                  backgroundColor: "white",
                  margin: "10px",
                }}
              />
            }
            text="Vue"
          />
        </div>
      </div>
    </div>
  );
}
export default About;
