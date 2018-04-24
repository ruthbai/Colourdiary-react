import React from "react";



class Form extends React.Component {
  
    // ImgPop(props) {
    //     const onClick = props.onClick;
    //     if (onClick) {
    //         return <p>('Hello')</p>
    //     } 
    // }
    

    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input class= "input" type="text" name="city" placeholder= "city..."/>
                <input class= "input" type="text" name="country" placeholder= "country..."/>
                <button>Get Weather</button>
                {/* <button>Get Weather</button> */}
            </form>
        );
    }
};





export default Form; 