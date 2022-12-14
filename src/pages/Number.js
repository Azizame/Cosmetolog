import { Link } from 'react-router-dom'
import Close from './../img/close-c.png'
import Icon from './../img/numer-png-icon.png'
import Flower from './../img/flower-numer-page.png'
export default function Number(){
    return(
        <div className="number-page">
            <div className="container">
                <div className="number">
                <div className="back">
                   <Link to="/"> <img src={Close} alt="" /></Link>
                </div>
                    <h1><span>СПАСИБО,</span> ВАША ЗАЯВКА ОТПРАВЛЕНА</h1>
                    <div className='number_div'>
                        <h2>Долго ждать? Наберите нас прямо сейчас: </h2>
                        <p>+7 (654) 876 09 09</p>
                        <h3>Или кликнете, чтобы перейти в ватсап чат с нами</h3>
                        <img className='img_phone' src={Icon} alt=''/>
                        <img className='flower_img' src={Flower} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}