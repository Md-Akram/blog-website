import './write.css'

const Write = () => {
    return (
        <div className="write">
            <img src="" alt="" className="write-img" />
            <form className="write-form">
                <div className="write-form-group">
                    <label htmlFor="fileInput">
                        <i className="fas fa-plus plus-icon"></i>
                    </label>
                    <input type="file" id="fileInput" />
                    <input type="text" placeholder='Title' className="write-input" autoFocus={true} />
                    <button className="write-submit">Publish</button>
                </div>
                <div className="write-form-group">
                    <textarea placeholder='Write the content' type='text' className='write-input write-text'></textarea>
                </div>

            </form>
        </div>
    )
}

export default Write