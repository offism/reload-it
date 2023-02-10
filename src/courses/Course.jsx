import React from 'react'
import {Icon,PseudoText,PseudoWrapper,IconX,Container,CourseBox,MainCourseTitleBox, MainCourseTitle, CoursesBox,EachCourseBox,CourseTitle,CourseCount,CourseHeader,EachCourseBoxBottom ,CourseDuration,DimBox, DimFone,DimTitle,DimBottom} from './course.js'
import Order from './Order.jsx'
import AboutUs from './../aboutUs/AboutUs.jsx'
import FirstOrder from './../modals/FirstOrder.jsx'
import Gif from './../assets/glitch2.gif'
import { Link } from 'react-router-dom'
function Course (){
    return (
       <CourseBox id="course">
        <Container>
            <MainCourseTitleBox>
                <MainCourseTitle>Курсы</MainCourseTitle>
            </MainCourseTitleBox>
            <CoursesBox>
               <Link className='TDnone' to={'/courses/ios'}>
               <EachCourseBox className='firstCourse'>
                    <CourseHeader> 
                      <CourseTitle>IOS РАЗРАБОТКА</CourseTitle>
                      <Icon><i className="uil uil-google-drive-alt"></i></Icon>
                    </CourseHeader>
                    <CourseCount>3.000.000 сум</CourseCount>
                        <EachCourseBoxBottom>
                           <CourseDuration>6 месяцев</CourseDuration>
                           <IconX><i className="uil uil-arrow-right"></i></IconX>
                        </EachCourseBoxBottom>
                </EachCourseBox>
                </Link>
                <EachCourseBox className="InMiddleCourse withPseudo">
                    <PseudoWrapper>
                       <PseudoText>СКОРО</PseudoText>
                    </PseudoWrapper>
                    <CourseHeader> 
                       <CourseTitle>MOBILE DEVELOPMENT</CourseTitle>
                       <Icon><i className="uil uil-google-drive-alt"></i></Icon>
                    </CourseHeader>
                </EachCourseBox>
                <EachCourseBox className='withPseudo'>
                    <PseudoWrapper>
                       <PseudoText>СКОРО</PseudoText>
                    </PseudoWrapper>
                    <CourseHeader> 
                       <CourseTitle>ANDROID KOTLIN</CourseTitle>
                       <Icon><i className="uil uil-google-drive-alt"></i></Icon>
                    </CourseHeader>
                </EachCourseBox>
            </CoursesBox>
            <DimBox>
               <DimFone back={Gif}></DimFone>
               <DimBottom>
               <DimTitle>ПЕРВОЕ пробное занятие - БЕСПЛАТНО</DimTitle>
               <FirstOrder btnClass={`modalBtn1`} btnText={`ЗАПИСАТЬСЯ`} modalTitle1={`Заявка`}modalTitle2={`на беспалатный урок`} modalTitleText={`Оставьте заявку и мы свяяжемся с вами в ближайшее время`}/>
               </DimBottom>
            </DimBox>
            <AboutUs/>
            <Order/>
        </Container>
       </CourseBox>
        )
}

export default Course