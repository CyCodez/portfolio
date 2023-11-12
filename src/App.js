import "./App.css";
import { Home, About, Contact, Project } from "./components";
function App() {
  return (
    <div>
      <Home />
      <div classname="main-container">
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
