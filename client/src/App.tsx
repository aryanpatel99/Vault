import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Dashboard from './pages/Dashboard';
import PublicSharedVault from './pages/PublicSharedVault';
import ExcalidrawDocument from './pages/ExcalidrawDocument';
import Settings from './pages/Settings';
import AddContentModal from './components/AddContentModal';
import SearchDiscovery from './pages/SearchDiscovery';

function App() {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={token ? "/dashboard" : "/auth"} />} />
        <Route path="/auth" element={token ? <Navigate to="/dashboard" /> : <Authentication />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/public" element={<PublicSharedVault />} />
        <Route path="/excalidraw" element={<ExcalidrawDocument />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/add" element={<AddContentModal />} />
        <Route path="/search" element={<SearchDiscovery />} />
      </Routes>
    </Router>
  );
}

export default App;
