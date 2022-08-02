import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home'
import './app.css'
import Single from './pages/single/Single'
import Write from './pages/write/Write'

const App = () => {
    return (
        <>
            <TopBar />
            <Home />
            <Single />
            <Write />
        </>
    )
}

export default App