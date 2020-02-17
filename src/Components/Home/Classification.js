import React, { Component } from 'react'
import './Classification.css';
import { Menu, Affix } from 'antd';

export default class Classification extends Component {
    state = {
        top: 50,
        bottom: 10,
      };
    
    handleClick = e => {
        console.log('click ', e);
      };
    render() {
        return (
            <>
              <Affix offsetTop={this.state.top}>
                <div className="classification_content">
                    <div className="classification_area">
                  
                    <Menu
                            onClick={this.handleClick}
                          
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                           
                                <Menu.ItemGroup key="g1" title="">
                                    <Menu.Item key="1">健康家餐</Menu.Item>
                                    <Menu.Item key="2">坚守岗胃</Menu.Item>
                                    <Menu.Item key="3">专享双拼</Menu.Item>
                                    <Menu.Item key="4">牛肉套餐</Menu.Item>
                                    <Menu.Item key="5">猪肉套餐</Menu.Item>
                                    <Menu.Item key="6">鸡肉套餐</Menu.Item>
                                    <Menu.Item key="7">单点主食</Menu.Item>
                                    <Menu.Item key="8">甜品小食</Menu.Item>
                                    <Menu.Item key="9">酒水饮品</Menu.Item>
                                    
                                </Menu.ItemGroup>
                             
                        </Menu>
                    </div>
                </div>
                </Affix>
            </>
        )
    }
}
