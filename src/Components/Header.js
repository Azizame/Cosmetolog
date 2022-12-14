import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";


export default function Header(){
    return(
    <div className="header">
        <div className="container">
        <div className="logo">
                <img src="./../img/svg.png" alt=""/>
            </div>
        <nav>
            
            <div className="header_text">
                <p>Бьюти коворкинг в Mосквеподпись две строки</p>
            </div>
            <div className="header_ul">
                <ul>
                    <li>О нас</li>
                    <li>Цены</li>
                    <Link to="/contact"><li>Забронировать</li></Link>
                    <li>Контакты</li>
                </ul>
                <div className="indicator">
                    
                </div>
            </div>
            <div className="header_call">
                <div className="header_number">
                +7 (654) 876 09 09
                </div>
                <div className="call_text">
                <span><p></p></span>
                <p>Обратный звонок</p>
                </div>

            </div>
        </nav>
            <HeaderMenu />
        </div>
        
    </div>
    )
}