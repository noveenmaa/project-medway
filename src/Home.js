import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import checkAuth from "./checkAuth";
import MedicineList from "./MedicineList";
import React from "react";
const Home = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = useSelector((store) => store.auth.user);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://medicalstore.mashupstack.com/api/medicine", {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
        .then((res) => {
          
          return res.json();
        })
        .then((data) => {
          //  console.log(data);
          setMedicines(data);
          setLoading(false);
          setError("");
        })
        .catch((err) => {
          //    console.log(err.message);
          setLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {medicines && <MedicineList medicines={medicines} />}
    </div>
  );
};

export default checkAuth(Home);
