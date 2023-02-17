import React from 'react'
import {ABSimgRight,ABSimgLeft,CoursePlanBox,DirectArrow,CourseDateText,CourseDateWrapper,CourseDatewrapper,MainCourseTitleBox, MainCourseTitle,CoursesDateWrapper, CourseDateBox1,CourseDateBox2, CourseDateName, CourseDateTitle} from './coursePlan.js'
import leftArrow from './../assets/Arrow2.png'
import rightArrow from './../assets/Arrow1.png'
import longArrow from './../assets/up-arrow.png'
function CoursePlan (){
    return (
       <CoursePlanBox>
            <MainCourseTitleBox>
                <MainCourseTitle>Программа курса IOS РАЗРАБОТКА</MainCourseTitle>
            </MainCourseTitleBox>
            <CoursesDateWrapper>
                    <CourseDateBox1>
                        <CourseDateTitle >1 &nbsp;&nbsp;&nbsp;&nbsp;<br />МЕСЯЦ</CourseDateTitle>
                        <CourseDateName >ОСНОВЫ ЯЗЫКА SWIFT</CourseDateName>
                        <ABSimgRight src={rightArrow}/>
                        <DirectArrow src={longArrow}/>
                    </CourseDateBox1>
                    <CourseDateBox2>
                        <CourseDateTitle>2 &nbsp;&nbsp;&nbsp;&nbsp;<br />МЕСЯЦ</CourseDateTitle>
                        <CourseDateName>UI KIT</CourseDateName>
                        <ABSimgLeft src={leftArrow}/>
                        <DirectArrow src={longArrow}/>
                    </CourseDateBox2>
                    <CourseDateBox1>
                        <CourseDateTitle>3 &nbsp;&nbsp;&nbsp;&nbsp;<br />МЕСЯЦ</CourseDateTitle>
                        <CourseDateName>АРХИТЕКТУРА И ХРАНЕНИЕ ДАННЫХ</CourseDateName>
                        <ABSimgRight src={rightArrow}/>
                        <DirectArrow src={longArrow}/>
                    </CourseDateBox1>
                    <CourseDateBox2>
                        <CourseDateTitle>4 &nbsp;&nbsp;&nbsp;&nbsp;<br />МЕСЯЦ</CourseDateTitle>
                        <CourseDateName>МЕНЕДЖЕОЫ ЗАВИСИМОСТИ И АНИМАЦИИ</CourseDateName>
                        <ABSimgLeft src={leftArrow}/>
                        <DirectArrow src={longArrow}/>
                    </CourseDateBox2>
                    <CourseDateBox1>
                        <CourseDateTitle>5 &nbsp;&nbsp;&nbsp;&nbsp;<br />МЕСЯЦ</CourseDateTitle>
                        <CourseDateName>API И GIT</CourseDateName>
                        <ABSimgRight src={rightArrow}/>
                        <DirectArrow src={longArrow}/>
                    </CourseDateBox1>
                    <CourseDateBox2 className='lastTextBox'>
                        <CourseDateWrapper>
                        <CourseDatewrapper>
                            <CourseDateTitle>6 &nbsp;&nbsp;&nbsp;&nbsp;<br />МЕСЯЦ</CourseDateTitle>
                            <CourseDateName>АНАЛИЗ И ПРАКТТИКА</CourseDateName>
                        </CourseDatewrapper>
                        <CourseDateText>2 тестовых приложений. Мониторинг и анализ всех пройденных тем.Подготовка к высшему уровню обучения.</CourseDateText>
                        </CourseDateWrapper>
                    </CourseDateBox2>
            </CoursesDateWrapper>
           
      
       </CoursePlanBox>
       
        )
}

export default CoursePlan