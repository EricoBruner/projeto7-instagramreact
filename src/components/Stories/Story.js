export default function Story({img, user}) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={img} alt={user} />
            </div>
            <div className="usuario">
                {user}
            </div>
        </div>
    )
}