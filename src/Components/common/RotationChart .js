import React, { Component } from 'react';
import { Carousel } from 'antd';
import pic1 from '../../static/pic7.jpg';
import pic2 from '../../static/pic6.jpg';
import pic3 from '../../static/pic3.jpg';
import pic4 from '../../static/pic4.jpg';
import './RotationChart.css';

class RotationChart  extends Component {

    render() {
        return (
            <>
                <div className="rotationChartMain">
                <Carousel autoplay>
                    <div>
                        <img src={pic1} alt=""></img>
                    </div>
                    <div>
                        <img src={pic2} alt=""></img>
                    </div>
                    <div>
                        <img src={pic3} alt=""></img>
                    </div>
                    <div>
                        <img src={pic4} alt=""></img>
                    </div>
                </Carousel>
                </div>
               
            </>
        )
    }
}

export default RotationChart;