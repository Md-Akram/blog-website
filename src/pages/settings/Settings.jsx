import './settings.css'

const Settings = () => {
    return (
        <div className="settings">
            <div className="settings-title">
                <span className="update-title">Update Account</span>
                <span className="delete-title">Delete Account</span>
            </div>
            <form action="" className="settings-form">
                <label>Profile Picture</label>
                <div className="settings-profile-picture">
                    <img src="" alt="" />
                    <label htmlFor="file-input">
                        <i className="far fa-user-circle picture-icon"></i>
                    </label>
                    <input type="file" id="file-input" />
                </div>
                <label>Username</label>
                <input type="text" placeholder='Akram' />
                <label>Email</label>
                <input type="email" placeholder='jane@gmail.com' />
                <label>Password</label>
                <input type="password" />
                <button className="settings-submit">
                    Update
                </button>
            </form>
        </div>
    )
}

export default Settings