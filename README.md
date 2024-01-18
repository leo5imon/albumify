# Albumify

### Create albums from your favorite artists on Spotify.

## Preview
![First page](https://i.ibb.co/3CDd6Vf/chrome-7u672-Hoh-Ti.png)
![Album pick](https://i.ibb.co/X3sbw5G/chrome-f-Oz-KD0-Tzf-E.png)
![Album created](https://i.ibb.co/Zdwt6Rb/chrome-8-NTgl9-SZNN.png)

## Features
- Authentificate with Spotify API.
- Retrieve liked songs from the user.
- Filter based on the number of liked songs.
- Create album (playlist) for those songs, randomly and with a cover.

## Tech Stack
- Next.Js
- Next Auth
- TypeScript

## Installation
**To use Albumify, follow these steps:**

```
git clone https://github.com/leo5imon/albumify.git
npm install
```

Then, get your Spotify public & private key from https://developer.spotify.com/.
Generate a Next Auth secret & URL from https://next-auth.js.org/configuration/options.

.env example :
```
SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET
NEXTAUTH_SECRET
```

## Usage
Once the application is running, you can access it through your web browser at http://localhost:3000. 
From there, you can start adding, editing, and deleting albums. 
Use the search and filter functionality to find specific albums based on your preferences.

## Contribution
_Contributions are welcome!_
If you would like to contribute to Albumify, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Push your changes to your forked repository.
- Submit a pull request to the main repository.
