import React from 'react'
import {Icon, Container,CourseOrderBox,CourseOrder, CourseOrderTitle, CourseOrderBody ,CourseOrderText, CourseOrderList , CourseOrderListItem} from './order.js'
import FirstOrder from '../modals/FirstOrder.jsx'
function Order (){
    return(
        <CourseOrder>
          <Container>
            <CourseOrderBox className='PseudoBackground'></CourseOrderBox>
            <CourseOrderTitle data-aos="fade-down"
                              data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="200">ТЫ ГОТОВ СТАТЬ ЛУЧШИМ?</CourseOrderTitle>
            <CourseOrderBody>
                <CourseOrderText>Продолжай обучение и пройди в следующий этап, там ты получишь</CourseOrderText>
                <CourseOrderList>
                    <CourseOrderListItem>
                      <Icon><i className="uil uil-google-drive-alt"></i></Icon> Навыки Middle разработчика
                    </CourseOrderListItem> 
                    <CourseOrderListItem>
                      <Icon><i className="uil uil-google-drive-alt"></i></Icon> Практика на реальных проектах
                    </CourseOrderListItem>
                    <CourseOrderListItem>
                      <Icon><i className="uil uil-google-drive-alt"></i></Icon> Уроки от Senior разработчика
                    </CourseOrderListItem>
                    <CourseOrderListItem>
                      <Icon><i className="uil uil-google-drive-alt"></i></Icon> Работа для опыта в разработке
                    </CourseOrderListItem>
                    <CourseOrderListItem>
                      <Icon><i className="uil uil-google-drive-alt"></i></Icon> Сертификат Middle разработчика
                    </CourseOrderListItem>
                    <CourseOrderListItem>
                      <Icon><i className="uil uil-google-drive-alt"></i></Icon> Минимум 2 проекта на AppStore
                    </CourseOrderListItem> 
                </CourseOrderList>
            </CourseOrderBody>
            <FirstOrder btnClass={`modalBtn2`} btnText={`ЗАПИСАТЬСЯ НА КУРС`} modalTitle1={`ЗАЯВКА`}modalTitle2={`НА КУРС`} modalTitleText={`Оставьте заявку и мы свяяжемся с вами в ближайшее время`}/>
          </Container>
        </CourseOrder>
    )
}

export default Order