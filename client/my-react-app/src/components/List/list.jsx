import "./list.scss"
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons";
import ListItem from "../ListItem/listItem";
import {useRef, useState} from "react";

const List = () => {
    let [slideNumber, setSlideNumber] = useState(0)
    let [isMoved, setisMoved] = useState(false)
    const listRef = useRef()
    let distance = listRef.current?.getBoundingClientRect?.().x - 50
    const handleClick = (direction) => {
        setisMoved(isMoved = true)
        if (direction === "left" && slideNumber >= 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${235 + distance}px )`
        }
        if (direction === "right" && slideNumber <= 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-235 + distance}px )`
        }

    }
    return (
        <div className="list">
            <span className="listTitle">
                Continue to Watch
            </span>
            <div className="Wrapper">
                <ArrowBackIosOutlined className="slider left" onClick={() => handleClick("left")}
                                      style={{display: !isMoved && "none"}}/>
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                    <ListItem index={10}/>
                </div>
                <ArrowForwardIosOutlined className="slider right" onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}

export default List