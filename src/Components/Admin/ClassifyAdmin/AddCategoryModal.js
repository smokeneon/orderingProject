import React, { useState } from 'react';
import { Form,Modal,Input,Button} from 'antd';
import * as actionCreators from '../../../store/actionCreator';
import { connect } from 'react-redux';
function AddModal(props) {
    const { getFieldDecorator } = props.form;
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
    //以下方法为添加按钮modal事件

    const addModalCancel = () => {
        props.cancelAddClassifyModal()
    }

    //提交表单
    const handleSubmit = e => {

        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                props.addNewCategory(values.newCategoryName)
                // console.log('Received values of form: ', values.newCategoryName);
            }
        });
    };

    return (
        <Modal
            title="添加分类"
            visible={props.classifyAddModalShowOrCancel}
            onCancel={addModalCancel}
            footer={null}
        >
            <Form {...formItemLayout} onSubmit={handleSubmit}>
                <Form.Item
                    label="分类名称"
                >
                    {getFieldDecorator('newCategoryName', {
                        rules: [{ required: true, message: '请输入分类名称' }],
                    })(
                        <Input />
                    )}
                </Form.Item>

                <div className="submit_button">
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </div>
            </Form>
        </Modal>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        classifyAddModalShowOrCancel: state.get('classifyAddModalShowOrCancel'),
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      cancelAddClassifyModal:()=>{
        dispatch(actionCreators.classifyCancelAddModal())
      },
      addNewCategory: (categoryName) => {
        dispatch(actionCreators.addCategory(categoryName))
      }
    }
  }

const AddCategoryModal = Form.create({ name: 'add_form' })(AddModal);
export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryModal);