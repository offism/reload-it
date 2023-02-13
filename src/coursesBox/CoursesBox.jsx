import React from 'react'
import {Container,Icon,PseudoText,PseudoWrapper,IconX,CoursesBox,EachCourseBox,EachCourseBoxPseudo,CourseTitle,CourseCount,CourseHeader,EachCourseBoxBottom ,CourseDuration} from './coursesBox.js'
import { Link } from 'react-router-dom'

function Dim (){
    return(
        <CoursesBox>
            <Container>
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
                <EachCourseBoxPseudo className="withPseudoMiddle">
                    <PseudoWrapper>
                       <PseudoText>СКОРО</PseudoText>
                    </PseudoWrapper>
                    <CourseHeader> 
                       <CourseTitle>MOBILE DEVELOPMENT</CourseTitle>
                       <Icon><i className="uil uil-google-drive-alt"></i></Icon>
                    </CourseHeader>
                </EachCourseBoxPseudo>
                <EachCourseBoxPseudo>
                    <PseudoWrapper>
                       <PseudoText>СКОРО</PseudoText>
                    </PseudoWrapper>
                    <CourseHeader> 
                       <CourseTitle>ANDROID KOTLIN</CourseTitle>
                       <Icon><i className="uil uil-google-drive-alt"></i></Icon>
                    </CourseHeader>
                </EachCourseBoxPseudo>
             </Container>
            </CoursesBox>
    )
}

export default Dim