import './topbar.css'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <div className="top">
            <div className="topbar-left">
                <i class="fa-brands fa-facebook-square"></i>
                <i class="fa-brands fa-instagram-square"></i>
                <i class="fa-brands fa-pinterest-square"></i>
                <i class="fa-brands fa-twitter-square"></i>
            </div>
            <div className="topbar-center">
                <div className="menu">
                    <Link className="menu-item" to="/">Home</Link>
                    <Link className="menu-item" to="/settings">Settings</Link>
                    <Link className="menu-item" to="/write">Write</Link>
                    <Link className="menu-item" to="/login">Login</Link>
                </div>
            </div>
            <div className="topbar-right">
                <img className='profile-pic' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg" alt="profile-pic" />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default TopBar