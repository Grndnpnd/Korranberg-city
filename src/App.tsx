import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CityLayoutPage from './pages/CityLayoutPage'
import LibraryPage from './pages/LibraryPage'
import DistrictsPage from './pages/DistrictsPage'
import ShopsPage from './pages/ShopsPage'
import NpcsPage from './pages/NpcsPage'
import DmToolsPage from './pages/DmToolsPage'
import AppendixPage from './pages/AppendixPage'

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/city" element={<CityLayoutPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/districts" element={<DistrictsPage />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/npcs" element={<NpcsPage />} />
          <Route path="/dm-tools" element={<DmToolsPage />} />
          <Route path="/appendix" element={<AppendixPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
