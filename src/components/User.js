import { useState } from "react";

export default function User() {
    let [userName, setUserName] = useState("catanacomics");
    let [userImg, setUserImg] = useState("assets/img/catanacomics.svg");

    const editProfileName = () => {
        let newUserName = prompt("Novo nome de usuário:")

        if(newUserName) {
            setUserName(newUserName);
        }
    }

    const editProfileImg = () => {
        let newUserImg = prompt("Nova imagem de usuário:")

        if(newUserImg) {
            setUserImg(newUserImg);
        }
    }

    return (
        <div class="usuario">
            <img onClick={editProfileImg} src={userImg} alt="imagem de perfil"/>
            <div class="texto">
                <span>
                    <strong>{userName}</strong>
                    <ion-icon onClick={editProfileName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}