import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MemberForm from './pages/MemberForm.jsx';
import { HostDashboardWithBoundary } from './pages/HostDashboard.jsx';

const router = createBrowserRouter(
  [
    { path: '/', element: <MemberForm /> },
    { path: '/host', element: <HostDashboardWithBoundary /> },
  ],
  { basename: '/bni' },
);

export default function App() {
  return <RouterProvider router={router} />;
}
