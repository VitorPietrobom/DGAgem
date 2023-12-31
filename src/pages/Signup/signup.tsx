import { ReactElement, useState, ChangeEvent } from "react";
import './signup.css';
import Pill from "../../Components/Pill/Pill";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "@firebase/auth";
import { auth, googleProvider } from "../../firebase";

export const Signup = (): ReactElement => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleEmail = (event: ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value)
    }

    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    
    const onClick = () =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const userUid = result.user.uid;
            const userPhoto = result.user.photoURL;
            const userName = result.user.displayName;
            navigate('/home', { state: { userUid, userPhoto, userName } });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    const onClickGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const userUid = result.user.uid;
            const userPhoto = result.user.photoURL;
            const userName = result.user.displayName;
            navigate('/home', { state: { userUid, userPhoto, userName } });
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    return (
        <div className="container-signup">
            <div className="box-signup">
                <div className="box-content-signup">
                    <div className="logo-signup">
                        Cadastre-se
                    </div>

                    <div className="section-container-signup">
                        <div className="section-signup">
                            <div className="subtitle-signup">Email</div>
                            <input className="line-signup" placeholder="email@dac.unicamp.br" onChange={handleEmail}></input>
                        </div>

                        <div className="section-signup section-2-signup">
                            <div className="subtitle-signup">Senha</div>
                            <input className="line-signup" placeholder="********" onChange={handlePassword} type="password"></input>
                        </div>
                        <button className="google-signup" onClick={onClickGoogle}>
                            <FaGoogle /> Singup with Google
                        </button>
                        <div className="button-signup">
                            <Pill label={'Cadastro'} onClick={onClick} isActive={true}></Pill>
                        </div>
                    </div>
                    
                </div>

                <div className="signup-message">Já possui conta? Faça o <Link to="/login" className="route-signup">Login</Link></div>
            </div>
        </div>
    )
}