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
        <div className="usuario" >
            <img data-test="profile-image" onClick={editProfileImg} src={userImg} alt="imagem de perfil"/>
            <div className="texto">
                <span>
                    <strong data-test="name">{userName}</strong>
                    <ion-icon data-test="edit-name" onClick={editProfileName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}