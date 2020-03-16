import React, { Component } from 'react'
import { Layout, Icon,message } from 'antd';
import { createBrowserHistory } from 'history'; 
import * as actionCreators from '../../../store/actionCreator';
import { connect } from 'react-redux';
import './AdminHeader.css';
const { Header } = Layout;
class AdminHeader extends Component {
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
            <>
            <Header className="content_header" >
              <span className="content_header_text">
                文理订餐后台
              </span>
              <span className="content_header_logout">
                <span className="logout_logo" onClick={()=>this.logout()}><Icon type="logout" /> 登出</span>
              </span>
          </Header>
            </>
        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toLogout(){
      dispatch(actionCreators.logout())
    }
  }
}
export default connect(null,mapDispatchToProps) (AdminHeader);