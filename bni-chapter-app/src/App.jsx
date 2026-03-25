import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MemberForm from './pages/MemberForm.jsx';
import HostDashboard from './pages/HostDashboard.jsx';

export default function App() {
  return (
    <BrowserRouter basename="/bni">
      <Routes>
        <Route path="/" element={<MemberForm />} />
        <Route path="/host" element={<HostDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
