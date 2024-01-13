import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token:
  "BQDSaP5m2VHw5TG3DjoNpP5zSpqUB-oYOz0C0ZSaDB2qmypgiJ3Omyr33Wx1rkymzO7segzcsgnZclf3v5idOpCfMNw7eQy9W5VNFlepBtoXELs2gYj4Al90Tjje00ZuPeR3NJt9pOS6IpIdc4HqaQEOAN4WE8c0fdm2f1VvGzwevgFeI1rxfaUawZu9k_omeSG2R9_6dRalyZ59cFjbkd90ya_Hpv5SxDHMTreeoPYAVJEYNZNJp4mKJJwSWolIhSjtPnxNiDqJponifdpx1vBg"
  
};



const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
