import React from "react";

class MemeGenerator extends React.Component {
  constructor(props) {
    super(props);
    //  this.state = {
    //    topText: "",
    //    bottomText: "",
    //    randomImage: "http://i.imgflip.com/1bij.jpg",
    //    allMemeImages: [],
    //  };
    this.handleChange = this.handleChange.bind(this);
    this.handleRandomImage = this.handleRandomImage.bind(this);
  }
  state = {
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    allMemeImages: [],
  };
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImages: memes });
      });
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleRandomImage(event) {
    event.preventDefault();
    const randomNumber = Math.round(
      1 + Math.random() * this.state.allMemeImages.length
    );
    this.setState({
      randomImage: this.state.allMemeImages[randomNumber].url,
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleRandomImage}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          Top text
          <br />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          Bottom text
          <br />
          <button>Gen</button>
        </form>
        <div>
          <img src={this.state.randomImage} alt="" />
          <h2>{this.state.topText}</h2>
          <h2>{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}
export default MemeGenerator;
