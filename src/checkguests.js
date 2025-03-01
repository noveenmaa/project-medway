import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
export const checkGuest = (Component) => {
  function Wrapper(props) {
    var user = useSelector((store) => store.auth.user);
    var navigate = useNavigate();
    useEffect(() => {
      if (user) {
        navigate("/");
      }
    }, [navigate,user]);
    return <Component {...props} />;
  }
  return Wrapper;
};

export default checkGuest;
