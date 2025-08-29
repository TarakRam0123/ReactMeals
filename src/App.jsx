import { lazy, Suspense } from "react";
import "./App.css";
// import Navbar from './Navbar';
// import Body from "./Body";
// import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
const Navbar = lazy(() => import("./components/Navbar"));
const Landingpage = lazy(() => import("./components/pages/Landingpage"));
const Order = lazy(() => import('./components/pages/Order'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div style={{ backgroundColor: "red" }}>loading Page...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
