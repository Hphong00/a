import { useLocation } from "react-router-dom";
import "./order.css";
import { useSelector } from "react-redux";

export default function Order() {
  const location = useLocation();
  const orderId = location.pathname.split("/")[2];
  const order = useSelector((state) =>
    state.order.orders.find((order) => order._id === orderId)
  );
  const numberProduct = order.products.length;

  return (
    <div className="order">
      <div className="orderTitleContainer">
        <h1 className="orderTitle">Order</h1>
      </div>
      <div className="orderBottom">
        <form className="orderForm">
          <div className="orderFormLeft">
            <label>ID đơn hàng</label>
            <div>{order._id}</div>
            <label>ID người đặt</label>
            <div>{order.userId}</div>
            <label>Tổng tiền đơn hàng</label>
            <div>{order.amount}</div>
            <label>Thời gian tạo</label>
            <div>{order.createdAt}</div>
          </div>
          <div className="orderFormLeft">
            <label>Địa điểm giao hàng</label>
            <div className="valueOrder">{order.address.line1}</div>
            <label>Thành phố</label>
            <div>{order.address.city}</div>
            <label>Quốc gia</label>
            <div>{order.address.country}</div>
            <label>Mã bưu điện</label>
            <div>{order.address.postal_code}</div>
          </div>
          <div className="orderFormLeft">
            <label>ID sản phẩm đã mua</label>
            {[...Array(numberProduct)].map((elementInArray, index) => (
              <div className="" key={index}>
                {" "}
                {order.products[index].productId}{" "}
              </div>
            ))}
          </div>
          <div className="orderFormLeft">
            <label>Số lượng</label>
            {[...Array(numberProduct)].map((elementInArray, index) => (
              <div className="" key={index}>
                {" "}
                {order.products[index].quantity}.0{" "}
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
