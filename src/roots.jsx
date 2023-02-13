import React, {Component} from "react";
import { Routes , Route} from "react-router-dom";
import EachCourse from './EachCourse/EachCourse.jsx'
import AboutUsMain from "./AboutUsMain/AboutUsMain.jsx";
import App from "./App.js";

export default class Roots extends Component{
    render(){
        return(
            <>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/courses/ios" element={<EachCourse/>}/>
                <Route path="/aboutus" element={<AboutUsMain/>}/>
            </Routes>
            </>
        )
    }
}