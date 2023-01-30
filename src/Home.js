function Home() {
  return (
    <div id="home">
      <div className="topnav">
        <img
          src="https://i.pinimg.com/564x/c0/b0/03/c0b003d4818fe78de1b940886a539f33.jpg"
          width="100px"
          alt="tech"
        />
        <a href="#contact">Contact</a>
        <a href="#project">Project</a>
        <a href="#about">About</a>
        <a class="active" href="#home">
          Home
        </a>
      </div>

      <div class="flex flex3">
        <div class="flex-items">
          <p>Hey there, I am </p>

          <h3 className="name">Uwaoma Cyrus</h3>
          <h4>I'm a software Engineer</h4>
          <h4> I build and design Beautiful user Interfaces</h4>
          <a className="mailButton" href="mailto:uwaomacyruz@gmail.com">
            Send Me An Email
          </a>
        </div>

        <div class="flex-items">
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
