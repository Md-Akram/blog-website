import './post.css'

const Post = () => {
    return (
        <div className="post">
            <img className='post-img' src="https://via.placeholder.com/300" alt="post" />
            <div className="post-info">
                <div className="post-categories">
                    <span className="post-category">
                        News
                    </span>
                    <span className="post-category">
                        web
                    </span>
                </div>
                <p className="post-title">
                    Lorem ipsum dolor sit amet.
                </p>
                <p className="post-date">
                    10 min ago
                </p>
            </div>
            <p className="post-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi beatae ut voluptates nihil incidunt qui reiciendis amet nobis laudantium facere enim perspiciatis, a quos soluta praesentium, sint dicta ullam! Atque reiciendis, doloremque, incidunt et vel ipsum magni assumenda iste cumque, quas aliquam eligendi excepturi aperiam blanditiis consectetur nemo? Ducimus.
            </p>
        </div>
    )
}

export default Post