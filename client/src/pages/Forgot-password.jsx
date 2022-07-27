import styled from "styled-components";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  cursor: pointer;
  border-radius: 8px;
  align-items: center;
  box-sizing: border-box;
  margin-left: 100px;
  position: relative;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const ForgotUserName = styled.h3`
  font-size: 24px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;p
`;

const ButtonLogin = styled.button`
  width: 100%;
  height: 46px;
  border: none;
  background-color: #42b72a;
  color: white;
  align-items: center;
  font-size: 18px;
  border-radius: 6px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const ButtonRegister = styled.button`
  width: 100%;
  height: 46px;
  border: none;
  background-color: #1877f2;
  color: white;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 6px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  margin-left: 108px;
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 15px;
  font-size: 14px;
  color: #1877f2;
`;

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  
  const handleClick = async (e) => {
    try{
      e.preventDefault();
      login(dispatch, { username, password });
    }catch{};
  };
  return (
    <Container>
      <Wrapper>
        <Title>Quên mật khẩu</Title>
        <Form>
          <Input
            placeholder="Username or phone number"
            onChange={(e) => setUsername(e.target.value)}
          />
          <ButtonLogin onClick={handleClick} disabled={isFetching}>
            Tìm kiếm
          </ButtonLogin>
          <Link style={{ textDecoration: "auto" }}>Lấy lại tài khoản?</Link>
         <ButtonRegister >Đăng nhập</ButtonRegister>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ForgotPassword;
