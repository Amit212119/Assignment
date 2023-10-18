import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/page/Dashboard.jsx";
import Product from "./Components/page/Product";
import Customers from "./Components/page/Customers";
import Income from "./Components/page/Income";
import Promote from "./Components/page/Promote";
import Help from "./Components/page/Help";
import Sidebar from "./Components/sidebar";
import Line from "./Components/page/line";

function App() {
  return (
     <div className="appdiv">
        <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Dashboard Line={Line}/>} />
              
              <Route path="/product" element={<Product />} />
              <Route path="/customer" element={<Customers />} />
              <Route path="/income" element={<Income />} />
              <Route path="/promote" element={<Promote />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </Sidebar>
        </BrowserRouter>
    
      </div>
      
      
     
    
  );
}

export default App;
