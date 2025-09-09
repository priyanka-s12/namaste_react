# Netflix

- rafce - react arrow function component export
- create react app via vite
- configure tailwind css
- Header
- Routing of app
- Login & Sig up form
- Form validation
- useRef
- firebase hosting - build, add "rewrites": [{ "source": "**", "destination": "/index.html" }] in firebase.json
- implement firebase signIn, signup api
- create redux store with userSlice
- if user already login, and in browse page, don't go to login
- if user not login, don't go to browse page
- unsubscribe to the onAuthStateChange callback
- add hardcoded string values to constant.js
- register TMDB api, create an app & get access token
- get data from TMDB api
- custom hook for moviesList
- create movieSlice
- update store with movies data
- main container & secondary container
- language dropdown
- GPT Search feature
- Multi language feature
- Integrate Gemini api search call
- fetched gemini movie suggestions from TMDB
- reused MovieList component
- memoization
- added .env file to gitignore
- Made site responsive

## features

- Login/ Sign up page
  - sign in/ sign up form
  - redirect to Browse page
- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & description, play button
    - Movie suggestionss
      MoviesList
- NetflixGPT
  - Search bar
  - movie suggestions
