import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Dashboard from './pages/Dashboard';
import PublicSharedVault from './pages/PublicSharedVault';
import ExcalidrawDocument from './pages/ExcalidrawDocument';
import Settings from './pages/Settings';
import AddContentModal from './components/AddContentModal';
import SearchDiscovery from './pages/SearchDiscovery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<Authentication />} />
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
