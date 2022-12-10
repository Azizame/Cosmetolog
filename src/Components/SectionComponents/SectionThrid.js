import Phone from './../../img/phone.png'
import Shaped from './../../img/Shaped.png'
import Girl from './../../img/girl.png';
import Bitmap from './../../img/Bitmap.png'
import Girl3 from './../../img/girl3.png'
import Girl4 from './../../img/girl4.png'
 
export default function SectionThrid(){
    return(
        <div className="section_third">
            <div className="container">
                <div className="third_first-block">
                    <div className="first_block-content">
                        <h1><span>КАРТА ОТКРЫТИЙ:</span> ПЛАН СЕТИ НА БЛИЖАЙШИЕ 5 ЛЕТ</h1>
                        <div className="content_box">
                            <div className="box_text">
                                <p>Сейчас функционируют 2 пространства в центре Москвы — туда удобнее добираться большинству мастеров и клиентов. Собственная парковка для автомобилей, 3 минуты от метро. <br/> <br/>   Вроде бы, это уже успех, но собираемся расширяться и открывать площадки еще в 10 районах. Чтобы вы работали рядом с домом и с наименьшими тратами на дорогу.Пока можно протестировать сервис в существующих филиалах и оценить выгоды.</p>
                                <button>ПОДПИСАТЬСЯ НА ОБНОВЛЕНИЯ</button>
                            </div>
                            <div className="box_cart">
                                <img src={Phone} alt=""/>
                                <div className="cart">

                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="third_second-block">
                    <div className="plan_icon">
                        <h1>ПЛАНИРУЙТЕ ЖИЗНЬ И <span>РАБОТАЙЬЕ В УДОВОЛЬСТВИЕ</span></h1>
                        <div className="icon_about">
                            <div className="icon">
                                <img src={Shaped} alt=""/>
                                <p>Сбережете деньги — платите за аренду только в рабочие часы.</p>
                            </div>
                            <div className="icon">
                                <img src={Shaped} alt=""/>
                                <p>Сбережете деньги — платите за аренду только в рабочие часы.</p>
                            </div>
                            <div className="icon">
                                <img src={Shaped} alt=""/>
                                <p>Сбережете деньги — платите за аренду только в рабочие часы.</p>
                            </div>
                            <div className="icon">
                                <img src={Shaped} alt=""/>
                                <p>Сбережете деньги — платите за аренду только в рабочие часы.</p>
                            </div>
                            <div className="icon">
                                <img src={Shaped} alt=""/>
                                <p>Сбережете деньги — платите за аренду только в рабочие часы.</p>
                            </div>
                        </div>
                    </div>
                    <div className="third_girls">
                    <h1><span>ВООДУШЕВЛЯЙТЕ</span> КЛИЕНТОВ АТМОСФЕРОЙ</h1>
                    <p>Есть такая наука — о впечатлениях. Основываясь на ней, создали наши пространства. Каждый уголок <span>продуман с большой любовью</span> и служит для того…</p>
                    <div className="girls_box">
                        <div className="first_girl">
                            <img src={Girl} alt=""/>
                            <div className="girl_content">
                                <p>Были в восторге от атмосферы локаций</p>
                            </div>
                        </div>
                        <div className="second_girl">
                            <div className="girl_content">
                                <p>Расслаблялись в зоне ожидания с чашкой свежесваренного кофе</p>
                            </div>
                            <img src={Bitmap} alt=""/>
                        </div>
                        <div className="third_girl">
                            <img src={Girl3} alt=""/>
                            <div className="girl_content">
                                <p>Hативно рекламировали вас в своих публикациях и сторис</p>
                            </div>
                        </div>
                        <div className="fourth_girl">
                            <div className="girl_content">
                                <p>Оставляли отзывы на внешних ресурсах</p>
                            </div>
                            <img src={Girl4} alt=""/>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}