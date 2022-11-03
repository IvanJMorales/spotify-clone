export const authEndpoint = "https://accounts.spotify.com/authorize"; /*sends user to login on spotify*/

const redirectUri = "http://localhost:3000/"; /*brings user back to app*/

const clientId = "3c2c894f85174f26a01a8bbc5cc6ffe3" /*client ID from spotify*/

const scopes = [ /*array of user permissions*/
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

/*creates URL */
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
    return window.location.hash /*finds hash in Url*/
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            var parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;

        }, {});
}