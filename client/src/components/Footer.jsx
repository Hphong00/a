import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  &:hover img {
    transform: scale(1.05);
    opacity: 0.9;
  }
  margin: 0px 100px 0px 100px;
  font-size: 14px;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 200px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 200px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>SmartP.com</Title>
        <List>
          <ListItem>Giới thiệu</ListItem>
          <ListItem>Câu hỏi thường gặp</ListItem>
          <ListItem>Chính sách bảo mật</ListItem>
          <ListItem>Hệ thống cửa hàng</ListItem>
          <ListItem>Tra cứu thông tin bảo hành</ListItem>
          <ListItem>Hướng dẫn mua trả góp</ListItem>
          <ListItem>Chính sách trả góp</ListItem>
          <ListItem>Chính sách đổi trả</ListItem>
        </List>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Liên kết hữu ích</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Điện thoại</ListItem>
          <ListItem>Laptop</ListItem>
          <ListItem>PC</ListItem>
          <ListItem>Phụ kiện</ListItem>
          <ListItem>Máy cũ</ListItem>
          <ListItem>Tai nghe</ListItem>
          <ListItem>Apple</ListItem>
          <ListItem>Samsung</ListItem>
          <ListItem>Đồng hồ</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Cơ sở </Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 622 Nguyễn Xiển , Hoàng Mai ,
          Hà Nội
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +84 123 456 76
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> smartp@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
