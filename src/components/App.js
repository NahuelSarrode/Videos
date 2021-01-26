import React, { Component } from 'react'; 
import SearchBar from '../components/SearchBar'; 
import youtube from '../apis/youtube'; 

class App extends Component {
    state = { videos: [] };

    onFormSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        }); 

        this.setState({ videos: response.data.items });
    }

    render() {
        return (
            <div className="container ui">
                <SearchBar onSubmit={this.onFormSubmit}/>
                I have {this.state.videos.length} videos.
            </div>
        );
    }
}

export default App; 