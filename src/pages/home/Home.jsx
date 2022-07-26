import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import './home.css'

const Home = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Posts />
            </div>
        </>
    )
}

export default Home