import React, { Component } from 'react'
import './CommonBanner.css';
export default class CommonBanner extends Component {
    render() {
        return (
            <div>
                 <div className="commonBannerMain">
                    <div className="commonBannerMainTitle">{this.props.commonbannerTitle}</div>
                </div>
            </div>
        )
    }
}
