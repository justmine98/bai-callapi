import React from "react";
import { useParams } from "react-router-dom";
import CallApi from "../../utils/apiCaller";

export default function ProductActionPage(props) {
  let params = useParams();
  console.log(params, props);

  constructor(props){
    super(props);
    this.state ={
      id : '',
      txtName:'',
      txtPrice:'',
      chkbStatus:''
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    })
  }

  onSave = (e) =>{
    e.preventDefault();
    var {txtName,txtPrice,chkbStatus} = this.state;
    CallApi('products', 'POST',{
      name : txtName,
      price : txtPrice,
      status: chkbStatus
    }).then(res =>{
      console.log(res);
    });
  }

  var {txtName,txtPrice,chkbStatus} = this.state;
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <form onSubmit={this.onSave}>
        <div className="form-group">
          <label>Tên Sản Phẩm: </label>
          <input 
          type="text" 
          className="form-control" 
          name="txtName"
          value={txtName}
          onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label>Giá: </label>
          <input
           type="number" 
           className="form-control" 
           price="txtPrice"
           value={txtPrice}
           onChange={this.onChange} 
           />
        </div>
        <div className="form-group">
          <label>Trạng thái: </label>
        </div>
        <div className="checkbox">
          <label>
            <input
             type="checkbox" 
             name="chkbStatus"
             value={chkbStatus}
             onChange={this.onChange}
             />
            Còn hàng
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Luu lai
        </button>
      </form>
    </div>
  );
}
