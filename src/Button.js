import React from 'react';

class Button extends React.Component {
    render() {
        return(
            <a href={this.props.url} target="_blank" rel="noreferrer">
                {this.props.name}
            </a>
        )
    }
}

export default Button;