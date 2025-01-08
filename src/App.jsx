import { Home } from "./components/pages/Home";
import { AboutUS } from "./components/pages/AboutUS"; // Importa AboutUS
import { ContactUS } from "./components/pages/ContactUS"; // Importa ContactUS
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Layouts/Header";

function App() {
  return (
    <>
      <div className="bg-primary h-screen w-screen">
        <Header></Header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUS" element={<AboutUS />} />
          <Route path="/contactUS" element={<ContactUS />} />
        </Routes>
      </div>
    </>
  );
}

export default App;


