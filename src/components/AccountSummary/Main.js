import React from "react";

export default function Main(props) {
  const { code, id, is_buyer, is_supplier } = props.accountSummary;
  return (
    <>
      <div className="categoryList">
        <div className="cateNameDet">Id</div>
        <div className="cateValueDet">{id}</div>
      </div>
      <div className="categoryList">
        <div className="cateNameDet">Code</div>
        <div className="cateValueDet">{code}</div>
      </div>
      {is_buyer ? (
        <div className="categoryList">
          <div className="cateNameDet">Buyer</div>
        </div>
      ) : null}
      {is_supplier ? (
        <div className="categoryList">
          <div className="cateNameDet">Suplier</div>
        </div>
      ) : null}
    </>
  );
}
