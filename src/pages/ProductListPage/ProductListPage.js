import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from '../../components/ProdcutItem/ProductItem';
import { connect } from "react-redux";
import callApi from "../../utils/apiCaller";
import { Link } from 'react-router-dom';

class ProductListPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount(){
    callApi('products', 'GET', null).then(res =>{
      this.setState({
        products: res.data
      });
    });
  }

  render() {
    // var {products}= this.props;
    var {products} = this.state;
    
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-info mb-10">
          Thêm sản phẩm
        </Link>
        <ProductList>
          {this.showProducts(products)}
        </ProductList>
      </div>
    );
  }
  
  showProducts(products){
    var result = null;
    if(products.length > 0 ){
      result = products.map((product,index) => {
        return(
          <ProductItem
            key={index}
            product={product}
            index={index}
          />  
        )
      });
    }
    return result ;
  }
}

const mapStatetoProps = state =>{
  return{
    products: state.products
  }
}

export default connect(mapStatetoProps,null)(ProductListPage);
