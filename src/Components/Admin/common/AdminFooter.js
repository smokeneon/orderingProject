import React, { Component } from 'react'
import { Layout} from 'antd';
const { Footer } = Layout;
export default class AdminFooter extends Component {
    render() {
        return (
            <>
                <Footer style={{ textAlign: 'center' }}>WenLi Ordering ©2020 Created by Wang & Leondon</Footer> 
            </>
        )
    }
}
