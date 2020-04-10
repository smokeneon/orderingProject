import React, { Component } from 'react'
import './Classification.css';
import { Menu, Affix } from 'antd';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actionCreator';

class Classification extends Component {
    state = {
        top: 50,
        bottom: 10,
      };
    
    handleClick = e => {
        const selectKey = e.item.props.eventKey
        console.log('click ', selectKey);
        this.props.changeHomeDishesList(selectKey)
      };
    render() {

        const data = this.props.homeCategoriesList;
        
        
        return (
            <>
              <Affix offsetTop={this.state.top}>
                <div className="classification_content">
                    <div className="classification_area">
                  
                    <Menu
                            onClick={this.handleClick}
                            // defaultSelectedKeys={['0']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                           
                                <Menu.ItemGroup key="g1" title="">
                                    {
                                        data.map((item,index)=>{
                                        return <Menu.Item key={item.id}>{item.name}</Menu.Item>
                                        })
                                    }
                                    
                                </Menu.ItemGroup>
                             
                        </Menu>
                    </div>
                </div>
                </Affix>
            </>
        )
    }

    componentDidMount(){
        this.props.getAllCategories();
        this.props.getAllDishes();
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        homeCategoriesList: state.get('dishesCategoriesList')
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllCategories: () => {
            dispatch(actionCreators.getAllCategories())
        },
        getAllDishes:() => {
            dispatch(actionCreators.getAllDishes())
        },
        changeHomeDishesList:(selectKey) => {
            dispatch(actionCreators.changeHomeDishesList(selectKey))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Classification);