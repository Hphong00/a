import styled from "styled-components";
import Bang from "../components/Bang";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import "../App.css";
import { format } from "timeago.js";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {updateProfile} from"../redux/apiCalls"

const Container = styled.div``;

const Wrapper = styled.div``;

const User = () => {
  const user = useSelector((state) => state.user.currentUser);
  const userId = user._id;

  // edit
  var checkError;
  const profile = new Object();
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const profile = { ...inputs};
    console.log(userId);
    console.log(profile);
    updateProfile(userId , profile, dispatch).catch((e) => {
        if (e.code === "ERR_BAD_RESPONSE") {
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
      toast.error("Đăng ký không thành công", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!checkError) {
      toast.success("Đăng ký thành công", {
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
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Thông tin cá nhân</h1>
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">{user.username}</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Chi tiết tài khoản</span>
                <div className="userShowInfo">
                  <PermIdentity className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.username}</span>
                </div>
                <div className="userShowInfo">
                  <CalendarToday className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {format(user.createdAt)}
                  </span>
                </div>
                <span className="userShowTitle">Chi tiết liên hệ</span>
                <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {user.profile.phone}
                  </span>
                </div>
                <div className="userShowInfo">
                  <MailOutline className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.email}</span>
                </div>
                <div className="userShowInfo">
                  <LocationSearching className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {user.profile.address}
                  </span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input
                      name="fullName"
                      type="text"
                      placeholder={user.profile.fullName}
                      onChange={handleChange}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input
                      name="phone"
                      type="phone"
                      placeholder={user.profile.phone}
                      onChange={handleChange}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input
                      name="address"
                      type="text"
                      placeholder={user.profile.address}
                      onChange={handleChange}
                      className="userUpdateInput"
                    />
                  </div>
                  {/* <select name="sex" className="userUpdateItem">
                    <option name="sex" value="Giới tính" onChange={handleChange} selected>
                      {user.profile.sex}
                    </option>
                    <option name="sex" value="Nam"  onChange={handleChange}>Nam</option>
                    <option name="sex" value="Nữ" onChange={handleChange}>Nữ</option>
                    <option name="sex" value="Khác" onChange={handleChange}>Khác</option>
                  </select> */}
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt=""
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button onClick={handleClick} className="userUpdateButton">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default User;
