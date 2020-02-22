import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import logo from '../../../static/logo.png';
import './AdminSider.css';
import * as actionCreators from '../../../store/actionCreator';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const { Sider } = Layout;
class AdminSider extends Component {
    state = {
        collapsed: false,
    };

    handleClick = (e) => {
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
                            <span>我的主页</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/a/classify">
                            <Icon type="tag" />
                            <span>分类管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/a/dishes">
                            <Icon type="cloud" />
                            <span>菜品管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/a/orders">
                            <Icon type="file-done" />
                            <span>订单管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/a/statistics">
                            <Icon type="pie-chart" />
                            <span>数据统计</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/a/user">
                            <Icon type="user" />
                            <span>用户管理</span>
                            </Link>
                        </Menu.Item>

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