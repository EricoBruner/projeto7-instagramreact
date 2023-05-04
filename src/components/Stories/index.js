import Story from "./Story";

export default function Stories() {
    const stories = [
        {imgUrl: "assets/img/9gag.svg", user: "9gag"},
        {imgUrl: "assets/img/meowed.svg", user: "meowed"},
        {imgUrl: "assets/img/barked.svg", user: "barked"},
        {imgUrl: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
        {imgUrl: "assets/img/wawawicomics.svg", user: "wawawicomics"},
        {imgUrl: "assets/img/respondeai.svg", user: "respondeai"},
        {imgUrl: "assets/img/filomoderna.svg", user: "filomoderna"},
        {imgUrl: "assets/img/memeriagourmet.svg", user: "memeriagourmet"},
    ]

    return (
        <div class="stories">
            {stories.map( story => {
                return (
                    <Story
                        img={story.imgUrl}
                        user={story.user}
                    />
                )
            })}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}