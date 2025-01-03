import { Home } from "./components/Pages/Home";
import { AboutUS } from "./components/Pages/AboutUS"; // Importa AboutUS
import { ContactUS } from "./components/Pages/ContactUS"; // Importa ContactUS
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


