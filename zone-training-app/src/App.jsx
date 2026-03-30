import { useCallback } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { useZoneStorage } from "./hooks/useZoneStorage";
import { ZoneNavContext } from "./context/ZoneNavContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { C } from "./styles/colors";
import { FB } from "./styles/fonts";
import { Landing } from "./pages/Landing";
import { Diagnostic } from "./pages/Diagnostic";
import { Dashboard } from "./pages/Dashboard";
import { Module1 } from "./pages/Module1";
import { Module2 } from "./pages/Module2";
import { ZoneSystem } from "./pages/ZoneSystem";
import { ProgramOverview } from "./pages/ProgramOverview";

function Layout() {
  const [ls, save] = useZoneStorage();
  const navigate = useNavigate();
  const nav = useCallback((p) => {
    navigate(p === "landing" ? "/" : `/${p}`);
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <ZoneNavContext.Provider value={{ ls, save, nav }}>
      <div style={{ background: C.cream, minHeight: "100vh", fontFamily: FB, color: C.navy }}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ZoneNavContext.Provider>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="diagnostic" element={<Diagnostic />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="module1" element={<Module1 />} />
        <Route path="module2" element={<Module2 />} />
        <Route path="zonesystem" element={<ZoneSystem />} />
        <Route path="overview" element={<ProgramOverview />} />
      </Route>
    </Routes>
  );
}
