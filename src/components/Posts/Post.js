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
    let [likesAmoutCurrent, setLikesAmoutCurrent] = useState(likesAmout)

    function savePost(id) {
        if(savedPost === id) {
            setSavedPost(null)
        } else {
            setSavedPost(id)
        }
    }
    
    function likePost(id, button = false) {
        if(likedPost === id && button) {
            setLikedPost(null)
            setLikesAmoutCurrent(likesAmoutCurrent - 1)
        } else if(likedPost === null) {
            setLikedPost(id)
            setLikesAmoutCurrent(likesAmoutCurrent + 1)
        }
    }

    return (
        <div class="post" id={id}>
            <div class="topo">
                <div class="usuario">
                <img src={userImg} alt={user}/>
                {user}
                </div>
                <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onClick={() => likePost(id)} src={postUrl} alt={postAlt}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                    {likedPost ? (
                        <ion-icon onClick={() => likePost(id, true)} name="heart" class="like"></ion-icon>
                    ) : (
                        <ion-icon onClick={() => likePost(id, true)} name="heart-outline"></ion-icon>
                    )}
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                    {savedPost ? (
                        <ion-icon onClick={() => savePost(id)} name="bookmark"></ion-icon>
                    ) : (
                        <ion-icon onClick={() => savePost(id)} name="bookmark-outline"></ion-icon>
                    )}
                    </div>
                </div>

                <div class="curtidas">
                    <img src={likesTopUserImg} alt={likesTopUser}/>
                    <div class="texto">
                    Curtido por <strong>{likesTopUser}</strong> e <strong>outras {likesAmoutCurrent.toLocaleString()} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}