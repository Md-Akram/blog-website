import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home'
import './app.css'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'

const App = () => {
    return (
        <>
            <TopBar />
            {/* <Home /> */}
            {/* <Single /> */}
            {/* <Write /> */}
            {/* <Settings /> */}
            <Login />
        </>
    )
}

export default App