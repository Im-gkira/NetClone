import "./watch.scss"
import {ArrowBackIosOutlined} from "@material-ui/icons";

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackIosOutlined/>
                Home
            </div>
            <video className="video" autoPlay progress controls
                   src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>

        </div>
    )
}

export default Watch