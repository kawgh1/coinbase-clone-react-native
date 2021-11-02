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

## Things I added

-   Styling

    -   Made price change %s conditionally red or green if > or < 0, added + and -
    -   Add commas to prices over $1,000 when displayed by .map()

        function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

-   Improved Folder structure
