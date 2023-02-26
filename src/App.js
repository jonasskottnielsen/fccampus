import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Blog, Contact, Home, Players } from "./pages";
import { Navbar } from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="players" element={<Players />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
