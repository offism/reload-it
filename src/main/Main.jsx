import React from 'react'
import {MainTitle, MainBox,MainMiniBox,MainInput,Label, Lenta, MainLenta, InputWrapper, Icon} from './main.js'

function Main (){
    return (
        <MainBox>
            <MainMiniBox>
               <MainTitle><span className='reloadSpan'>RELOAD</span><br />IT ACADEMY</MainTitle>
               <InputWrapper>
                   <MainInput id={'search-input'} placeholder={'Найти курс...'}/>
                   <Label htmlFor={'search-input'}><i className="uil uil-search"></i></Label>
               </InputWrapper>  
            </MainMiniBox>
            <Lenta>
                <MainLenta>ANDROIN-KOTLIN</MainLenta>
                <Icon>
                   <i className="uil uil-google-drive-alt"></i>
                </Icon>
                <MainLenta>IOS-SWIFTSWIFT-UI</MainLenta>
                <Icon>
                   <i className="uil uil-google-drive-alt"></i>
                </Icon>
                <MainLenta>MOBILE-DEVELOPMENT</MainLenta>
                <Icon>
                   <i className="uil uil-google-drive-alt"></i>
                </Icon>
                <MainLenta>WEB-SITES</MainLenta>
                <Icon>
                   <i className="uil uil-google-drive-alt"></i>
                </Icon>
                <MainLenta>ANDROIN-KOTLIN</MainLenta>
                <Icon>
                   <i className="uil uil-google-drive-alt"></i>
                </Icon>
                <MainLenta>IOS-SWIFTSWIFT-UI</MainLenta>
                <Icon>
                   <i className="uil uil-google-drive-alt"></i>
                </Icon>
                <MainLenta>MOBILE-DEVELOPMENT</MainLenta>
                <Icon>
                   <i className="uil uil-google-drive-alt"></i>
                </Icon>
            </Lenta>
        </MainBox>
    )
}

export default Main