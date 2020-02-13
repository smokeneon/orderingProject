import React,{Component} from 'react';
import RotationChart from '../Components/common/RotationChart ';
import SingleCard from '../Components/common/SingleCard'
import Footer from '../Components/common/Footer'
import {Row,Col} from 'antd';
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <>
            {/* 采用antd栅格布局 */}
            <Row type="flex" justify="center" >
                <br/>
                {/* banner栏 */}
                <Col xs={24} sm={24} md={16} lg={19} xl={16}>
                    {/* 轮播图 */}
                    <RotationChart />
                    {/* 卡片组 */}
                    <SingleCard />
                    {/* 页脚 */}
                    <Footer/>
                </Col>
            </Row>
            </>
        )
    }
}

export default Home;