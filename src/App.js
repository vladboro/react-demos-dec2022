import axios from "axios";
import React from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  state = { images: [], isLoading: false };
  onSearchSubmit = async (term) => {
    console.log(`Searching for ${term}`);
    this.setState({ isLoading: true });
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296",
      },
    });
    this.setState({ images: response.data.results, isLoading: false });
    console.log(response);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {this.state.images.length > 0 ? (
          <div>Found: {this.state.images.length} images</div>
        ) : (
          <div>No images found</div>
        )}
        <ImageList images={this.state.images} isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;
