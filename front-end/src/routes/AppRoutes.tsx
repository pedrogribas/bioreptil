import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import ReptileDetail from "../screens/ReptileDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reptile/:id" element={<ReptileDetail />} />
    </Routes>
  );
};

export default AppRoutes;
