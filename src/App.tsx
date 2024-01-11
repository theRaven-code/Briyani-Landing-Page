import "./App.css";
import FullScreenLayout from "./common/FullScreenLayout";
import { Home, About, Work, Testimonial, Contact, Footer } from "./components";

const components = [Home, About, Work, Testimonial, Contact, Footer];

function App() {
  return (
    <div className="App">
      <FullScreenLayout>
        {components.map((Component) => (
          <Component />
        ))}
      </FullScreenLayout>
    </div>
  );
}

export default App;
