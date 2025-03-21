import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import ReptileDetail from "../screens/ReptileDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/reptile" element={<ReptileDetail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
