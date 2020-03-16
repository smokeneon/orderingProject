import React from 'react';
import { Table, Divider, message, List } from 'antd';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actionCreator';
import './ClassifyContent.css';
import { useEffect } from 'react';
const { Column } = Table;
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
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <div className="list_item">
                <span className="item_name">
                  {item.name}
                </span>
                  <span className="item_edit">
                  编辑
                  </span>
                  <span className="item_delete">
                  删除
                  </span>
              </div>
              
            </List.Item>

          )}
        />

        <Table dataSource={data}
          //   // dataSource={this.state.data}
          //   pagination={this.state.pagination}
          //   loading={this.state.loading}
          //   onChange={this.handleTableChange}
          scroll={{ x: false, y: false }}
        >
          <Column width="10%" title="编号" dataIndex="id" key="id" />
          <Column width="60%" title="分类名称" dataIndex="name" key="name" />

          <Column
            width="30%"
            title="操作"
            key="options"
            render={(text, record) => (
              <span>
                <Divider type="vertical" />
                <a>修改</a>
                <Divider type="vertical" />
                <a>删除</a>
              </span>
            )}
          />
        </Table>
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