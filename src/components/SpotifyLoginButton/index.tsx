import React, { MouseEventHandler, MouseEvent } from 'react';
import './index.scss';
import spotifyLogo from '../../assets/Spotify_Icon_RGB_White.png';

const SpotifyLoginButton: React.FC = (): JSX.Element => {

  const clientId: string = 'd26a842e463f4ec8ab57a295f0b52ead';
  const redirectUrl: string = 'http://localhost:3000';

  const handleSpotifyLogin: MouseEventHandler<HTMLButtonElement> = (event: MouseEvent<HTMLElement>): void => {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUrl}&scope=user-top-read&show_dialog=true`;
  }

  return (
    <button className="SpotifyLoginButton" onClick={ handleSpotifyLogin }>
      <img src={ spotifyLogo } alt="Spotify Icon" />
		  <p>Login with Spotify</p>
    </button>
  );
}

export default SpotifyLoginButton;