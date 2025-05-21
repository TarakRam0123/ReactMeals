import "./App.css";
// import Navbar from './Navbar';
// import Body from "./Body";
// import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("./components/Navbar"));
const Body=lazy(()=>import("./components/Body"))
const Footer=lazy(()=>import("./components/Footer"))
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Navbar />
        <Body />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
