import React from "react";

export default function Person(props) {
  const { firstname, id, lastname, phonenumber } =
    props.accountSummary.type_detail;
  return (
    <>
      <div className="categoryList">
        <div className="cateNameDet">Id</div>
        <div className="cateValueDet">{id}</div>
      </div>
      <div className="categoryList">
        <div className="cateNameDet">First Name</div>
        <div className="cateValueDet">{firstname}</div>
      </div>
      <div className="categoryList">
        <div className="cateNameDet">Last Name</div>
        <div className="cateValueDet">{lastname}</div>
      </div>
      <div className="categoryList">
        <div className="cateNameDet">Phone Number</div>
        <div className="cateValueDet">{phonenumber}</div>
      </div>
    </>
  );
}
