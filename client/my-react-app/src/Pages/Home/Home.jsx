import "./home.scss"
import Navbar from "../../components/Navbar/navbar.jsx"
import Featured from "../../components/Featured/feature";
import List from "../../components/List/list"
const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured  type="movie"/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home