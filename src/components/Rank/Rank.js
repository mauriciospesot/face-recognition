import React, { Component } from 'react';


class Rank extends Component {
    render() {
        return(
            <div>
                <div className='white f3'>
                    {`${this.props.name}, tu actual numero de entrada es...`}
                </div>
                <div className='white f1'>
                    {this.props.entries}
                </div>
            </div> 
        );
    }
}

export default Rank;