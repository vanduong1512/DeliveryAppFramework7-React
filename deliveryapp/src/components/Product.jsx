import React, { Component } from 'react';

import '../css/App.css'

export default class Product extends Component {
    render() {
        //var index = 0;
        return (
            <div className='containerProduct'>
                <img src={this.props.path} alt='' />
            </div>
        );
    };
}