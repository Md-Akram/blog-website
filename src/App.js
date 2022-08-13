import TopBar from './components/topbar/TopBar'
import { Routes, Route } from 'react-router-dom'
import './app.css'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

const App = () => {
    return (
        <>
            <TopBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/single" element={<Single />} />
                <Route path="/write" element={<Write />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}

export default App