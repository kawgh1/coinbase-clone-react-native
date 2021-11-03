-   # Coinbase clone in React Native

    -   Expo app
    -   This project is based off of two projects
    -   https://www.youtube.com/watch?v=0z748Ua2JPY by GrabDeveloper
        -   https://github.com/arkhan13/coinbase-clone
    -   https://www.youtube.com/watch?v=1T4mE8_ZKv8 by ByProgrammers

-   ## Tools Used

    -   Crypto API

        -   Coin Gecko
            -   https://api.coingecko.com/api/v3/coins/

    -   Navigation

        -   https://reactnavigation.org/docs/getting-started
        -   **npm install @react-navigation/native**
        -   **npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view**
        -   **npm install @react-navigation/bottom-tabs**

    -   Axios

        -   **npm install axios**

    -   Home Rewards Component
        -   Linear Gradient
            -   **npm install expo-linear-gradient**
    -   Settings Screen Toggle
        -   https://www.npmjs.com/package/react-native-switch-toggle
        -   **npm install react-native-switch-toggle**
    -   Transfer Screen Icons
        -   **npm install react-native-elements**

## Things I added

-   Really went to town with the Coin Gecko API - it's really clear and easy to use!
-   Added custom styling and conditional price formatting to accomodate for both very large prices like Bitcoin at $63,000 and very small prices like Shiba Inu at $0.00007146

-   Styling

    -   Made price change %s conditionally red or green if > or < 0, added + and -
    -   Add commas to prices over $1,000 when displayed by .map()

        function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

-   Improved Folder structure
-   Got the status tabs working on the "Prices" screen using conditional rendering

    -   User can click "Gainers" to show only coins with positive 24 hour change or "Loser" to show only coins with negative 24 hour change

-   # Deployment

    -   ## Deploying React Native web-only app (no iOS or Android) to Netlify

        -   https://blog.kripiz.com/setting-up-a-react-native-project-with-expo-206/

        -   have to make sure expo-cli is installed
        -   **npm install expo-cli**

        -   run **expo build:web** in terminal
        -   on Netlify set Build command "expo build:web"
        -   set Publish directory: web-build

## Notes

-   Sort an array of objects by values
-   https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/

    -   Used to sort Coin Gecko API Data into Top Movers (coins with largest 24 hour % increases)

-   Getting the Bottom Navigation bar height to change from the default was tricky
    -   <NavigationContainer>
              <Tab.Navigator
                  tabBarOptions={{
                      showLabel: false,
                  }}
                  screenOptions={{
                      tabBarStyle: { height: 100 },
                  }}
              >
