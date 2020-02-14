import React, { Component } from 'react';
import { Row, Col, Icon ,Menu} from 'antd';
import './Header.css';
import logo from '../../static/logo.png';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actionCreator';
import LoginOrRegister from './LoginOrRegister';

const { SubMenu } = Menu;
class Header extends Component {

    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };

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
                                    <span className="inner_logo">
                                        <img alt="" src={logo}></img>
                                    </span>
                                </Col>
                                {/* 用户按钮 */}
                                <div className="inner_part">
                                <Col offset={8} xs={12} sm={12} md={12} lg={12} xl={12} justify="end">
                                <Menu onClick={this.handleClick}  mode="horizontal"　style={{"borderBottom": "none","display":"flex","flexDirection": "row-reverse"}}>
                                 
                                   
                                    <Menu.Item key="alipay">
                                    <a onClick={this.props.showModal}>
                                    <span className="inner_userBtn">
                                        <Icon type="login" />　登录 / 注册
                                        </span>
                                    </a>
                                    </Menu.Item>
                                    
                                    <SubMenu
                                    title={
                                        <span className="inner_userBtn">
                                        <Icon type="shopping-cart" /> 购物车
                                        </span>
                                    }
                                    >
                                    <Menu.ItemGroup>
                                        <Menu.Item key="setting:1">我的订单</Menu.Item>
                                        <Menu.Item key="setting:2">我购买的商品</Menu.Item>
                                    </Menu.ItemGroup>
                                   
                                    </SubMenu>

                                  
                                </Menu>
                                {/*  */}
                                {/* 通过this.props.showModal进行显示Modal */}
                                {this.props.modalVisible? <LoginOrRegister /> : ''}
                                   
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