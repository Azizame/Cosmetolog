import React, { useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";
import Icon from './../img/phone_input-c.png'
import "antd/dist/antd"
import { message } from "antd";

export default function Form (){
    const [inputValue, setInputValue ] = useState('')
    
    const Contacts = () => {
        axios
        .post(
            "http://vibe0705.pythonanywhere.com/user/v1/ovner/create/",
            {
                phoone_number: inputValue,
            }
        )
        .then((res) => {
            if(res.status === 201){
                console.log("a")
            }
            if(res.status !== 201){
                console.log("b")
                setTimeout(() => {
                    message.warning('Пожалуйста введите так Example: +9981001010')
                }, 2000)
            }
        })
        .catch(() => {
            console.log("notError")
            setTimeout(() => {
                message.warning('Пожалуйста введите так Example: +9981001010')
            }, 2000)
        });
        setInputValue("");
    };
    return(
        <div>
            <div className="input_box">
                            <div className="icon">
                                <img src={Icon} alt="" />
                            </div>
                            <input 
                            value={inputValue} 
                            onChange={e => setInputValue(e.target.value)} 
                            type="text" 
                            placeholder="+7 (___) ___ - __ -__"/>
                        </div>

                        <Link to="/number"><button onClick={Contacts}>ОСТАВИТЬ ЗАЯВКУ</button></Link>
        </div>
    )
}