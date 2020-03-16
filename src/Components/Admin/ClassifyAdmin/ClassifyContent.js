import React from 'react';
import {List,Button} from 'antd';
import { PlusOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actionCreator';
import './ClassifyContent.css';
import { useEffect } from 'react';
function ClassifyContent(props) {
  useEffect(() => {
    props.getDishesCategories()
  }, [])
  const data = props.dishesCategoriesList
  console.log('打印对象');

  console.log(data instanceof Array);
  return (
    <>
      <div className="panel">
        <h1>分类管理</h1>
        <List
          size="large"
          footer={<div className="list_footer"><Button type="primary"><PlusOutlined />添加</Button></div>}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <div className="list_item">
                <span className="item_name">
                  {item.name}
                </span>
                  <span className="item_edit">
                  <a><EditOutlined /> </a>
                  <a><DeleteOutlined /></a>
                  </span>
              </div>
              
            </List.Item>

          )}
        />
      </div>
    </>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    dishesCategoriesList: state.get('dishesCategoriesList'),
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDishesCategories: () => {
      dispatch(actionCreators.getAllCategories())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClassifyContent) 