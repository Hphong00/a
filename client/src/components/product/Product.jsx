import {
  SearchOutlined,
  ShoppingCartOutlined,
  DeveloperBoard,
  Memory,
  PhoneAndroid,
  LineWeightTwoTone,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { khungProduct } from "../../database/data";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 6px;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  align-items: end;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 315px;
  height: 485px;
  display: flex;
  align-items: top;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.03);
  position: relative;
  border-radius: 4px;
  &:hover ${Info} {
    opacity: 1;
  }
  &:hover img {
    transform: scale(1.05);
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 170px;
  width: 170px;
  z-index: 2;
  position: relative
  border-radius: 6px;
`;
// const Khung = styled.img`
//   height: 180px;
//   width: 200px;
//   position: absolute;
//   z-index: 2;
//   border-radius: 12px;
// `;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Sale = styled.div`
  color: black;
  left: 0px;
  top: 180px;
  position: absolute;
  background: #3f95fb;
  border-radius: 0 6px 6px 0;
  color: #fff;
  margin-left: 10px;
`;
const Sale1 = styled.div`
  color: black;
  left: 100px;
  top: 180px;
  position: absolute;
  background: #cd1817;
  border-radius: 6px;
  color: #fff;
  margin-left: 10px;
`;
const NameP = styled.div`
  left: 0px;
  top: 210px;
  font-size: 20px;
  position: absolute;
  color: #474c51;
  border-radius: 6px;
  background-color: transparent;
  margin-left: 10px;
`;
const Price = styled.div`
  color: black;
  text-decoration: blink;
  left: 0px;
  top: 250px;
  position: absolute;
  background: #cd1817;
  border-radius: 6px;
  color: #fff;
  margin-left: 10px;
`;
const PriceClear = styled.div`
  color: black;
  text-decoration: blink;
  left: 120px;
  font-size: 15px;
  top: 250px;
  position: absolute;
  color: black;
  text-decoration-line: line-through;
  margin-left: 10px;
`;
const InP = styled.div`
  color: black;
  text-decoration: blink;
  left: 0px;
  top: 280px;
  position: absolute;
  color: black;
  margin-left: 10px;
  font-size: 14px;
`;
const InP1 = styled.div`
  color: black;
  text-decoration: blink;
  left: 0px;
  top: 310px;
  position: absolute;
  color: black;
  margin-left: 10px;
  font-size: 14px;
`;

const TraGop = styled.div`
  color: black;
  text-decoration: blink;
  max-width: 220px;
  left: 0px;
  top: 390px;
  position: absolute;
  color: black;
  margin-left: 10px;
  font-size: 13px;
`;

const IconImg = styled.img`
  height: 45px;
  width: 45px;
  left: 10px;
  top: 340px;
  z-index: 2;
  position: absolute;
  border-radius: 30px;
`;
const IconImg1 = styled.img`
  height: 45px;
  width: 45px;
  left: 70px;
  top: 340px;
  z-index: 2;
  position: absolute;
  border-radius: 30px;
`;
const IconImg2 = styled.img`
  height: 45px;
  width: 45px;
  left: 130px;
  top: 340px;
  z-index: 2;
  position: absolute;
  border-radius: 30px;
`;
const IconImg3 = styled.img`
  height: 45px;
  width: 45px;
  left: 200px;
  top: 340px;
  z-index: 2;
  position: absolute;
  border-radius: 30px;
`;
const Product = ({ item }) => {
  return (
    <Container>
      {/* <Circle /> */}
      {/* <Khung src={item.khung}/> */}
      <Image src={item.img} />
      <Link
        to={`/product/${item._id}`}
        style={{ color: "black", textDecoration: "auto" }}
      >
        <Sale>{item.sale}</Sale>
        <Sale1>{item.sale1}</Sale1>
        <NameP>{item.title}</NameP>
        <Price>{item.pricefake}</Price>
        <PriceClear>{item.pricesale}</PriceClear>

        <InP>
          <DeveloperBoard style={{ color: "black", height: "10px" }} />
          {item.chip}
          <Memory style={{ color: "black", height: "12px" }} />
          {item.ram} {item.memory}{" "}
        </InP>
        <InP1>
          <PhoneAndroid style={{ color: "black", height: "12px" }} />
          {item.kichthuoc} {item.cauhinh}
          <LineWeightTwoTone style={{ color: "black", height: "10px" }} />
          {item.trongluong}{" "}
        </InP1>

        <TraGop>{item.titletragop}</TraGop>
        <IconImg src={item.imgIcon} />
        <IconImg1 src={item.imgIcon1} />
        <IconImg2 src={item.imgIcon2} />
        <IconImg3 src={item.imgIcon3} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
        </Info>
      </Link>
    </Container>
  );
};

export default Product;
