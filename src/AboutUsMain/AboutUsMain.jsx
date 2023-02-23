import React, { useLayoutEffect } from 'react'
import {Container, AUmain,AUmainHeader,AUmainBodyHR,AUmainSlider,AUmainSliderImg,AUmainSliderText ,AUmainSliderTitle,AUmainSliderTextWrapper,AUmainBodyText1,AUmainBodyText2,AUmainBody,AUmainHeaderBox,AUmainHeaderTitle,AUmainHeaderMarque1,AUmainHeaderMarque2} from './aboutusmain.js'
import { Marque } from '../modules/Marquee.jsx'
import {SocialNetwork,SocialNetworks,ContactData,Email,PhoneLabel} from '../Footer/footer'
import {EachCourseBodyFooter,EachCourseBodyFooterHead} from './../EachCourse/eachCourse.js'
import Navbar from '../navbar/Navbar.jsx'
import BackOfAU from './../assets/reload4.gif'
import BoyImg from './../assets/boy1.png'
import { Link } from 'react-router-dom'

function AboutUsMain (){
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
        <Navbar/>
        <AUmain>
        <Link className='TDnone1' to={'/'}><i className="uil uil-arrow-left"></i></Link>
            <Container>
                <AUmainHeader>
                    <AUmainHeaderMarque1>
                        <Marque/>
                    </AUmainHeaderMarque1>
                    <AUmainHeaderBox background={BackOfAU}>
                        <AUmainHeaderTitle><span className='reloadSpan'>RELOAD</span> <br />IT ACADEMY</AUmainHeaderTitle>  
                    </AUmainHeaderBox>
                    <AUmainHeaderMarque2>
                        <Marque/>
                    </AUmainHeaderMarque2>
                </AUmainHeader>
                <AUmainBody>
                <AUmainBodyText1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ex repudiandae assumenda? Id, porro! Rerum fuga recusandae quo ullam ad.Reiciendis earum aliquam commodi repellat culpa facilis sunt ducimus. Doloremque iusto voluptas, quidem, temporibus dolor saepe iure sed aut unde earum nemo.</AUmainBodyText1>
                <AUmainBodyHR/>
                <AUmainBodyText2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facilis aspernatur ex delectus repellat quibusdam illum blanditiis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consequatur. A labore qui beatae eos doloribus quisquam corrupti aliquam obcaecati!Similique quaerat quod illum consequuntur dolores necessitatibus saepe voluptates. Vero impedit voluptatum delectus?</AUmainBodyText2>
                </AUmainBody>
                <AUmainSlider>
                  <swiper-container className="mySwiper" space-between="30" slides-per-view="auto" pagination="true" pagination-clickable="true">
                    <swiper-slide>
                        <AUmainSliderImg src={BoyImg} />
                        <AUmainSliderTextWrapper>
                            <AUmainSliderTitle>Преподаватель</AUmainSliderTitle>
                            <AUmainSliderText>Сертифицированный инструктор по Linux, информационной безопасности, эксперт по администрированию сетей и разработке программного обеспечения</AUmainSliderText>
                        </AUmainSliderTextWrapper>
                    </swiper-slide>
                    <swiper-slide>
                        <AUmainSliderImg src={BoyImg}/>
                        <AUmainSliderTextWrapper>
                            <AUmainSliderTitle>Преподаватель</AUmainSliderTitle>
                            <AUmainSliderText>Сертифицированный инструктор по Linux, информационной безопасности, эксперт по администрированию сетей и разработке программного обеспечения</AUmainSliderText>
                        </AUmainSliderTextWrapper>
                    </swiper-slide>
                  </swiper-container>
                </AUmainSlider>
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
            </Container>
        </AUmain>
        </>
    )
}

export default AboutUsMain