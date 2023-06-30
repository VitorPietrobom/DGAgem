import { ReactElement, useState, ChangeEvent } from "react";
import './login.css';
import Pill from "../../Components/Pill/Pill";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

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

    const onClickGoogle = () => {
        console.log("Google")
    }

    return (
        <div className="container-login">
            <div className="box-login">
                <div className="box-content-login">
                    <div className="logo-login">
                        Inscreva-se
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
                        <button className="google-login" onClick={onClickGoogle}>
                            <FaGoogle /> Singup with Google
                        </button>
                        <div className="button-login">
                            <Pill label={'Cadastro'} onClick={onClick} isActive={true}></Pill>
                        </div>
                    </div>
                    
                </div>

                <div className="login-message">Já possui conta? Faça o <Link to="/login" className="route-login">Cadastre-se</Link></div>
            </div>
        </div>
    )
}