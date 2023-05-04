export default function Story({img, user}) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={img} alt={user}/>
            </div>
            <div class={user}>
                9gag
            </div>
        </div>
    )
}