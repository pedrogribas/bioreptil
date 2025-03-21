import { Route, Routes } from "react-router-dom";
import { About } from "../screens/About";
import Home from "../screens/Home";
import ReptileDetail from "../screens/ReptileDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/reptile" element={<ReptileDetail />} />
      <Route path="/sobre" element={<About />} />

      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
