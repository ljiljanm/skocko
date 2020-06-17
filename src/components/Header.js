import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      dogs: "",
      chuck: "",
      quotes: "",
      nasa: {
        img_src: "",
        img_num: "",
        img_url: "",
      },
    };
  }

  componentDidMount() {
    let urlFirstPart =
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=201";
    let year = 6 + Math.round(Math.random() * 3);
    let month = 1 + Math.round(Math.random() * 11);
    let day = 1 + Math.round(Math.random() * (month === 2 ? 28 : 30));
    let url = `${urlFirstPart}${year}-${month}-${day}&api_key=eLi4wCZ0gd5RuSVRgLIETaSEBPhoHEou7fCkL8GP`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => data.photos)
      .then((d) => {
        let randomImage = Math.round(Math.random() * d.length);
        this.setState({
          nasa: {
            img_num: randomImage,
            img_src: d[randomImage].img_src,
            img_url: url,
          },
        });
      });

    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          url: data[0].url,
        });
      });

    fetch("https://favqs.com/api/qotd")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quotes: data.quote.body + " " + data.quote.author,
        });
      });

    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          chuck: data.value,
        });
      });

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dogs: data.message,
        });
      });
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <header>
          {/* <p>{this.state.nasa.explanation}</p> */}
          <img src={this.state.nasa.img_src} alt="pic" width="333" />
          <h4>{this.state.quotes}</h4>
          <h3>{this.state.chuck}</h3>
          <img
            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
            alt="Trollface"
            style={{ width: 200 }}
          />
          <img src={this.state.dogs} alt="dogs" width="200" />
          <img src={this.state.url} alt="catty" width="200" />
          <p>meme generator</p>
        </header>
      </div>
    );
  }
}
export default Header;
