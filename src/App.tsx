import React, { useEffect, useState } from 'react';
import './App.scss';
import SpotifyLoginButton from './components/SpotifyLoginButton';
import List from './components/List';
import { ListItem } from './types';
import { getTopArtists, getTopTracks } from './api';

const App: React.FC = (): JSX.Element => {

  const [topArtists, setTopArtists] = useState<ListItem[]>([]);
  const [topTracks, setTopTracks] = useState<ListItem[]>([]);
  const [accessToken, setAccessToken] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {

    if (window.location.hash) {
      setAccessToken(window.location.hash.substr(1).replace('access_token=', ''));
    }

    const toptracks = getTopTracks(accessToken);

  });

  return (
    <div className="App">
      <div className="Header">
        <div>
          <h1>Spotify Statistics</h1>
          <p>🎵 Discover your favorite tracks and artists on spotify using this react app.</p>
        </div>
        <SpotifyLoginButton />
      </div>
      <hr />
      <div className="Body">
        <List 
          title="Top Artists"
          items={ topArtists }
        />
        <List 
          title="Top Tracks"
          items={ topTracks }
        />
      </div>
    </div>
  );
}

export default App;