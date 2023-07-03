// import { Route, Routes } from "react-router-dom";
// import Home from "./containers/Home";
// import Category from "./containers/Category";

// const Router = () => {
//   return (
//     <Routes>
//       <Route exact path={"/"} component={Home} />
//     </Routes>
//   );
// };
// export default Router;

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./containers/Home";
import Category from "./containers/Category";
import Header from "./components/common/Header";
import Favorites from "./containers/Favorites";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/wishlist" element={<Favorites />} />
      </Routes>
    </>
  );
};
export default Routers;
