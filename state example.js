import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating : 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating : 4.9
    },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
    rating : 3.2
  },
  {
    id: 4,
    name: "Donkatsu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating : 4.6
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating : 4.5
  }
];

function Strawberry({ fav,img, rating }) {
  return <div>
    <h2>I like {fav}</h2>
    <h4>{rating} / 5</h4>
    <img src={img} alt={fav}/>
  </div>
}

Strawberry.propTypes = {
  fav: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating : PropTypes.number
}

class App extends React.Component{
  state = {
    count :0 
  };

  add = () => {
    this.setState(current => ({count: current.count +1}));
  };  
  minus = () => {
    this.setState(current => ({count: current.count -1}));
  };  
  componentDidMount(){
    //component Mounting
    console.log("component render")
  }
  componentDidUpdate(){
    //component Updating
    console.log("I am just updated")
  }
  componentWillUnmount(){
    //component UnMounting
    console.log("Bye")
  }
 render(){
  console.log("I am rendering")
    return <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}
export default App;
