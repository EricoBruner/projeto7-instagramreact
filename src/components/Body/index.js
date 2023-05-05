import Posts from "../Posts";
import SideBar from "../SideBar";
import Stories from "../Stories/index";

export default function Body() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Posts />
            </div>

            <SideBar />
        </div>
    )
}