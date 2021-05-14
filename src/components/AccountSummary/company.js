import React from "react";

export default function Company(props) {
  const { id, name, phonenumber } = props.accountSummary.type_detail;
  return (
    <>
      <div className="categoryList">
        <div className="cateNameDet">id</div>
        <div className="cateValueDet">{id}</div>
      </div>
      <div className="categoryList">
        <div className="cateNameDet">Name</div>
        <div className="cateValueDet">{name}</div>
      </div>
      <div className="categoryList">
        <div className="cateNameDet">Phone Number</div>
        <div className="cateValueDet">{phonenumber}</div>
      </div>
    </>
  );
}
