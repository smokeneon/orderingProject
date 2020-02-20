import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon ,message} from 'antd';
import './AdminMain.css';
import logo from '../../static/logo.png';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreator';
import { createBrowserHistory } from 'history'; 

const { Header, Content, Footer, Sider } = Layout;

class AdminMain extends Component {
  state = {
    collapsed: false,
  };
  handleClick = (e)=>{
    console.log(e.key)
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  logout = ()=>{
    const history = createBrowserHistory();
    sessionStorage.removeItem("isLogin");
    sessionStorage.removeItem("token");
    this.props.toLogout();
    if(sessionStorage.getItem('isLogin')!== 'true'){
        history.push('/#/a/login');
        setTimeout( ()=>  history.go(),1600);
        message.success('登出成功');
    } 
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="dark" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="admin_main_logo">
              <img src={logo} alt="/" />
          </div>
          <Menu onClick={this.handleClick} theme="dark" defaultSelectedKeys={['1']} mode="inline">
            
            <Menu.Item key="1">
            <Icon type="tag" />
              <span>分类管理</span>
            </Menu.Item>
            <Menu.Item key="2">
            <Icon type="cloud" />
              <span>菜品管理</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="pie-chart" />
              <span>数据统计</span>
            </Menu.Item>
            <Menu.Item key="4">
                <Icon type="user" />
              <span>用户管理</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className="admin_mian_content">
          <Header className="content_header" >
              <span className="content_header_text">
                文理订餐后台管理系统 WenLi ordering
              </span>
              <span className="content_header_logout" onClick={()=>this.logout()}>
                <Icon type="logout" /> 登出
              </span>
            </Header>
          <Content style={{ margin: '0 16px' }}>
              {/* 面包屑导航 */}
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>登录</Breadcrumb.Item>
              <Breadcrumb.Item>后台管理</Breadcrumb.Item>
            </Breadcrumb>
            
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <h1>欢迎使用文理订餐平台后台管理系统</h1>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>WenLi Ordering ©2020 Created by Wang & Leondon</Footer>
        </Layout>

      </Layout>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toLogout(){
      dispatch(actionCreators.logout())
    }
  }
}
export default connect(null,mapDispatchToProps) (AdminMain);


