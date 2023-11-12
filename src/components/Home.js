import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const TypewriterMultiLine = ({ lines }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (charIndex < lines[lineIndex].text.length - 1) {
        setCharIndex(charIndex + 1);
      } else if (lineIndex < lines.length - 1) {
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }
    }, lines[lineIndex].delay || 150);

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex, lines]);

  useEffect(() => {
    if (
      lineIndex === lines.length - 1 &&
      charIndex === lines[lineIndex].text.length - 1
    ) {
      setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
      }, 1000); // wait for 1 second before resetting
    }
  }, [charIndex, lineIndex, lines]);

  return (
    <>
      {lines.map((line, index) => (
        <h3
          className="name"
          key={index}
          style={line.style || {}} // pass in style prop for each line
        >
          {index <= lineIndex
            ? // render each line up to the current lineIndex
              line.text.slice(0, charIndex + 1)
            : null}
        </h3>
      ))}
    </>
  );
};

function Home() {
  return (
    <div id="home">
      <Navbar />

      <div className="flex flex3">
        <div className="flex-items">
          <div className="name">
            {/* <TypewriterMultiLine
              lines={[
                {
                  text: "Hey there, I am",
                },
                { text: "Uwaoma Cyrus   " },
              ]}
            /> */}
            Hey there, I am Cyrus
          </div>
          <h4 className="interface">
            {" "}
            I build and design Beautiful user Interfaces
          </h4>
          <a className="mailButton" href="mailto:uwaomacyruz@gmail.com">
            Send Me An Email
          </a>
        </div>

        <div className="flex-items">
          <img
            className="my-image"
            src="https://avatars.githubusercontent.com/u/100401054?v=4"
            alt="profile_pics"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
