import React from 'react'
import {FooterBox,Container, Email,FooterBootTitle,FooterHead,FooterBoot,FooterBootBody, PhoneLabel,FooterHeadBody, ContactData,SocialNetworks,SocialNetwork} from './footer.js'
function Footer (){
    return (
        <FooterBox id="contact">
            <Container>
              <FooterHead>
                <PhoneLabel htmlFor={'phone-number'}>Телефон</PhoneLabel>
                <FooterHeadBody>
                    <ContactData id={'phone-number'}>+998 (90) 999 99 99</ContactData>
                    <SocialNetworks>
                        <SocialNetwork>INSTAGRAM</SocialNetwork>
                        <SocialNetwork>TELEGRAM</SocialNetwork>
                    </SocialNetworks>
                </FooterHeadBody>
                <FooterBoot>
                    <FooterBootBody>
                        <PhoneLabel htmlFor={'adress'}>Адрес</PhoneLabel>
                        <ContactData id={'adress'}>Массив Буюк Ипак Йули, 49</ContactData>
                    </FooterBootBody>
                    <FooterBootTitle>RELOAD</FooterBootTitle>
                </FooterBoot>
                <FooterBoot>
                    <FooterBootBody>
                        <PhoneLabel htmlFor={'email'}>Email</PhoneLabel>
                        <Email id={'email'}>reload@gmail.com</Email>
                    </FooterBootBody>
                    <FooterBootTitle>IT ACADEMY</FooterBootTitle>
                </FooterBoot>
              </FooterHead>
            </Container>
        </FooterBox>
    )
}

export default Footer