import React from "react";

class Weather extends React.Component {

renderImage(temp){
    console.log(temp)
       return <img src="http://jewel925.com/wp-content/uploads/egmJGII.jpg" />
}

    renderImg(temp){
        if(temp > 30){
            return <img src='../images/hot.jpg' />
        } else if (temp > 27){
            return <img src='../images/hot2.jpg' />
        } else if(temp > 24){
            return <img src='../images/warm.jpg' />
        }else if(temp > 21){
            return <img src='../images/warm2.jpg' />
        }else if(temp > 18){
            return <img src='../images/cold.jpg' />
        }else if(temp > 15){
            return <img src='../images/cold2.jpg' />
        }else if(temp > 12){
            return <img src='../images/cold3.jpg' />
        }else{
            return <img src='../images/cold4.jpg'/>
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
                {/* {this.props.desctiption && this.renderImg(this.props)} */}
            </div>
        );
    }
};

export default Weather; 