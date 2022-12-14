import SixBg from './../../img/five_bg.png'
import Shape1 from "./../../img/Shape1.png";
import Icon from './../../img/icon_prev-s.png'
import Iconl from './../../img/icon_left-s.png'
import dizlike from './../../img/dislike@4x.png'
import Like from './../../img/like@4x.png'
import Girl from './../../img/girl1.png'

export default function SectionSix(){
    return(
        <div className="section_six">
            <div className="container">
                <div className="six_all">
                    <h1><span>VIBE COWORKING</span> — МЕСТО СИНТЕЗА ЭСТЕТЕИКИ И БИЗНЕСА</h1>
                    <div className="six_content">
                        <div className="first_box">
                            <img src={SixBg} alt=""/>
                        </div>
                        <div className="second_box">
                            <p>Работая в бьюти-сфере 13 лет, в последние 5 стали активно следить за открывающимися коворкингами. Анализировали, фиксировали успехи, искали ошибки и в 2019 создали свое пространство.<br></br>
                            Поняли главное:<span>нужно помогать предпринимателям становиться свободными, развиваться и зарабатывать больше.</span>  Ради этой цели за кадром трудится целая команда.
                            Общайтесь с нами — обратная связь закаляет и совершенствует.
                            </p>
                            <div className="content_button">
                            <h4>ЗАБРОНИРОВАТЬ ВРЕМЯ</h4>
                            <div className="buttn_img">
                            <img src={Shape1} alt=""/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <h1>РАССКАЗЫ МАСТЕРОВ, <span>ВЫБИРАЮЩИХ СЕБЯ</span></h1>
                    <div className="six_girl-box">
                        <div className="girl_prev">
                            <div className="after">
                                <h2>до</h2>
                                <img src={dizlike} alt=""/>
                            </div>
                            <div className="item">
                                <div className="item_num">
                                    <img src={Icon} alt="" />
                                    <h1>01</h1>
                                </div>
                                <p>Работала в салоне с 8:00 до 21:00 практически <span>без выходных.</span> </p>
                            </div>
                            <div className="item">
                                <div className="item_num">
                                    <img src={Icon} alt="" />
                                    <h1>02</h1>
                                </div>
                                <p>Работала в салоне с 8:00 до 21:00 практически <span>без выходных.</span> </p>
                            </div>
                            <div className="item">
                                <div className="item_num">
                                    <img src={Icon} alt="" />
                                    <h1>03</h1>
                                </div>
                                <p>Работала в салоне с 8:00 до 21:00 практически <span>без выходных.</span> </p>
                            </div>
                        </div>
                        <div className="girl">
                            <img src={Girl} alt=""/>
                            <div className="about_girl">
                            <div className="job">Бровисть</div>
                            <div className="name">Марина</div>
                            <button>Хочу так же</button><br></br>
                            <i>Присоеденяйтесь к нам и следующими в этом списке будете Вы!</i>
                            </div>
                        </div>
                        <div className="girl_left">
                        <div className="before">
                                <img src={Like} alt=""/>
                                <h2>после</h2>
                            </div>
                        <div className="item">
                                <div className="item_num">
                                    <img src={Iconl} alt="" />
                                    <h1>01</h1>
                                </div>
                                <p>Работала в салоне с 8:00 до 21:00 практически <span>без выходных.</span> </p>
                            </div>
                            <div className="item">
                                <div className="item_num">
                                    <img src={Iconl} alt="" />
                                    <h1>02</h1>
                                </div>
                                <p>Работала в салоне с 8:00 до 21:00 практически <span>без выходных.</span> </p>
                            </div>
                            <div className="item">
                                <div className="item_num">
                                    <img src={Iconl} alt="" />
                                    <h1>03</h1>
                                </div>
                                <p>Работала в салоне с 8:00 до 21:00 практически <span>без выходных.</span> </p>
                            </div>
                        </div>
                    </div>
                    <h1><span>УСЛОВИЯ СОТРУДНИЧЕСТВА,</span> ОПЛАТА И СОСТАЛЕНИЕ ГРАФИКОВ</h1>
                    <div className="accordion">
                        <div className="accordion_item">
                            <label for='first'>В какую сумму мне обойдется аренда помещения на месяц?<div className="icon">^</div></label>
                            <input type='radio' name='accordion' id='first' />
                            <div className='content'>
                                <p>AAAAAAA bbbbbbbbbbbbbbb ccccccccccccccccccc ddddddddddddddddd bbbbbbbbbbbbbbbbbbbbb sdvervserververvbserv sbsdrtbsrb</p>
                            </div>
                        </div>
                        <div className="accordion_item">
                            <label for='second'>В какую сумму мне обойдется аренда помещения на месяц?<div className="icon">^</div></label>
                            <input type='radio' name='accordion' id='second' />
                            <div className='content'>
                                <p>AAAAAAA bbbbbbbbbbbbbbb ccccccccccccccccccc ddddddddddddddddd bbbbbbbbbbbbbbbbbbbbb sdvervserververvbserv sbsdrtbsrb</p>
                            </div>
                        </div>
                        <div className="accordion_item">
                            <label for='third'>В какую сумму мне обойдется аренда помещения на месяц?<div className="icon">^</div></label>
                            <input type='radio' name='accordion' id='third' />
                            <div className='content'>
                                <p>AAAAAAA bbbbbbbbbbbbbbb ccccccccccccccccccc ddddddddddddddddd bbbbbbbbbbbbbbbbbbbbb sdvervserververvbserv sbsdrtbsrb</p>
                            </div>
                        </div>
                        <div className="accordion_item">
                            <label for='fourth'>В какую сумму мне обойдется аренда помещения на месяц?<div className="icon">^</div></label>
                            <input type='radio' name='accordion' id='fourth' />
                            <div className='content'>
                                <p>AAAAAAA bbbbbbbbbbbbbbb ccccccccccccccccccc ddddddddddddddddd bbbbbbbbbbbbbbbbbbbbb sdvervserververvbserv sbsdrtbsrb</p>
                            </div>
                        </div>
                        
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    )
}