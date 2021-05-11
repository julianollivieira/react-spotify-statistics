import axios, { AxiosError, AxiosResponse } from 'axios';
import { ListItem } from './types';

const getTopArtists = async (accessToken: string): Promise<ListItem[]> => {

    axios.get('https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50', {
      headers: {
        'Content-Type': 'applications/json',
        'Authorization': `Bearer ${accessToken}`
      }
    }).then((response: AxiosResponse) => {
        
      console.log(response);
      return response;

    }).catch((error: AxiosError) => {

      console.log(error);
      return error;

    });

}

const getTopTracks = async (accessToken: string): Promise<ListItem[]> => {

    axios.get('https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50', {
      headers: {
        'Content-Type': 'applications/json',
        'Authorization': `Bearer ${accessToken}`
      }
    }).then((response: AxiosResponse) => {

      console.log(response);

    }).catch((error: AxiosError) => {

      console.log(error);

    });

}

export { getTopArtists, getTopTracks };