import "./home.scss"
import Navbar from "../../components/Navbar/navbar.jsx"
import Featured from "../../components/Featured/feature";
import List from "../../components/List/list"
import {useEffect, useState} from "react";

const Home = ({type}) => {
    let lists, setLists = useState([])
    useEffect(
    const getRandomLists = async () => {
        try {

        }
        catch (err){
            console.log(err)
        }

    }
)
    return (
        <div className="home">
            <Navbar/>
            <Featured type={type}/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home