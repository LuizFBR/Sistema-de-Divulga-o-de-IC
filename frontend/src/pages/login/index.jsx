import { useState } from "react";
import { Span,H1,LoginContainer,InfoContainer,Input,Button,Body} from "./styles";


const LoginPage = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  function validateForm (){
    return usuario.length > 0 && senha.length > 0;
  };
  function handleSubmit(event) {
    event.preventDefault();
  }
 
  return (
    <Body>
      <LoginContainer>
        <H1><Span> FMQ</Span>06</H1>
        <p>Entre com seus os seus dados para o login</p>
        <div class="login-container">
            <div>
              <Input placeholder="Usuário"></Input>
            </div>
            <div>
            <Input placeholder="Senha"></Input>
            </div>
            <div> 
              <Button>
              Login
              </Button>
            </div>
        </div>
      
      <InfoContainer>
        <p>
          FMQ06 2011
        </p>
        <p>
        Centro Pluridisciplinar - <a href="https://www.cpqba.unicamp.br/">CPQBA</a>
        </p>
        <p>
        Universidade Estadual de Campinas - <a href="https://www.unicamp.br/unicamp/">UNICAMP</a>
        </p>
      </InfoContainer>
    </LoginContainer>
  </Body>
  );
};
export default LoginPage;