import React, { Component } from 'react'

export default class DetailPanel extends Component {
    render() {
        return (
            <div className="cateConte">
                <ul className="categoryBox">
                    <li className="active">Main</li>
                    <li>Company</li>
                    <li>Person</li>
                </ul>
<div className="cateDetails">
    <div className="categoryList">
        <div className="cateNameDet">Code</div>
        <div className="cateValueDet">CO0001</div>
    </div>
    <div className="categoryList">
        <div className="cateNameDet">Code</div>
        <div className="closeBtn">X</div>
    </div>
    <div className="categoryList">
        <div className="cateNameDet">Buyer</div>
        <div className="closeBtn">X</div>
    </div>

</div>

            </div>
        )
    }
}
