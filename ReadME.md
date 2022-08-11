# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Packages`

#### `recharts`

I needed to find a highly configurable yet easy to use chart library. I picked rechart based on good reviews from stackshare but also because it is built on top of SVG meaning that scaling would be easier.

You can find more details about this package [here](https://recharts.org/en-US/)

#### `swiper`

As I only had a short time-boxed period to complete this task I needed a fully featured, light-weight and out of the box library to help me protype a carosel feature. I settled on swiper due to how customizable it can be as well as it's popularity within the react and JS community.
You can find more details about this package [here](https://swiperjs.com/)

#### `Luxon`

Time and date manipulation can often times be tricky and therefore it made sense to re-use the efforts of the developer community. I chose Luxon specifically as it appears to be the chosen successor to moment.js which was arguably the industry standard library for working with dates in JS.

You can find more details about this package [here](https://github.com/moment/luxon#readme)

#### `axios`

Axios is a simple promised based HTTP client for the browser. Whilst javaScripts native fetch api would have been more than adequate for this application, howerver, given how light weight the package is I opted for axios because of my personal preference and comfort using it.

You can find more details about this package [here](https://axios-http.com/)

### `Further improvements`

#### `Testing`

Regretably I ran out of time to include tests in this project. It was a tough choice between delivering a complete product or leave some features out and include tests. I understand the importance of having confidence inspiring tests and this would be one of the first things I rectified if I had my time again.

#### `Dropdown`

This was a last minute feature that I added in to provide a way to selct diffrent movie data without having to keep going back to the homepage. The current implementation uses routing to show you different data. In an ideal world this would be handled by state

#### `Search`

This would have been a nice to have feature to improve the user experience

#### `Carousel improvments`

If time was on my side I would like to improve the way the carousel works. Either by enabling a true swiping feature so that you wouldn't need to click and swipe. Also including navigational arrows

#### `Charts`

I started creating some more charts to represent the data in different ways but unfortunately was unable to complete the pie chart.
