import React from 'react'
import {Icon,IconX,CourseDateText,CourseDateWrapper,CourseDatewrapper,Container,CourseBox,MainCourseTitleBox, MainCourseTitle, CoursesBox,EachCourseBox,CourseTitle,CourseCount,CourseHeader,EachCourseBoxBottom ,CourseDuration,DimBox, DimFone,DimTitle,DimBtn,DimBottom,CoursesDateWrapper,CoursesDateBox1, CoursesDateBox2, CourseDateBox, CourseDateName, CourseDateTitle} from './course.js'
import Order from './Order.jsx'
function Course (){
    return (
       <CourseBox>
        <Container>
            <MainCourseTitleBox>
                <MainCourseTitle>Курсы</MainCourseTitle>
            </MainCourseTitleBox>
            <CoursesBox>
               <EachCourseBox>
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
                <EachCourseBox className="InMiddleCourse">
                    <CourseHeader> 
                       <CourseTitle>MOBILE DEVELOPMENT</CourseTitle>
                       <Icon><i className="uil uil-google-drive-alt"></i></Icon>
                    </CourseHeader>
                </EachCourseBox>
                <EachCourseBox>
                    <CourseHeader> 
                       <CourseTitle>ANDROID KOTLIN</CourseTitle>
                       <Icon><i className="uil uil-google-drive-alt"></i></Icon>
                    </CourseHeader>
                </EachCourseBox>
            </CoursesBox>
            <DimBox>
               <DimFone></DimFone>
               <DimBottom>
               <DimTitle>ПЕРВОЕ пробное занятие - БЕСПЛАТНО</DimTitle>
               <DimBtn>ЗАПИСАТЬСЯ</DimBtn>
               </DimBottom>
            </DimBox>
            <MainCourseTitleBox>
                <MainCourseTitle>Программа курса IOS РАЗРАБОТКА</MainCourseTitle>
            </MainCourseTitleBox>
            <CoursesDateWrapper>
                <CoursesDateBox1>
                    <CourseDateBox>
                        <CourseDateTitle >1 &nbsp;&nbsp;&nbsp;&nbsp;<br />МЕСЯЦ</CourseDateTitle>
                        <CourseDateName >ОСНОВЫ ЯЗЫКА SWIFT</CourseDateName>
                    </CourseDateBox>
                    <CourseDateBox>
                        <CourseDateTitle>2 &nbsp;&nbsp;&nbsp;&nbsp;<br />МЕСЯЦ</CourseDateTitle>
                        <CourseDateName>UI KIT</CourseDateName>
                    </CourseDateBox>
                    <CourseDateBox>
                        <CourseDateTitle>3 &nbsp;&nbsp;&nbsp;&nbsp;<br />МЕСЯЦ</CourseDateTitle>
                        <CourseDateName>АРХИТЕКТУРА И ХРАНЕНИЕ ДАННЫХ</CourseDateName>
                    </CourseDateBox>
                </CoursesDateBox1>
                <CoursesDateBox2>
                    <CourseDateBox>
                        <CourseDateTitle>4 &nbsp;&nbsp;&nbsp;&nbsp;<br />МЕСЯЦ</CourseDateTitle>
                        <CourseDateName>МЕНЕДЖЕОЫ ЗАВИСИМОСТИ И АНИМАЦИИ</CourseDateName>
                    </CourseDateBox>
                    <CourseDateBox>
                        <CourseDateTitle>5 &nbsp;&nbsp;&nbsp;&nbsp;<br />МЕСЯЦ</CourseDateTitle>
                        <CourseDateName>API И GIT</CourseDateName>
                    </CourseDateBox>
                    <CourseDateBox>
                        <CourseDateWrapper>
                        <CourseDatewrapper>
                            <CourseDateTitle>6 &nbsp;&nbsp;&nbsp;&nbsp;<br />МЕСЯЦ</CourseDateTitle>
                            <CourseDateName>АНАЛИЗ И ПРАКТТИКА</CourseDateName>
                        </CourseDatewrapper>
                        <CourseDateText>2 тестовых приложений. Мониторинг и анализ всех пройденных тем.Подготовка к высшему уровню обучения.</CourseDateText>
                        </CourseDateWrapper>
                    </CourseDateBox>
                </CoursesDateBox2>
            </CoursesDateWrapper>
            <Order/>
        </Container>
       </CourseBox>
        )
}

export default Course