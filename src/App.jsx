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
      <Suspense fallback={<div style={{ backgroundColor: "red", border: "1px solid green" }}>loading Page...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Suspense fallback={<div style={{ backgroundColor: "red", border: "1px solid green" }}>loading Page...</div>}><Landingpage /></Suspense>} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
