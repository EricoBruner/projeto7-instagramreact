import Post from "./Post"

export default function Posts() {
    const posts = [
        {
            userImg: "assets/img/meowed.svg",
            user: "meowed",
            post: {
                url: "assets/img/gato-telefone.svg",
                alt: "gato-telefone",
            },
            likes: {
                topLike: {
                    userImg: "assets/img/respondeai.svg",
                    user: "respondeai",
                },
                amount: "101.523",
            }
        },
        {
            userImg: "assets/img/barked.svg",
            user: "barked",
            post: {
                url: "assets/img/dog.svg",
                alt: "dog",
            },
            likes: {
                topLike: {
                    userImg: "assets/img/adorable_animals.svg",
                    user: "adorable_animals",
                },
                amount: "99.159",
            }
        },
        {
            userImg: "assets/img/meowed.svg",
            user: "meowed",
            post: {
                url: "assets/img/gato-telefone.svg",
                alt: "gato-telefone",
            },
            likes: {
                topLike: {
                    userImg: "assets/img/respondeai.svg",
                    user: "respondeai",
                },
                amount: "101.523",
            }
        },
    ]

    return (
        <div class="posts">
            {posts.map( post => {
                return (
                    <Post
                        user={post.user}
                        userImg={post.userImg}
                        postUrl={post.post.url}
                        postAlt={post.post.alt}
                        likesTopUser={post.likes.topLike.user}
                        likesTopUserImg={post.likes.topLike.userImg}
                        likesAmout={post.likes.amount}
                    />
                )
            })}
        </div>
    )
}