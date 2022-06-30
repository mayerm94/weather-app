## Available Scripts

In the project directory, you can run:

### `npm start`

NOTE: You may have to run `npm install` first
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run buildLocationFile`

This pulls the locations.json source file from github and runs a deduplication function on it so that that list is
the set of unique [city, state] tuples.


## Future Improvements
In addition to the inline TODOs

1. The weather api randomly response with HTTP 500s, need to add feedback to tell the user of the fetch error. Right now the error is only displayed in console.
2. MOBILE FRIENDLY. Did not build this with a mobile-first approach (was aiming for develompent speed) and therefore mobile view is abolute trash
3. Wrap app in a ThemeProvider so it is easy to pivot between styles app-wide https://mui.com/material-ui/customization/theming/
4. Have the city search field clear out upon selection
5. Add tests for some of the util funcions


## Feature Adds
1. Use the polygon data returned in API to show weather area on a map