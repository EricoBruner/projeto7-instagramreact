import Suggestion from "./Suggestion"

export default function Suggestions() {
    const suggestions = [
        {userImg: "assets/img/bad.vibes.memes.svg", user: "bad.vibes.memes", reason: "Segue você"},
        {userImg: "assets/img/chibirdart.svg", user: "chibirdart", reason: "Segue você"},
        {userImg: "assets/img/razoesparaacreditar.svg", user: "razoesparaacreditar", reason: "Novo no Instagram"},
        {userImg: "assets/img/adorable_animals.svg", user: "adorable_animals", reason: "Segue você"},
        {userImg: "assets/img/smallcutecats.svg", user: "smallcutecats", reason: "Segue você"},
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestions.map( suggestion => {
                return (
                    <Suggestion 
                        key={suggestion.user}
                        user={suggestion.user}
                        userImg={suggestion.userImg}
                        reason={suggestion.reason}
                    />
                )
            })}
        </div>
    )
}