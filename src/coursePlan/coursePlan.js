import Styled from 'styled-components'

export const CoursePlanBox = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
color: #fff;
`
export const Container = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
max-width: 880px;
`
export const MainCourseTitleBox = Styled.div`
display: flex;
width: 100%;
align-items: flex-start;
`
export const MainCourseTitle = Styled.h2`
margin: 30px 0;
font-family: 'Play','League Spartan', 'Roboto';
@media(max-width:768px){
    margin: 25px 0;
    font-size:30px;
    }
@media(max-width:576px){
    margin: 22px 0;
    font-size:21px;
    }
@media(max-width:398px){
    margin: 15px 0;
    font-size:18px;
    }
`

export const CoursesDateWrapper = Styled.div`
display: flex;
align-items:center;
flex-direction:column;
width:100%;
`
export const CourseDateBox1 = Styled.div`
position: relative;
display: flex;
width: 80%;
min-height:150px;
margin-right: auto;
flex-direction: row;
border: 2px solid #fff;
background: #EEF0F4;
padding: 20px 30px;
border-radius: 10px;
text-align:left;
*{
    color:#000 !important;
}
@media(max-width:768px){
    width: 100%;
    justify-content: space-between;
    min-height:150px;
    padding: 30px;
}
@media(max-width:576px){
    width: 100%;
    justify-content: space-between;
    min-height:130px;
    padding: 20px;
}
@media(max-width:398px){
    min-height:fit-content;
    width: 100%;
    justify-content: space-between;
    min-height:125px;
    padding: 20px;
}
`
export const CourseDateBox2 = Styled.div`
position: relative;
display: flex;
min-height:150px;
width: 80%;
margin-left: auto;
margin-top: 110px;
text-align:left;
margin-bottom: 110px;
border: 5px solid #fff;
border-radius: 10px;
padding: 20px 30px;
flex-direction:row;
@media(max-width:768px){
    padding: 30px;
    width: 100%;
    justify-content: space-between;
    min-height:150px;
}
@media(max-width:576px){
    padding: 20px;
    min-height:fit-content;
    width: 100%;
    justify-content: space-between;
    min-height:130px;
}
@media(max-width:398px){
    padding: 20px;
    width: 100%;
    min-height:125px;
}
`
export const CourseDateTitle = Styled.h2`
color:#fff;
font-size: 35px;
font-family: 'Play','League Spartan', 'Roboto';
margin-right: 20px;
margin-bottom: 0px;
@media(max-width:569px){
    margin-right: 10px;
    font-size:30px;
    }
@media(max-width:398px){
    font-size:22px;
    }
    `
    export const CourseDateName = Styled.p`
color: #fff;
font-family: 'League Spartan','Roboto','Play';
font-size: 20px;
width:45%;
font-weight: 300;
@media(max-width:576px){
    font-size:17px;
    width:100%;
    }
@media(max-width:398px){
    font-size:13px;
    }
`
export const CourseDateWrapper = Styled.div`
flex-direction:row;
display:flex;
`
export const CourseDatewrapper = Styled.div`
width:25%;
@media(max-width:768px){
    width:100%;
}
`
export const CourseDateText = Styled.p`
color:#fff;
font-family: 'Play','League Spartan', 'Roboto';
width:50%;
font-size: 22px;
@media(max-width:768px){
    width: 100%;
    font-size: 22px;
}
@media(max-width:569px){
    width: 100%;
    font-size: 18px;
}
@media(max-width:398px){
    font-size: 14px;
}
`
export const DirectArrow = Styled.img`
position: absolute;
color:#fff !important;
height: 100%;
left: 50%;
display: none;
transform: rotate(180deg);
@media(max-width:768px){
    display: flex;
    width: 30%;
    left: 38%;
    height: 70%;
    top: 110%;
  }
@media(max-width:576px){
    display: flex;
    width: 30%;
    left: 38%;
    height: 70%;
    top: 110%;
  }
@media(max-width:398px){
    display: flex;
    width: 30%;
    left: 38%;
    height: 70%;
    top: 110%;
  }
`
export const ABSimgRight = Styled.img`
position: absolute;
top:100%;
right: -18%;
color:#fff;
height: 70%;
width: 15%;
@media(max-width:768px){
  display: none;
}
`
export const ABSimgLeft = Styled.img`
top:75%;
left: -23%;
position: absolute;
color:#fff;
height: 100%;
width: 20%;
@media(max-width:768px){
    display: none;
  }
`