import React, { Component } from 'react'
import { Table, Divider, message,Popconfirm } from 'antd';
import axios from 'axios';
import './DashesListContent.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actionCreator';
const { Column, ColumnGroup } = Table;
const data = [
  {
    foodId: '001',
    foodName: '椒麻鸡丝饭单人套餐1',
    foodPicUrl: 'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
    unitPrice: 37,
    foodMount: 2,
    unitTotalPrice: 74,
    foodClassify: '今日推荐'
  },
  {
    foodId: '002',
    foodName: '椒麻鸡丝饭单人套餐2',
    foodPicUrl: 'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
    unitPrice: 20,
    foodMount: 2,
    unitTotalPrice: 74,
    foodClassify: '坚守岗胃'
  },
  {
    foodId: '003',
    foodName: '椒麻鸡丝饭单人套餐3',
    foodPicUrl: 'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
    unitPrice: 47,
    foodMount: 2,
    unitTotalPrice: 74,
    foodClassify: '单点主食'
  },
  {
    foodId: '004',
    foodName: '椒麻鸡丝饭单人套餐4',
    foodPicUrl: 'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
    unitPrice: 15,
    foodMount: 2,
    unitTotalPrice: 74,
    foodClassify: '单点主食'
  },



];
class DashesListContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      foodList: [],
      pagination: {},
      loading: false,
    }
  }
  componentDidMount() {
    axios({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      url: '/api/m/meal',
    }).then((res) => {
      if (res.data.success) {
        console.log(res.data)
        message.success('获取菜品成功');
        this.setState({
          foodList: res.data.data
        })
      } else {
        message.warning(res.data.message);
      }

    }).catch((error) => {
      message.error('获取菜品失败：', error);
    })
  }
  handleTableChange = (pagination, filters, sorter) => {
    //表格分页
    // const pager = { ...this.state.pagination };
    // pager.current = pagination.current;
    // this.setState({
    //   pagination: pager,
    // });

    // this.fetch({
    //   // 结果是１０条
    //   results: pagination.pageSize,
    //   // 当前页数为２
    //   page: pagination.current,
    //   // 通过名称排序
    //   sortField: sorter.field,
    //   // 升序
    //   sortOrder: sorter.order,
    //   ...filters,
    // });
  }

    //删除确认对话框
    confirm = (text,record) => {
      console.log(text.text.id);
      this.props.deleteDish(text.text.id)
    }
    cancel = () => {
  
    }

  render() {
    return (
      <>
        <div style={{ padding: '1.5rem', background: '#fff', minHeight: '49rem' }}>
          <Table dataSource={this.state.foodList}
            pagination={this.state.pagination}
            loading={this.state.loading}
            onChange={this.handleTableChange}
            scroll={{ x: true, y: false }}
          >
            <Column width="10%" title="编号" dataIndex="id" key="foodId" />
            <Column
              width="15%"
              title="菜品图片"
              key="foodPicUrl"
              render={(text, record) => (
                <div className="dished_list_pic">
                  <img src={record.pic} alt="/" />
                </div>
              )}
            />
            <Column width="35%" title="菜品名称" dataIndex="name" key="foodName" />
            <Column width="15%" title="菜品分类" dataIndex="mealKind.name" key="foodClassify" />
            <Column width="10%" title="菜品单价" dataIndex="price" key="unitPrice" />

            <Column
              width="20%"
              title="操作"
              key="options"
              render={(text, record) => (
               
                <span>
                  <a>查看详情</a>
                  <Divider type="vertical" />
                  <a>修改</a>
                  <Divider type="vertical" />

                  <Popconfirm
                    title="你确定删除该菜品吗?"
                    onConfirm={() => this.confirm({text,record})}
                    onCancel={this.cancel}
                    okText="是"
                    cancelText="否"
                  >
                     <a>删除</a>
                  </Popconfirm> 
                
                </span>
              )}
            />
          </Table>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
   
    deleteDish: (dishId) => {
      dispatch(actionCreators.deleteDishById(dishId))
    },
    
  }
}

export default connect(null, mapDispatchToProps)(DashesListContent);
