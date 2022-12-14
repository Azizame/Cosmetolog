import Phone from './../img/phneimg.png'
import Close from './../img/close-c.png'

import { Link } from 'react-router-dom'
import Form from './Form'
export default function Contact(){
    return(
        
        <div className="contact-page">
        <div className="conatainer">
            <div className="contact">
                <div className="back">
                   <Link to="/"> <img src={Close} alt="" /></Link>
                </div>
                <h1>УКАЖИТЕ ВАШИ ДАННЫЕ И МЫ СВЯЖЕМСЯ С ВАМИ В <span>ТЕЧЕНИИ 15 МИНУТ</span></h1>
                <div className="contact_div">
                    <div className="contact_box">
                        <h2>Ваши контакты</h2>
                        <p>Оставьте ваш телефон и мы  свяжемся с вами</p>
                        
                            <Form />
                        <div className="check">
                            <input type="checkbox" />
                            <p>Я согласна на обработку моих персональных данных в соответствии с условиями</p>
                        </div>

                    </div>
                    <div className="img_phone">
                        <img src={Phone} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}