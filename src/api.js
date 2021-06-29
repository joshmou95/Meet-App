import { mockData } from "./mock-data";
import axios from "axios";
import NProgress from "nprogress";

/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */

export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};

// check whether token is valid or not, redirect if not. 
const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());
  return result;
}

export const getEvents = async () => {
  NProgress.start();

  if (window.location.href.startsWith('http://localhost')) {
    NProgress.done();
    return mockData;
  }

  const token = await getAccessToken();

  if (token) {
    removeQuery();
    // eslint-disable-next-line no-useless-concat
    const url = 'https://patiz736v9.execute-api.us-west-2.amazonaws.com/dev/api/get-events' + '/' + token;
    const result = await axios.get(url);
    if (result.data) {
      var locations = extractLocations(result.data.events);
      localStorage.setItem('lastEvents', JSON.stringify(result.data));
      localStorage.setItem('locations', JSON.stringify(locations));
    }
    NProgress.done();
    return result.data.events;
  }
};

// check whether there's a path, then build the URL with the current path 
// or build the URL without a path using window.history.pushState()
const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));
  // if no token is found check for auth code
  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    // if no auth code is found redirect to Authorization screen
    if (!code) {
      const results = await axios.get(
        "https://patiz736v9.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url"
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
}


// encodes the code using encodeURIComponent then used the code to get token
const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    // eslint-disable-next-line no-useless-concat
    'https://patiz736v9.execute-api.us-west-2.amazonaws.com/dev/api/token' + '/' + encodeCode
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => error);
  
  access_token && localStorage.setItem('access_token', access_token);

  return access_token;
};