import React, { Component } from 'react';
import { Row, Col, Icon ,Menu, message} from 'antd';
import './Header.css';
import logo from '../../static/logo.png';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actionCreator';
import LoginOrRegisterModal from '../RegisterAndLogin/LoginOrRegisterModal';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
class Header extends Component {

    handleClick = e => {
        // console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
      logout = ()=>{
        sessionStorage.removeItem("isLogin");
        sessionStorage.removeItem("token");
        message.success('登出成功')
        
      }

    render() {
        return (
            <>
                <div className="Header_header">
                    {/* 采用antd栅格布局 */}
                    <Row type="flex" justify="center" >

                        {/* banner栏 */}
                        <Col xs={24} sm={24} md={16} lg={19} xl={16}>
                            {/* 内容部分 */}
                            <div className="Header_header_inner">
                                {/* logo */}
                                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <Link to="/">
                                        <span className="inner_logo">
                                            <img alt="" src={logo}></img>
                                        </span>
                                    </Link>
                                    
                                </Col>
                                {/* 用户按钮 */}
                                <div className="inner_part">
                                <Col offset={8} xs={12} sm={12} md={12} lg={12} xl={12} justify="end">
                                <Menu onClick={this.handleClick}  mode="horizontal"　style={{"borderBottom": "none","display":"flex","flexDirection": "row-reverse"}}>
                                 
                                    {
                                    sessionStorage.getItem('isLogin')===false ||sessionStorage.getItem('isLogin')=== null  ?

                                    <Menu.Item key="loginOrRegister">
                                    <a onClick={()=>this.props.showModal()}>
                                    <span className="inner_userBtn">
                                        <Icon type="login" />　登录 / 注册
                                        </span>
                                    </a>
                                    </Menu.Item>
                                    :

                                    <SubMenu
                                    title={
                                        <div>
                                            <Icon type="user" /> 我　的
                                        </div>
                                    }
                                    >
                                    {/* <Menu.ItemGroup> */}
                                        <Menu.Item key="setting:3"><Link to="/me">我的主页</Link></Menu.Item>
                                        <Menu.Item key="setting:4"><a onClick={()=>this.logout()}>退出登录</a></Menu.Item>
                                    {/* </Menu.ItemGroup> */}
                                    </SubMenu>
                                    }
                                    
                                    <SubMenu
                                    title={
                                        <Link to="/shoppingcart">
                                        <span className="inner_userBtn">
                                            <Icon type="shopping-cart" /> 购物车
                                        </span>
                                        </Link>
                                    }
                                    >
                                    {/* <Menu.ItemGroup> */}
                                        {/* <Menu.Item key="setting:1"><Link to="/shoppingcart">我的购物车</Link></Menu.Item> */}
                                        {/* <Menu.Item key="setting:2">我购买的商品</Menu.Item> */}
                                    {/* </Menu.ItemGroup> */}
                                   
                                    </SubMenu>

                                  
                                </Menu>
                                {/* 通过this.props.showModal进行显示Modal */}
                                {this.props.modalVisible? <LoginOrRegisterModal /> : ''}
                                   
                                </Col>
                                </div>


                            </div>


                        </Col>
                    </Row>
                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modalVisible: state.get('modalVisible')
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        showModal(){
            dispatch(actionCreators.showModal())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);