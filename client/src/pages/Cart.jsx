import { Clear } from "@material-ui/icons";
import { DeleteForever } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Bang from "../components/Bang";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { remove, removeProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
// import { product } from "../redux/apiCalls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const KEY =
  "pk_test_51LCNWkBP1LwCA3styoj0vz1MpPtdDsiNixixSrRdD99Ze69uLPFw6l8OWDvpkfvWPuZyyk8ZtxyXFv1WVrvF4ODt006EhGHFjw";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 6px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  border-radius: 6px;
`;
const deleteCart = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  border-radius: 6px;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const iconDelete = styled.div`
  margin: 10px;
`;
const Cart = () => {
  //trừ đi số lượng sản phẩm
  // const [numberofproducts, setNumberofproducts] = useState("")
  // const dispatch = useDispatch()
  // const handleClick = async (e) =>{
  //   e.preventDefault();
  //   product(dispatch, {numberofproducts})
  // }

  //const curu = useSelector((state) => state);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [cartedit, setcartedit] = useState(cart);
  const [stripeToken, setStripeToken] = useState(null);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total,
        });
        navigate("/success", {
          state: { stripeData: res.data, products: cart },
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  // xóa sản phẩm đi
  const clickEvent = (product) => {
    dispatch(removeProduct(product));
    window.location.reload();
    // toast.success('Xóa sản phẩm thành công', {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   });
  };
  const deleteAll = () => {
    dispatch(remove(cart));
    window.location.reload();
  };

  const clickPay = () => {
    if (user.currentUser == null) {
      toast.error('Đăng nhập trước khi thanh toán. ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      //navigate("/login")
    }
    if (cart.products == null) {
      alert("Thêm hàng trước khi thanh toán")
      toast.error('Giỏ hàng chưa có hàng', {
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
      <Navbar />
      <Bang />
      <Wrapper>
        <Title>Giỏ hàng</Title>
        <Top>
          <TopButton>
            <Link to="/" style={{ color: "black", textDecoration: "auto" }}>
              TIẾP TỤC SHOPPING
            </Link>
          </TopButton>
          <TopTexts>
            <TopText>Giỏ hàng(2)</TopText>
            <TopText>Sản phẩm mới(3)</TopText>
          </TopTexts>
          <DeleteForever onClick={() => deleteAll(cart)} />
          <TopButton type="filled">THANH TOÁN</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cartedit.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Tên sản phẩm:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Chip:</b> {product.chip}
                    </ProductSize>
                    <ProductSize>
                      <b>Ram:</b> {product.ram}
                    </ProductSize>
                    <ProductSize>
                      <b>Memory:</b> {product.memory}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <Clear
                    style={{
                      margin: "0px 0px 36px 160px",
                      textDecoration: "auto",
                    }}
                    onClick={() => clickEvent(product)}
                  />
                  <ProductAmountContainer>
                    <ProductAmount>{product.quantity}</ProductAmount>
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.price * product.quantity} VNĐ
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Số tiền sản phẩm</SummaryItemText>
              <SummaryItemPrice>{cart.total} VNĐ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Phí vận chuyển</SummaryItemText>
              <SummaryItemPrice>50.900 VNĐ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Giảm giá</SummaryItemText>
              <SummaryItemPrice>-50.900 VNĐ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Tổng tiền</SummaryItemText>
              <SummaryItemPrice>{cart.total} VNĐ</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="SmartP"
              billingAddress
              shippingAddress
              description={`Tổng tiền của bạn: ${cart.total} VNĐ`}
              amount={cart.total}
              token={onToken}
              stripeKey={KEY}
            >
              <Button
                style={{ borderRadius: "6px" }}
                onClick={
                  clickPay
                } /*onClick={handleClick} onClick={clickEvent}*/
              >
                Thanh toán luôn
              </Button>
              <ToastContainer />
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
