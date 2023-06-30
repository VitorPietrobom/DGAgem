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
        <div className="container-login">
            <div className="box-login">
                <div className="box-content-login">
                    <div className="logo-login">
                        <img className="image-login" src={titulo} alt='title'/>
                    </div>

                    <div className="section-container-login">
                        <div className="section-login">
                            <div className="subtitle-login">Email</div>
                            <input className="line-login" placeholder="email@dac.unicamp.br" onChange={handleEmail}></input>
                        </div>

                        <div className="section-login section-2-login">
                            <div className="subtitle-login">Senha</div>
                            <input className="line-login" placeholder="********" onChange={handlePassword} type="password"></input>
                        </div>
                        <div className="button-login">
                            <Pill label={'Login'} onClick={onClick} isActive={true}></Pill>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}