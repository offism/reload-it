import { Link } from "react-router-dom"
import Marquee from 'react-fast-marquee'
import { Lenta, MainLenta,Icon } from "../main/main"
export function Marque(){
    return(
            <Marquee speed={100} gradient={false}>
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
            </Marquee>
    )
}