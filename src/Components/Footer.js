import logo from './../img/footer_logo.png'

import va from './../img/va.png'
import Insta from './../img/in.png'

export default function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="footer_content">
                    <div className="logo_footer">
                    <img src={logo} alt="" />
                    <div className="contact">
                        <img src={Insta} alt=""/>
                        <img src={va} alt=""/>
                        <h2>+998-99-000-00-12<br></br><span>Звонок бесплатный</span></h2>
                        
                    </div>
                    </div>
                    <div className="first_ul">
                        <ul>
                            <li>О НАС</li>
                            <li>ЦЕНЫ</li>
                            <li>ЗАБРОНИРОВАТЬ</li>
                            <li>КОНТАКТЫ</li>
                        </ul>
                    </div>
                    <div className="second_ul">
                        <ul>
                            <li>СТАТЬИ</li>
                            <li>ФРАНШИЗА</li>
                            <li>ВАКАНСИИ</li>
                            <li>ПРАВОВАЯ ИНФОРМАЦИЯ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}