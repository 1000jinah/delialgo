import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Category from "screens/category";
import Compare from "screens/compare";
import Weekly from "screens/insights/weekly";
import Monthly from "screens/insights/monthly";

import Machine from "screens/machine";
import Main from "screens/main";
import Ordinary from "screens/ordinary";
import Overview from "screens/overview";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          {/* Redirect from / to /recommend */}
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<Main />} />
          <Route path="/ordinary" element={<Ordinary />} />
          <Route path="/category" element={<Category />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/machine" element={<Machine/>} />
          <Route path="/overview" element={<Overview/>} />
          <Route path="/insights/weekly" element={<Weekly/>} />
          <Route path="/insights/monthly" element={<Monthly/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
