import React from 'react'
import {Icon, Container,CourseOrderBox,CourseOrder, CourseOrderTitle, CourseOrderBody ,CourseOrderText, CourseOrderList , CourseOrderListItem} from './order.js'
import FirstOrder from '../modals/FirstOrder.jsx'
function Order (){
    return(
        <CourseOrder>
          <Container>
            <CourseOrderBox></CourseOrderBox>
            <CourseOrderTitle>ТЫ ГОТОВ СТАТЬ ЛУЧШИМ?</CourseOrderTitle>
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
            <FirstOrder btnClass={`modalBtn`} btnText={`ЗАПИСАТЬСЯ НА КУРС`}/>
          </Container>
        </CourseOrder>
    )
}

export default Order