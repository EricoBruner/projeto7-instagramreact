import { useState } from "react"

export default function Post({
    id,
    userImg,
    user,
    postUrl,
    postAlt,
    likesTopUser,
    likesTopUserImg,
    likesAmout,
}) {
    let [savedPost, setSavedPost] = useState(null)
    let [likedPost, setLikedPost] = useState(null)
    let [showHeart, setShowHeart] = useState("DontShowGrowingHeart")
    let [likesAmoutCurrent, setLikesAmoutCurrent] = useState(likesAmout)

    function savePost(id) {
        if(savedPost === id) {
            setSavedPost(null)
        } else {
            setSavedPost(id)
        }
    }
    
    function likePost(id, button, image) {
        if(likedPost === id && button) {
            setLikedPost(null)
            setLikesAmoutCurrent(likesAmoutCurrent - 1)
        } else if(likedPost === null) {
            setLikedPost(id)
            setLikesAmoutCurrent(likesAmoutCurrent + 1)

            if(image) {
                setShowHeart("ShowGrowingHeart")
                setTimeout(() => {
                    setShowHeart("DontShowGrowingHeart")
                }, 500)
            }
        }
    }

    return (
        <div data-test="post" className="post" id={id}>
            <div className="topo">
                <div className="usuario">
                <img src={userImg} alt={user}/>
                {user}
                </div>
                <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img data-test="post-image" onDoubleClick={() => likePost(id, false, true)} src={postUrl} alt={postAlt}/>
                <ion-icon name="heart" className={showHeart}></ion-icon>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                    {likedPost ? (
                        <ion-icon data-test="like-post" onClick={() => likePost(id, true)} name="heart" className="like"></ion-icon>
                    ) : (
                        <ion-icon data-test="like-post" onClick={() => likePost(id, true)} name="heart-outline"></ion-icon>
                    )}
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                    {savedPost ? (
                        <ion-icon data-test="save-post" onClick={() => savePost(id)} name="bookmark"></ion-icon>
                    ) : (
                        <ion-icon data-test="save-post" onClick={() => savePost(id)} name="bookmark-outline"></ion-icon>
                    )}
                    </div>
                </div>

                <div className="curtidas">
                    <img src={likesTopUserImg} alt={likesTopUser}/>
                    <div className="texto">
                    Curtido por <strong>{likesTopUser}</strong> e <strong data-test="likes-number">outras {likesAmoutCurrent.toLocaleString()} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}