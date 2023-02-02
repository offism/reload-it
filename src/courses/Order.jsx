import React from 'react'
import {Icon, CourseOrderBox,CourseOrder, CourseOrderTitle, CourseOrderBody, CourseOrderBtn ,CourseOrderText, CourseOrderList , CourseOrderListItem} from './order.js'
import FirstOrder from '../modals/FirstOrder.jsx'
function Order (){
    return(
        <CourseOrder>
          <FirstOrder/>
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
            <CourseOrderBtn>ЗАПИСАТЬСЯ НА КУРС</CourseOrderBtn>
        </CourseOrder>
    )
}

export default Order