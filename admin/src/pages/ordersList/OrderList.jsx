import "./orderList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteOrder, getOders } from "../../redux/apiCalls";

export default function OrderList() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  useEffect(() => {
    getOders(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteOrder(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    { field: "userId", headerName: "User ID", width: 200 },
    {
      field: "amount",
      headerName: "Tổng tiền",
      width: 140,
    },
    {
      field: "createdAt",
      headerName: "Thời gian tạo",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Thời gian tạo",
      width: 200,
    },
    {
      field: "updatedAt",
      headerName: "Cập nhật gần nhất",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/order/" + params.row._id}>
              <button className="orderListEdit">Chi tiết</button>
            </Link>
            <DeleteOutline
              className="orderListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
            
          </>
        );
      },
    },
  ];

  return (
    <div className="orderList">
      <DataGrid
        rows={orders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}