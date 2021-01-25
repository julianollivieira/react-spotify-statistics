import './App.css';
import ListItem from './components/ListItem';

function App() {
    return (
        <main>
            <div className="hero">
                <div className="text">
                    <h1>React Spotify Statistics</h1>
                    <h5>🎵 Discover your favorite tracks and artists on spotify using this react app.</h5>
                </div>
                <div className="input">
                    <div>
                        <p>Sign in with Spotify</p>
                        <button>Sign in<img src="Spotify_Icon_RGB_White.png" alt="Spotify Icon" /></button>
                    </div>
                    <div>
                        <p>Select a time period</p>
                        <select>
                            <option>All time</option>
                            <option>Last 6 months</option>
                            <option>Last 4 weeks</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="results-container">
                <h4>Your favorite tracks and artists</h4>
                <div className="row">
                    <div className="column">
                        <ListItem position="1" img="Spotify_Icon_RGB_Green.png" text="A song"/>
                    </div>
                    <div className="column">
                        <ListItem position="1" img="Spotify_Icon_RGB_Green.png" text="An artist"/>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="column">
                        <ListItem position="2" img="Spotify_Icon_RGB_Green.png" text="A song"/>
                        <ListItem position="3" img="Spotify_Icon_RGB_Green.png" text="A song"/>
                        <ListItem position="4" img="Spotify_Icon_RGB_Green.png" text="A song"/>
                        <ListItem position="5" img="Spotify_Icon_RGB_Green.png" text="A song"/>
                    </div>
                    <div className="column">
                        <ListItem position="2" img="Spotify_Icon_RGB_Green.png" text="An artist"/>
                        <ListItem position="3" img="Spotify_Icon_RGB_Green.png" text="An artist"/>
                        <ListItem position="4" img="Spotify_Icon_RGB_Green.png" text="An artist"/>
                        <ListItem position="5" img="Spotify_Icon_RGB_Green.png" text="An artist"/>
                    </div>
                </div>
            </div>
            <footer>
                <p>&copy; 2021 &middot; <a href="https://github.com/julianollivieira/" target="_blank">Julian Ollivieira</a></p>
            </footer>
        </main>
    )
}

export default App;
