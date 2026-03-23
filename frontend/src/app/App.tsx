import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import RegisterPage from "../pages/register/RegisterPage";


const NotFound = () => (
  <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem" }}>
    <div style={{ textAlign: "center" }}>
      <h1>404</h1>
      <p>Page not found.</p>
    </div>
  </main>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
