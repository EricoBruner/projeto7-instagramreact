import Story from "./Story";

export default function Stories() {
    const stories = [
        {id: 1, imgUrl: "assets/img/9gag.svg", user: "9gag"},
        {id: 2, imgUrl: "assets/img/meowed.svg", user: "meowed"},
        {id: 3, imgUrl: "assets/img/barked.svg", user: "barked"},
        {id: 4, imgUrl: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
        {id: 5, imgUrl: "assets/img/wawawicomics.svg", user: "wawawicomics"},
        {id: 6, imgUrl: "assets/img/respondeai.svg", user: "respondeai"},
        {id: 7, imgUrl: "assets/img/filomoderna.svg", user: "filomoderna"},
        {id: 8, imgUrl: "assets/img/memeriagourmet.svg", user: "memeriagourmet"},
    ]

    return (
        <div className="stories">
            {stories.map( story => {
                return (
                    <Story
                        key={story.id}
                        img={story.imgUrl}
                        user={story.user}
                    />
                )
            })}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}