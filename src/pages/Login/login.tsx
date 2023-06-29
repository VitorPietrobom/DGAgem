import { ReactElement, useState, ChangeEvent } from "react";
import titulo from '../../assets/titulo.png';
import './login.css';
import Pill from "../../Components/Pill/Pill";

export const Login = (): ReactElement => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleEmail = (event: ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value)
    }

    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    
    const onClick = () =>{
        console.log(email)
        console.log(password)
    } 

    return (
        <div className="container">
            <div className="box">
                <div className="box-content">
                    <div className="logo">
                        <img className="image" src={titulo} alt='title'/>
                    </div>

                    <div className="section-container">
                        <div className="section">
                            <div className="subtitle">Email</div>
                            <input className="line" placeholder="email@dac.unicamp.br" onChange={handleEmail}></input>
                        </div>

                        <div className="section section-2">
                            <div className="subtitle">Senha</div>
                            <input className="line" placeholder="********" onChange={handlePassword} type="password"></input>
                        </div>
                        <div className="button">
                            <Pill label={'Login'} onClick={onClick} isActive={true}></Pill>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}