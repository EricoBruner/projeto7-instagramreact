export default function Suggestion({user, userImg, reason}) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={userImg} alt={user}/>
                <div class="texto">
                    <div class="nome">{user}</div>
                    <div class="razao">{reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}