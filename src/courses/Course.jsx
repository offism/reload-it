import React from 'react'
import {Container,CourseBox,MainCourseTitleBox, MainCourseTitle } from './course.js'
import Order from './../order/Order.jsx'
import AboutUs from './../aboutUs/AboutUs.jsx'
import Dim from '../dimGifPart/Dim.jsx'
import  CoursesBox  from '../coursesBox/CoursesBox.jsx'
function Course (){
    return (
       <CourseBox id="course">
        <Container>
            <MainCourseTitleBox>
                <MainCourseTitle>Курсы</MainCourseTitle>
            </MainCourseTitleBox>
        </Container>
            <CoursesBox/>
            <Dim/>
            <AboutUs/>
            <Order/>
       </CourseBox>
        )
}

export default Course