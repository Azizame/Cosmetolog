import Shape from "./../../img/Shape.png"
import Shape1 from "./../../img/Shape1.png";
import Combinad from './../../img/Combined.png';

export default function SectionFirst(){
    return(
        <div className="first">
        <div className="sectionFirst">
            <div className="text_content">
                <h1>БЬЮТИ КОВОРКИНГ ДЛЯ <span>ПРИКЛАДНЫХ ЭСТЕТОВ</span> 4 СФЕР</h1>
                <p>Занимайтесь любимым делом, зарабатывая до <span>1 000 000 руб./год, </span>арендуя локации в одной из 2 точек сети Vibe Coworking</p>
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
            </div>
            <div className="sectionTabs">
                <span>лэшмейкер</span>
                <span>бровист</span>
                <span>массажист</span>
                <span>косметолог</span>
            </div>
        </div>
        <div className="sectionNumber">
            <div className="number_box">
                <div className="box_img">
                    <img src={Combinad} alt=""/>
                </div>
                <h1>01</h1>
                <p>Регулируемые кушетки и стулья</p>
            </div>
            <div className="number_box">
                <div className="box_img">
                    <img src={Combinad} alt=""/>
                </div>
                <h1>02</h1>
                <p>Регулируемые кушетки и стулья</p>
            </div>
            <div className="number_box">
                <div className="box_img">
                    <img src={Combinad} alt=""/>
                </div>
                <h1>03</h1>
                <p>Регулируемые кушетки и стулья</p>
            </div>
            <div className="number_box">
                <div className="box_img">
                    <img src={Combinad} alt=""/>
                </div>
                <h1>04</h1>
                <p>Регулируемые кушетки и стулья</p>
            </div>
        </div>
        
        </div>
    )
}