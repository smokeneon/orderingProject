import React,{Component} from 'react';
import './SingleCard.css';
import {Button,Pagination} from 'antd';


class SingleCard extends Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <>
            
            <div className="Cards">
                {/* 一个卡片菜品 */}
                <div className="singlecard">
                    
                    {/* 图片区域 */}
                    <div className="singlecard_pic">
                        <img alt="" src="https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png" />
                    </div>
                    {/* 价格，数量区域 */}
                    <div className="singlecard_content">
                            <div className="food_name"><span>椒麻鸡丝饭单人套餐</span></div>
                            <div className="food_message">
                                <span className="food_price">￥<span>37</span> </span>
                                <span className="food_order"><Button type="primary">立即订餐</Button></span>
                            </div>
                           
                    </div>
                </div>
                {/* 一个卡片菜品　截止 */}
                  {/* 一个卡片菜品 */}
                  <div className="singlecard">
                    
                    {/* 图片区域 */}
                    <div className="singlecard_pic">
                        <img alt="" src="https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png" />
                    </div>
                    {/* 价格，数量区域 */}
                    <div className="singlecard_content">
                            <div className="food_name"><span>椒麻鸡丝饭单人套餐</span></div>
                            <div className="food_message">
                                <span className="food_price">￥<span>37</span> </span>
                                <span className="food_order"><Button type="primary">立即订餐</Button></span>
                            </div>
                           
                    </div>
                </div>
                {/* 一个卡片菜品　截止 */}
                  {/* 一个卡片菜品 */}
                  <div className="singlecard">
                    
                    {/* 图片区域 */}
                    <div className="singlecard_pic">
                        <img alt="" src="https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png" />
                    </div>
                    {/* 价格，数量区域 */}
                    <div className="singlecard_content">
                            <div className="food_name"><span>椒麻鸡丝饭单人套餐</span></div>
                            <div className="food_message">
                                <span className="food_price">￥<span>37</span> </span>
                                <span className="food_order"><Button type="primary">立即订餐</Button></span>
                            </div>
                           
                    </div>
                </div>
                {/* 一个卡片菜品　截止 */}
                  {/* 一个卡片菜品 */}
                  <div className="singlecard">
                    
                    {/* 图片区域 */}
                    <div className="singlecard_pic">
                        <img alt="" src="https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png" />
                    </div>
                    {/* 价格，数量区域 */}
                    <div className="singlecard_content">
                            <div className="food_name"><span>椒麻鸡丝饭单人套餐</span></div>
                            <div className="food_message">
                                <span className="food_price">￥<span>37</span> </span>
                                <span className="food_order"><Button type="primary">立即订餐</Button></span>
                            </div>
                           
                    </div>
                </div>
                {/* 一个卡片菜品　截止 */}
                  {/* 一个卡片菜品 */}
                  <div className="singlecard">
                    
                    {/* 图片区域 */}
                    <div className="singlecard_pic">
                        <img alt="" src="https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png" />
                    </div>
                    {/* 价格，数量区域 */}
                    <div className="singlecard_content">
                            <div className="food_name"><span>椒麻鸡丝饭单人套餐</span></div>
                            <div className="food_message">
                                <span className="food_price">￥<span>37</span> </span>
                                <span className="food_order"><Button type="primary">立即订餐</Button></span>
                            </div>
                           
                    </div>
                </div>
                {/* 一个卡片菜品　截止 */}
                  {/* 一个卡片菜品 */}
                  <div className="singlecard">
                    
                    {/* 图片区域 */}
                    <div className="singlecard_pic">
                        <img alt="" src="https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png" />
                    </div>
                    {/* 价格，数量区域 */}
                    <div className="singlecard_content">
                            <div className="food_name"><span>椒麻鸡丝饭单人套餐</span></div>
                            <div className="food_message">
                                <span className="food_price">￥<span>37</span> </span>
                                <span className="food_order"><Button type="primary">立即订餐</Button></span>
                            </div>
                           
                    </div>
                </div>
                {/* 一个卡片菜品　截止 */}
                  {/* 一个卡片菜品 */}
                  <div className="singlecard">
                    
                    {/* 图片区域 */}
                    <div className="singlecard_pic">
                        <img alt="" src="https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png" />
                    </div>
                    {/* 价格，数量区域 */}
                    <div className="singlecard_content">
                            <div className="food_name"><span>椒麻鸡丝饭单人套餐</span></div>
                            <div className="food_message">
                                <span className="food_price">￥<span>37</span> </span>
                                <span className="food_order"><Button type="primary">立即订餐</Button></span>
                            </div>
                           
                    </div>
                </div>
                {/* 一个卡片菜品　截止 */}
   
                  
            </div>

            {/* 分页 */}
            <div className="pagination">
                <div className="layout">
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
            </>
        )
    }
}

export default SingleCard;