import React, { Component } from 'react';
import './SingleCardMain.css';
import SingleCard from './SingleCard';



class SingleCardMain extends Component {
    state = {
        homeFoodCardList: [
            {
                foodId: '001',
                foodName: '椒麻鸡丝饭单人套餐1',
                foodPicUrl: 'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
                unitPrice: 37,
                // foodMount:2,
                // unitTotalPrice:74
            },
            {
                foodId: '002',
                foodName: '椒麻鸡丝饭单人套餐2',
                foodPicUrl: 'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
                unitPrice: 37,
            },
            {
                foodId: '003',
                foodName: '椒麻鸡丝饭单人套餐3',
                foodPicUrl: 'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
                unitPrice: 39,
            },
            {
                foodId: '004',
                foodName: '椒麻鸡丝饭单人套餐4',
                foodPicUrl: 'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
                unitPrice: 37,
            },
            {
                foodId: '005',
                foodName: '椒麻鸡丝饭单人套餐5',
                foodPicUrl: 'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
                unitPrice: 37,
            },
            {
                foodId: '006',
                foodName: '椒麻鸡丝饭单人套餐6',
                foodPicUrl: 'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
                unitPrice: 37,
            },
            {
                foodId: '007',
                foodName: '椒麻鸡丝饭单人套餐2',
                foodPicUrl: 'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
                unitPrice: 37,
            },
            {
                foodId: '002',
                foodName: '椒麻鸡丝饭单人套餐7',
                foodPicUrl: 'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
                unitPrice: 37,
            },
            {
                foodId: '008',
                foodName: '椒麻鸡丝饭单人套餐8',
                foodPicUrl: 'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
                unitPrice: 37,
            },
        ]
    }

    render() {
        return (
            <>

                <div className="Cards">

                    {this.state.homeFoodCardList.map((item, index) => {
                        return (
                            <SingleCard key={index} item={item} />
                        )

                    })}



                </div>

                {/* 分页 */}
                {/* <div className="pagination">
                <div className="layout">
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div> */}
            </>
        )
    }
}

export default SingleCardMain;