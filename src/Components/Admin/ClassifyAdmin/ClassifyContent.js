import React, { useState } from 'react';
import { List, Button, Modal, Popconfirm, Form, Input, message, } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actionCreator';
import './ClassifyContent.css';
import { useEffect } from 'react';
import AddModal from './AddCategoryModal';


function ClassifyContent(props) {

  const [editModalVisible, setEditModalVisible] = useState(false)
  //edit获取的旧值
  const [chooseListItem, setChooseListItem] = useState('')
  const { getFieldDecorator } = props.form;
  const data = props.dishesCategoriesList
  useEffect(() => {
    props.getDishesCategories()
  }, [])



  //以下为编辑Modal的方法
  const editShowModal = (item) => {
    // console.log(item);
    //保存旧的值 设置为placeholder的值
    setChooseListItem(item.item.name);
    setEditModalVisible(true)

  }
  const ShowModal = () => {
    // setAddModalVisible(true)
  }
  const editHandleCancel = () => {
    setEditModalVisible(false)
  }
  const editHandleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        
      
        const oldValue = chooseListItem;  // 获取旧的值
        const newValue = values.editCategoryName;// 获取新的值
        // console.log(oldValue);
        // console.log(newValue);
        props.editNewCategory(oldValue,newValue);
      }
    });
  }
  //删除确认对话框
  const confirm = (item) => {
    const chooseCategoryItem = item.item.name
    console.log(item.item.name);
    props.deleteCategory(chooseCategoryItem)

  }
  const cancel = () => {

  }
  const showAddModal = ()=>{
    console.log('zaizhe');
    
    props.showAddClassifyModal();
  }

  

  //表单样式
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
      md: { span: 5 },
      lg: { span: 5 },
      xl: { span: 5 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 16 },
      lg: { span: 16 },
      xl: { span: 16 }
    },
  };

  return (
    <>
      <div className="panel">
        <h1>分类管理</h1>
        <List
          // size="large"
          footer={<div className="list_footer"><Button type="primary" onClick={showAddModal}><PlusOutlined />添加</Button></div>}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <div className="list_item">
                <span className="item_name">
                  {item.name}
                </span>
                <span className="item_edit">
                  <a onClick={() => editShowModal({ item })}><EditOutlined /> </a>
                  <Popconfirm
                    title="你确定删除该分类(包括该分类下菜品)?"
                    onConfirm={() => confirm({ item })}
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
        {/* 添加分类modal框 */}


        <Modal
          title="编辑分类"
          visible={editModalVisible}
          onCancel={editHandleCancel}
          footer={null}
        >
          <Form {...formItemLayout} onSubmit={editHandleSubmit}>
            <Form.Item
              label="分类名称"
            >
              {getFieldDecorator('editCategoryName', {
                rules: [{ required: true, message: '请输入分类新名称' }],
              })(
                <Input placeholder={chooseListItem} />
              )}
            </Form.Item>

            <div className="submit_button">
              <Button type="primary" htmlType="submit">
                提交
                </Button>
            </div>
          </Form>
        </Modal>
        <AddModal />

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
    showAddClassifyModal:()=>{
      dispatch(actionCreators.classifyShowAddModal())
    },
    getDishesCategories: () => {
      dispatch(actionCreators.getAllCategories())
    },
    // addNewCategory: (categoryName) => {
    //   dispatch(actionCreators.addCategory(categoryName))
    // },
    deleteCategory: (CategoryItem) => {
      dispatch(actionCreators.deleteCategory(CategoryItem))
    },
    editNewCategory: (oldCategoryName,newCategoryName) => {
      dispatch(actionCreators.editCategory(oldCategoryName,newCategoryName))
    }
  }
}

const ClassifyForm = Form.create({ name: 'edit_form' })(ClassifyContent);
export default connect(mapStateToProps, mapDispatchToProps)(ClassifyForm) 