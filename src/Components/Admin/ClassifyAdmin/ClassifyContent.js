import React, { useState } from 'react';
import { List, Button, Modal,Popconfirm} from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actionCreator';
import './ClassifyContent.css';
import { useEffect } from 'react';
function ClassifyContent(props) {
  const [addModalVisible, setAddModalVisible] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)
  useEffect(() => {
    props.getDishesCategories()
  }, [])
  //该data为list渲染源数据
  const data = props.dishesCategoriesList
  //以下方法为添加按钮modal事件
  const ShowModal = () => {
    setAddModalVisible(true)
  }
  const handleCancel = () => {
    console.log('cancel');

    setAddModalVisible(false)
  }
  const handleOk = (e) => {
    console.log(e);

    setAddModalVisible(false)
  }
  //以下为编辑Modal的方法
  const editShowModal = ()=>{
    setEditModalVisible(true)
  }
  const editHandleCancel = ()=>{
    setEditModalVisible(false)
  }
  const editHandleOk = (e)=>{
    setEditModalVisible(false)
  }
  //删除确认对话框
  const confirm = ()=>{

  }
  const cancel =()=>{

  }

  return (
    <>
      <div className="panel">
        <h1>分类管理</h1>
        <List
          // size="large"
          footer={<div className="list_footer"><Button type="primary" onClick={ShowModal}><PlusOutlined />添加</Button></div>}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <div className="list_item">
                <span className="item_name">
                  {item.name}
                </span>
                <span className="item_edit">
                  <a onClick={editShowModal}><EditOutlined /> </a>
                  <Popconfirm
                    title="你确定删除该分类(包括该分类下菜品)?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="是"
                    cancelText="否"
                  >
                  <a><DeleteOutlined /></a>
                  </Popconfirm>
                </span>
              </div>

            </List.Item>

          )}
        />
        <Modal
          title="添加分类"
          visible={addModalVisible}
          onOk={(e) => handleOk(e)}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="编辑分类"
          visible={editModalVisible}
          onOk={(e) => editHandleOk(e)}
          onCancel={editHandleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>

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