import Check from './../../img/checkmark.png';
import React from 'react';

import TwoCarouselItems from './TwoCarouselItems';
import TwoVideo from './TwoVideo';
export default function SectionTwo({carousel = [], video = []}){
    return(
        <div className="two">
            <div className="container">
                <div className="two_content">
                    <h1><span>VIBE COWORKING НА НОВОМ АРБАТЕ:</span> СВЕТЛЫЕ ТОНА И ДЕЛИКАТНЫЕ АКЦЕНТЫ</h1>
                    <p>Благородные белые оттенки доставят эстетическое удовольствие и вам, и клиентам. Тем более, что поддержание чистоты — зона ответственности клининговой службы, <span>мастера следят лишь за своим рабочим местом.</span></p>
                    <div className="video">
                    {video.map(el => (
                        <TwoVideo key={el.id} {...el}/>

                    ))}
                        <h3>Вот, в каких локациях будут создаваться ваши лучшие работы:</h3></div>
                    
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
                    
                    {carousel.map(el => (
                        <TwoCarouselItems key={el.id} {...el}/>
                    ))}
                   
                </div>
            </div>
        </div>
    )
}