import axios from "axios";
import React, { useEffect, useState } from "react";

const Body = () => {
  const [item, setitem] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data);
        setitem(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemlist=item.map((data)=>{
    return(
        <div className="col-lg-3 shadow-lg p-3 mb-5 bg-body rounded mx-4 p-3">
            <p>{data.strMeal}</p>
            <img src={data.strMealThumb} className="img-fluid" />
            <p>{data.idMeal}</p>

        </div>
    )
  })

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row justify-content-center align-items-center g-2 my-5">
            {itemlist}
        </div>
      </div>
    </div>
  );
};

export default Body;
