import { Component } from "react";
import "./DestinationStyles.css";
import taal1Image from '../components/assets/taal volcano 1.jpg';
import taal2Image from '../components/assets/taal volcano 2.jpg'

class DestinationData extends Component {
    render() {
        return (
            <div className="first-des">
                <div className="des-text"></div>
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
                <div className="image">
                    <img alt="img" src={this.props.img1} />
                    <img alt="img" src={this.props.img2} />
                </div>
            </div>




        )
    }
}
export default DestinationData