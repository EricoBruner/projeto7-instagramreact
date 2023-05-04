export default function Post({
    userImg,
    user,
    postUrl,
    postAlt,
    likesTopUser,
    likesTopUserImg,
    likesAmout,
}) {    
    return (
        <div class="post">
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
                <img src={postUrl} alt={postAlt}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={likesTopUserImg} alt={likesTopUser}/>
                    <div class="texto">
                    Curtido por <strong>{likesTopUser}</strong> e <strong>outras {likesAmout} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}