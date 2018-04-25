import React from "react";

class Weather extends React.Component {

renderImage(temp){
    console.log(temp)
       return <img src="http://jewel925.com/wp-content/uploads/egmJGII.jpg" />
}

    renderImg(temp){
        if(temp > 18){
            return <img src='https://i.pinimg.com/originals/2d/33/55/2d3355b50cd7cc8d2118de777a9160d2.jpg' />
        } else {
            return <img src='http://jewel925.com/wp-content/uploads/egmJGII.jpg' />
        }
    }

    render() {
        return (
            <div>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.description && <p>Conditions: {this.props.description}</p>}
                {this.props.error && <p>{this.props.error}</p>}
                {this.props.temperature && this.renderImg(this.props.temperature)}
            </div>
        );
    }
};

export default Weather; 