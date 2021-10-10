import "./home.scss"
import Navbar from "../../components/Navbar/navbar.jsx"
import Featured from "../../components/Featured/feature";
import List from "../../components/List/list"
import {useEffect, useState} from "react";
import axios from "axios";

const Home = ({type}) => {
    let lists, setLists = useState([])
    let genre, setGenre = useState(null)
    useEffect(() => {
            const getRandomLists = async () => {
                try {
                    const response = await axios.get(`list${type ? "?type" + type : ""}&${genre ? "genre=" + genre:""}`);
                    setLists(response.data)
                } catch (err) {
                    console.log(err)
                }

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