import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import logo from '../../../static/logo.png';
import './AdminSider.css';
import * as actionCreators from '../../../store/actionCreator';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const { Sider } = Layout;
const { SubMenu } = Menu;
class AdminSider extends Component {
    state = {
        collapsed: false,
    };

    handleClick = (e) => {
        console.log(e)
        this.props.changeSiderSelectState(e.key)
    }
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <>
                {/*这是后台管理界面侧边栏 公共组件  */}
                <Sider theme="dark" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="admin_main_logo">
                        <img src={logo} alt="/" />
                    </div>
                    <Menu onClick={this.handleClick} theme="dark" defaultSelectedKeys={this.props.adminSiderSelectedState} mode="inline">

                        <Menu.Item key="1">
                            <Link to="/a">
                            <Icon type="home" />
                            <span>主页</span>
                            </Link>
                        </Menu.Item>


                        <SubMenu
                        key="sub1"
                        title={
                            <span>
                            <Icon type="cloud" />
                            <span>菜品</span>
                            </span>
                        }
                        >
                        <Menu.Item key="2">
                            <Link to="/a/disheslist">
                            菜品列表
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/a/dishesadd">
                            添加菜品
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/a/classify">
                            菜品分类
                            </Link>
                        </Menu.Item>
                      
                        </SubMenu>

                        <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <Icon type="file-done" />
                            <span>订单</span>
                            </span>
                        }
                        >
                        <Menu.Item key="5">
                        <Link to="/a/orders">
                            订单管理
                        </Link>
                        </Menu.Item>
                        </SubMenu>
            
                        <SubMenu
                        key="sub3"
                        title={
                            <span>
                             <Icon type="pie-chart" />
                            <span>统计</span>
                            </span>
                        }
                        >
                        <Menu.Item key="6">
                        <Link to="/a/statistics">
                            数据统计
                        </Link>
                        </Menu.Item>
                        </SubMenu>

                        <SubMenu
                        key="sub4"
                        title={
                            <span>
                             <Icon type="user" />
                            <span>用户</span>
                            </span>
                        }
                        >
                        <Menu.Item key="7">
                        <Link to="/a/user">
                            用户管理
                        </Link>
                        </Menu.Item>
                        </SubMenu>
            
                    

                    </Menu>
                </Sider>
            </>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        adminSiderSelectedState: state.get('adminSiderSelectedState')
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeSiderSelectState: (key) => {
            dispatch(actionCreators.changeSiderSelectState(key))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AdminSider);