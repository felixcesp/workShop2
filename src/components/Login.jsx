import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useForm from '../hooks/useForm';
import { InputStyled, FormControlStyled, FormStyled, LinkSignUpStyled, LoginRegText1Styled, LoginRegText2Styled, LoginText3Styled, TextLinkSignUpStyled, InputPasswordStyled, InputEmailStyled } from '../styles/Styles';

const Login = () => {

    const [ data, handleChange] = useForm({
        email: '',
        password: '',
        
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("my data",data)

        obtenerData().then((respuesta) =>{
           const user = respuesta.data.find(element => element.email === data.email && element.password === data.password);
           if (user){
                navigate('/Home',{state :{ user : user, replace:true} });
           }else {
            console.log("Credentials invalid")
           }
        })

    }
    const url = "http://localhost:3005/usuarios/"
    const obtenerData = async() =>{
        const respuesta = axios.get(url)
        return respuesta;
    }

    useEffect(() => {
        obtenerData().then((respuesta) =>{
            console.log(respuesta.data)
        })
    }, [])
    
    const navigate = useNavigate();
    const navigateToRegister = () =>{
      navigate('/Register');
  };

  return (
      <FormStyled  onSubmit={handleSubmit}>
          <LoginRegText1Styled>Welcome back</LoginRegText1Styled>
          <LoginRegText2Styled>Sign in to an existing account using your phone number</LoginRegText2Styled>
          <FormControlStyled>
              <InputEmailStyled 
                name="email"
                onChange={handleChange}
                value={data.email} 
                type="mail" placeholder='Email or Phone number'/>
              <InputPasswordStyled  
                name="password"
                onChange={handleChange}
                value={data.password} 
                type="password" placeholder='Password'/>
          </FormControlStyled>
          <InputStyled type="submit" value="Login" />
          <TextLinkSignUpStyled>
              <LoginText3Styled>D’ont have account ?</LoginText3Styled>
              <LinkSignUpStyled onClick={navigateToRegister}> Sign up</LinkSignUpStyled>  
          </TextLinkSignUpStyled>
    </FormStyled>
  )
}
export default Login