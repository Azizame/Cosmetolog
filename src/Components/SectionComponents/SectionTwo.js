import Check from './../../img/checkmark.png';
import Photo from './../../img/photo.png'
export default function SectionTwo(){
    return(
        <div className="two">
            <div className="container">
                <div className="two_content">
                    <h1><span>VIBE COWORKING НА НОВОМ АРБАТЕ:</span> СВЕТЛЫЕ ТОНА И ДЕЛИКАТНЫЕ АКЦЕНТЫ</h1>
                    <p>Благородные белые оттенки доставят эстетическое удовольствие и вам, и клиентам. Тем более, что поддержание чистоты — зона ответственности клининговой службы, <span>мастера следят лишь за своим рабочим местом.</span></p>
                    <div className="video"><h3>Вот, в каких локациях будут создаваться ваши лучшие работы:</h3></div>
                    <div className="two_text">
                        
                        <div className="text_about">
                            <div className="first_about">
                                <p><img src={Check} alt=''/>10 кабинетов и 4 места в общем зале;</p>
                                <p><img src={Check} alt=''/>10 кабинетов и 4 места в общем зале;</p>
                                <p><img src={Check} alt=''/>10 кабинетов и 4 места в общем зале;</p>
                                <p><img src={Check} alt=''/>10 кабинетов и 4 места в общем зале;</p>
                            </div>
                        </div>
                    </div>
                    <div className="two_header">
                        <div className="header_img">
                            <img src={Photo} alt='' />
                        </div>
                        <div className="header_content">
                            <h4>Рабочее место для бровиста </h4>
                            <p>Нам обидно слышать истории, где талантливая фея сферы красоты отдает салону примерно 60% выручки. </p>
                            <div className="two_button">
                                <button>Разбнаривоть</button>
                                <div className='more'>УЗНАТЬ БОЛЬШЕ</div>
                            </div>
                            <div className="two_count">
                                <div className='prev'></div>
                                <div className='h1'>01</div>
                                <div className='h7'>/ 07</div>
                                <div className='left'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}