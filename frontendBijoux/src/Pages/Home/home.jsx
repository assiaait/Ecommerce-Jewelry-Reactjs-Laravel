import React, { Component } from "react";
import Slide from "./Slide";
import Categories from "../Shop/Categories.jsx";
import Offres from "../Shop/Offres.jsx";
import PartShop from "../Shop/PartShop.jsx";
import CardOffre from "../Shop/CardOffre.jsx";
import AboutUs from "../AboutUs/AboutUs.jsx";
import NavBar from "./NavBar.jsx";
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                <NavBar/>
                </header>
                <main>
                    <Slide />
                    <Categories />
                    <Offres />
                    <PartShop />
                    <AboutUs />
                    <CardOffre />
                </main>
            </React.Fragment>
        );
    }
}
export default Home;
