export default function Suggestion({user, userImg, reason}) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={userImg} alt={user}/>
                <div className="texto">
                    <div className="nome">{user}</div>
                    <div className="razao">{reason}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}