import { Link } from 'react-router-dom'
import Chair from './../../img/chair.png'
import Triangle from './../../img/Triangle.png'
export default function SectionTeth(){
    return(
        <div className="teeth">
            <div className="container">
                <div className="teeth_text">
                    <h1>ВРЕМЯ ОТКРЫТЬ НОВОЕ ДЕЛО В <span>НОВОМ ПРОСТРАНСТВЕ</span></h1>
                </div>
                <div className="teeth_content">
                    <div className="teeth_img">
                        <img src={Chair} alt=""/>
                    </div>
                    <div className="teeth_about"> 
                    <div className='tab'>
                        <div className='tab_button'>
                            <img src={Triangle} alt=''/>
                        </div>
                    </div>
                    <div className='text'>
                        <h4>Нам обидно слышать истории, где талантливая фея сферы красоты отдает салону примерно 60% выручки. Искренне считаем, что бьюти-предприниматели достойны большего. Поэтому создали место, помогающее работать и тратить прибыль только на себя.</h4>
                        <h5>Сдаем кабинеты для косметологов, массажистов, бровистов, лэшмейкеров от 500 руб./час. Без переплат, в оборудованном всем необходимым помещении.Арендуйте на любой срок и уже завтра принимайте клиентов в современном коворкинге.</h5>
                        <Link to="/contact"><button>ЗАБРОНИРОВАТЬ</button></Link>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}