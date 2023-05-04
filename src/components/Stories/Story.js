export default function Story({img, user}) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={img} alt={user} />
            </div>
            <div class="usuario">
                {user}
            </div>
        </div>
    )
}