import styled from "styled-components";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 25%;
  padding: 20px;
  color: #1877f2;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 200px;
  margin-left: 100px;
  align-items: center;
  font-size: 80px;
  box-sizing: border-box;
  position: relative;
`;

const Logotitle = styled.div`
  width: 25%;
  padding: 20px;
  color: black;
  cursor: pointer;
  border-radius: 8px;
  align-items: center;
  font-size: 22px;
  margin-bottom: 40px;
  margin-left: -360px;
  box-sizing: border-box;
  position: absolute;
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
  cursor: pointer;
  background-color: #1877f2;
  color: white;
  align-items: center;
  font-size: 18px;
  border-radius: 6px;
  &:disabled {
    color: while;
    cursor: not-allowed;
  }
`;
const ButtonRegister = styled.button`
  width: 100%;
  height: 46px;
  border: none;
  background-color: #42b72a;
  color: white;
  cursor: pointer;
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
const Login = () => {
  var checkError;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  //const { isFetching } = useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();
    login(dispatch, { username, password })
      .catch((e) => {
        console.log(e);
        if (e.code === "ERR_BAD_REQUEST") {
          checkError = true;
        } else {
          checkError = false;
        }
      })
      .finally(() => {
        showToast(checkError);
      });
  };

  const showToast = (checkError) => {
    if (checkError) {
      toast.error("Tài khoản hoặc mật khẩu không chính xác", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Container>
      <Logo>SmartP</Logo>
      <Logotitle>
        Hàng 100% chính hãng được phân phối bởi hệ thống bán lẻ.
      </Logotitle>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Username or phone number"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonLogin onClick={handleClick} /*disabled={isFetching}*/>
            LOGIN
          </ButtonLogin>
          <Link href="/forgot-password" style={{ textDecoration: "auto" }}>Forgotten password?</Link>
          <ButtonRegister>Create new Account</ButtonRegister>
        </Form>
        <ToastContainer />
      </Wrapper>
    </Container>
  );
};

export default Login;
