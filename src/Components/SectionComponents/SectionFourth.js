import Im from '../../img/im.png'
import Im2 from '../../img/im2.png'
import Im3 from '../../img/im3.png'
import Im4 from '../../img/im4.png'

export default function SectionFourth(){
    return(
        <div className="section_fourth">
            <div className="container">
                <div className="fourth_all">
                <h1><span>УЗНАЙТЕ СЕБЯ</span> В ОДНОМ ИЗ 4 ПОРТРЕТОВ</h1>
                <p>Страх мешает проявиться многим специалистам. Важно понимать, что моменты метаний и тревоги — всего лишь точки роста. Поэтому <span>обратите внимание на коворкинг, если вы:</span></p>
                <div className="fourth_box">
                    <div className="box_item">
                        <img src={Im} alt=""/>
                        <h4>Косметолог</h4>
                        <h5>Дарящий людям восторг от нового отражения в зеркале. </h5>
                        <button>ВЫБРАТЬ ЛОКАЦИЮ</button>
                    </div>
                    <div className="box_item">
                        <img src={Im2} alt=""/>
                        <h4>Борвист</h4>
                        <h5>Дарящий людям восторг от нового отражения в зеркале. </h5>
                        <button>ВЫБРАТЬ ЛОКАЦИЮ</button>
                    </div>
                    <div className="box_item">
                        <img src={Im3} alt=""/>
                        <h4>Лэшмейкер</h4>
                        <h5>Дарящий людям восторг от нового отражения в зеркале. </h5>
                        <button>ВЫБРАТЬ ЛОКАЦИЮ</button>
                    </div>
                    <div className="box_item">
                        <img src={Im4} alt=""/>
                        <h4>Массажист</h4>
                        <h5>Дарящий людям восторг от нового отражения в зеркале. </h5>
                        <button>ВЫБРАТЬ ЛОКАЦИЮ</button>
                    </div>
                </div>
                <h1><span>МАТЕМАТИКА ВЫГОД:</span> КОВОРКИНГ В ЦИФРАХ</h1>
                <p>Когда одолевают сомнения, на помощь приходят расчеты. Посмотрите, сколько вы заработаете самостоятельно и сколько потеряете в найме при условной<span>выручке 200 тыс./мес. на примере Маши и Даши:</span> </p>
                <div className="fourth_girls">
                    <div className="girl_prev">
                        <div className="girl_prev-box">
                            <p>Маша работает на собственника и отдает ему 50% своей выручки </p>
                            
                            <div className="about_prev">
                                <div className="a">зарпалта Маши</div>
                                <h2><span>до</span>100.000</h2>
                                <i>руб./мес.</i>
                            </div>
                        </div>
                    </div>
                    <div className="girl_left">
                        <div className="girl_left-box">
                        <p>Даша арендует рабочее место в нашем коворкинге и платит всего до 40тыс./мес. </p>

                            <div className="about_left">
                                <div className="a">зарпалта Даши</div>
                                <h2><span>от</span>160.000</h2>
                                <i>руб./мес.</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fourt_items">
                    <h1><span>6 ПРЕИМУЩЕСТВ</span> ПОЧАСОВОЙ ЛОКАЦИИ</h1>
                    <p>Создали наши пространства для того, чтобы гости кайфовали и расслаблялись, а партнеры получали удовольствие от сотрудничества. Для этого реализовали:</p>
                    <div className="fourth_item">
                        <div className="item">
                            <div className="icon_item"></div>
                            <h3>Ящики с замком для хранения вещей.</h3>
                            <h4>Оставляйте все необходимое — защиту гарантируем.</h4>
                        </div>
                        <div className="item">
                            <div className="icon_item"></div>
                            <h3>Ящики с замком для хранения вещей.</h3>
                            <h4>Оставляйте все необходимое — защиту гарантируем.</h4>
                        </div>
                        <div className="item">
                            <div className="icon_item"></div>
                            <h3>Ящики с замком для хранения вещей.</h3>
                            <h4>Оставляйте все необходимое — защиту гарантируем.</h4>
                        </div>
                        <div className="item">
                            <div className="icon_item"></div>
                            <h3>Ящики с замком для хранения вещей.</h3>
                            <h4>Оставляйте все необходимое — защиту гарантируем.</h4>
                        </div>
                        <div className="item">
                            <div className="icon_item"></div>
                            <h3>Ящики с замком для хранения вещей.</h3>
                            <h4>Оставляйте все необходимое — защиту гарантируем.</h4>
                        </div>
                        <div className="item">
                            <div className="icon_item"></div>
                            <h3>Ящики с замком для хранения вещей.</h3>
                            <h4>Оставляйте все необходимое — защиту гарантируем.</h4>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}