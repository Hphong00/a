import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest,productRequest } from "../requestMethods";
import { Link } from "react-router-dom";
import { remove } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const products = location.state.products;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();

  const deleteAllcart = () => {
    dispatch(remove());
  };

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: products.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: products.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    // const editProduct = async () => {
    //   try {
    //     const res = await productRequest.put("/products", {
    //       userId: currentUser._id,
    //       products: products.products.map((item) => ({
    //         productId: item._id,
    //         quantity: item._quantity,
    //       })),
    //       amount: products.total,
    //       address: data.billing_details.address,
    //     });
    //     setOrderId(res.data._id);
    //   } catch {}
    // };
    data && createOrder();
  }, [products, data, currentUser]);
  console.log(location);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Đặt hàng thành công, mã đặt hàng của bạn là: ${orderId}`
        : `Đặt hàng không thành công, mời đăng nhập và đặt hàng lại.`}
      <button style={{ padding: 10, marginTop: 20 }}>
        {" "}
        <Link to="/" onClick={() => deleteAllcart()} style={{ color: "black", textDecoration: "auto" }}>
                Quay lại trang chủ
        </Link>
      </button>
    </div>
  );
};

export default Success;
