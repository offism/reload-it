import React, {Component} from "react";
import { Routes , Route} from "react-router-dom";
import EachCourse from './eachCourse/EachCourse.jsx'
import App from "./App.js";

export default class Roots extends Component{
    render(){
        return(
            <>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/courses/ios" element={<EachCourse/>}/>
            </Routes>
            </>
        )
    }
}