import Shape from "./../../img/Shape.png"
import Shape1 from "./../../img/Shape1.png";
import Girl from "./../../img/five_girl.png"

export default function SectionFifth(){
    return(
        <div className="section_fifth">
            <div className="container">
                <div className="five_all">
                    <h1><span>УПРОСТИТЕ</span> СЕБЕ ЗАДАЧУ</h1>
                    <div className="five_box">
                        <h2>Бронируйте помещение</h2>
                        <h3>Постоянный поиск помещения можно снять со своих плеч</h3>
                        <div className="content_input">
                            <div className="input_img">
                                <img src={Shape} alt="s"/>
                            </div>
                            <input type="text" placeholder="+7 (___) ___ - __ -__"/> 
                        </div>
                        
                        <div className="content_button">
                            <h4>ЗАБРОНИРОВАТЬ ВРЕМЯ</h4>
                            <div className="buttn_img">
                            <img src={Shape1} alt=""/>
                            </div>
                        </div>
                        
                        <p><input type="checkbox"/>Я согласна на обработку моих персональных данных в соответствии с условиями</p>
                        <div className="girl_img">
                            <img src={Girl} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}