import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {actAddProductRequest,actGetProductRequest, actUpdateProductRequest} from './../../actions/index'
import {connect} from 'react-redux'

class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
            price:'',
            status:''
        };
    }

    componentDidMount(){
        let {match} = this.props;
        if(match){
            let id = match.params.id;
            this.props.onGetProduct(id)
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.product){
            let {product} = nextProps;
            this.setState({
                id: product.id,
                name: product.name,
                price:product.price,
                status:product.status
            })
        }
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]:value
        })
    }

    onSave = (e) => {
        e.preventDefault();
        let {id,name,price,status} = this.state;
        let {history} = this.props;
        let data = {
            id:id,
            name: name,
            price: price,
            status: status
        };

        if(id){
            this.props.onUpdateProduct(data)
        }else{
            this.props.onAddProduct(data);
            
        }
        history.goBack()
    }
    render() {
        let {name,price,status} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên sản phẩm</label>
                        <input
                            name="name" 
                            value={name} 
                            onChange={this.onChange} 
                            type="text" 
                            className="form-control" 
                            placeholder="Nhập tên sản phẩm"/>
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input 
                            name="price" 
                            value={price} 
                            onChange={this.onChange} 
                            type="number" 
                            className="form-control" 
                            placeholder="Nhập giá sản phẩm"/>
                    </div>
                    <div className="form-group">
                        <label>Trạng thái</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input 
                                name="status" 
                                type="checkbox" 
                                value={status}
                                onChange={this.onChange} 
                                checked={status}
                                />
                            Còn hàng
                        </label>
                    </div>
                    
                    
                    <Link to="/product" className="btn btn-danger mr-10">Trở lại</Link>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
                
            </div>
            
        );
    }
}
const mapStateToProps = state => {
    return {
        product : state.product
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddProduct : (product) => {
            dispatch(actAddProductRequest(product))
        },
        onGetProduct : (id) => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct : (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);