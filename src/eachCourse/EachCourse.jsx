import React, { useLayoutEffect }  from 'react'
import { Link } from 'react-router-dom'
import Navbar from './../navbar/Navbar.jsx'
import {EachCourseBox,Container,Icon,ChevronLeftBtn,EachCourseHeader,EachCourseMainTitle,EachCourseMainText,EachCourseMainBtn,EachCourseBody,EachCourseBodyHead,EachCourseBodyHeadItem,EachCourseBodyBoot,EachCourseBodyBootTitle,EachCourseBodyBootTextItem, EachCourseBodyFooter,EachCourseBodyFooterHead} from './eachCourse.js'
import {SocialNetwork,SocialNetworks,ContactData,Email,PhoneLabel} from './../Footer/footer'
function Course (){
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
        <Navbar/>
       <EachCourseBox>
        <Container>
            <EachCourseHeader>
            <Link className='TDnone' to={'/'}>
                <ChevronLeftBtn><i className="uil uil-arrow-left"></i></ChevronLeftBtn>
            </Link>
                <EachCourseMainTitle><span className='modalSpan'>IOS</span> РАЗРАБОТКА</EachCourseMainTitle>
                <EachCourseMainText>Разработка iOS — это процесс создания приложений для мобильной операционной системы Apple. Она включает в себя проектирование, кодирование, тестирование и развертывание приложений iOS на iPad и iPhone.</EachCourseMainText>
                <EachCourseMainBtn>ЗАПИСАТЬСЯ</EachCourseMainBtn>
            </EachCourseHeader>
            <EachCourseBody>
                <EachCourseBodyHead>
                   <EachCourseBodyHeadItem className='leftItem'>6 МЕСЯЦЕВ</EachCourseBodyHeadItem>
                   <EachCourseBodyHeadItem>3.000.000 СУМ</EachCourseBodyHeadItem>
                   <EachCourseBodyHeadItem className='rightItem'>3 РАЗА В НЕДЕЛЮ</EachCourseBodyHeadItem>
                </EachCourseBodyHead>
                <EachCourseBodyBoot>
                    <EachCourseBodyBootTitle>ЧЕМУ ВЫ НАУЧИТЕСЬ НА КУРСЕ?</EachCourseBodyBootTitle>
                    <EachCourseBodyBootTextItem><Icon><i className="uil uil-google-drive-alt"></i></Icon> Программировать на SWIFT</EachCourseBodyBootTextItem>
                    <EachCourseBodyBootTextItem><Icon><i className="uil uil-google-drive-alt"></i></Icon> Создавать мобильные приложения с нуля для Apple</EachCourseBodyBootTextItem>
                    <EachCourseBodyBootTextItem><Icon><i className="uil uil-google-drive-alt"></i></Icon> Верстать графические интерфейсы</EachCourseBodyBootTextItem>
                    <EachCourseBodyBootTextItem><Icon><i className="uil uil-google-drive-alt"></i></Icon> Загружать свои проекты в App Store</EachCourseBodyBootTextItem>
                </EachCourseBodyBoot>
                <EachCourseBodyFooter>
                    <EachCourseBodyFooterHead>
                        <PhoneLabel className='ECLabel'>
                        Телефон
                            <ContactData className='CDText'>+998 (90) 999 99 99</ContactData>
                        </PhoneLabel>
                        <PhoneLabel className='ECLabel'>
                        Адрес
                            <ContactData className='CDText'>Массив Буюк Ипак Йули, 49</ContactData>
                        </PhoneLabel>
                        <PhoneLabel className='ECLabel'>
                        Email
                            <Email>reload@gmail.com</Email>
                        </PhoneLabel>
                    </EachCourseBodyFooterHead>
                    <SocialNetworks className='SNleft'>
                        <SocialNetwork className='SNstyle'>INSTAGRAM</SocialNetwork>
                        <SocialNetwork className='SNstyle'>TELEGRAM</SocialNetwork>
                    </SocialNetworks>
                </EachCourseBodyFooter>
            </EachCourseBody>
        </Container>
       </EachCourseBox>
        </>
        )
}

export default Course