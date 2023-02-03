import React, {Component} from "react";
// import { Switch , Route} from "react-router-dom";
import Navbar from './navbar/Navbar.jsx'
import EachCourse from './eachCourse/EachCourse.jsx'

export default class Roots extends Component{
    render(){
        return(
            <>
            <Navbar/>
            {/* <Switch> */}
                {/* <Route path={'/courses/ios'} component={Navbar}/> */}
            {/* </Switch> */}
            {/* <Switch> */}
                {/* <Route path={'/courses/ios'} component={EachCourse}/> */}
            {/* </Switch> */}
            </>
        )
    }
}