import { ReactElement, useState, ChangeEvent } from "react";
import './login.css';
import Pill from "../../Components/Pill/Pill";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "@firebase/auth";


export const Login = (): ReactElement => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const userUid = result.user.uid;
            const userPhoto = result.user.photoURL;
            const userName = result.user.displayName;
            console.log(userUid)
            navigate('/', { state: { userUid, userPhoto, userName } });
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
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
                            <FaGoogle /> Login with Google
                        </button>
                        <div className="button-login">
                            <Pill label={'Login'} onClick={onClick} isActive={true}></Pill>
                        </div>
                    </div>
                    
                </div>

                <div className="login-message">Já possui conta? Faça o <Link to="/cadastro" className="route-login">Cadastre-se</Link></div>
            </div>
        </div>
    )
}