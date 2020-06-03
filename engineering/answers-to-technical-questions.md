# Answers to Technical Questions

## How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn"t spend much time on the coding test then use this as an opportunity to explain what you would add

This coding assignment was completed in 13 hours. If I had more time, I would love to incorporate Styled components and get rid of CSS file altogether. Due to shortage of time, I had to use static CSS and avoid building Styled component wrappers.

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you have used it

React Hooks are the new standards that I am liking in React ecosystem. Though, I used Redux in current application, Most of the logic can alternatively be written with plain Hooks and passing simpler states between components.

## How would you track down a performance issue in production? Have you ever had to do this

React Developer Tools and Redux Developer Tools can highlight if there are certain components rendering multiple times affecting overall performance. It can be dealt at development level to make production code efficient.

## How would you improve the API that you just used

Due to shortage of time, I used third-party CORS bypass to get data locally. Eventually, best scenario is building an Express server fetching the data and incorporating proxy server in Webpack configuration that binds client side code to local server data.

## Please describe yourself using JSON

```js
{
  name: "Tej Kahlon",
  hobbies: ["Painting", "Teaching", "Travelling"],
  interests: "Learning Modern Front End Development practices, General Web Development, JavaScript Enthusiast",
  objective: "Become a professional Front End Developer with strong expertise in React and its ecosystem",
  resources: [
    { devices: ["MacBook 2016","Desktop PC"] },
    { books: ["Eloquent JavaScript","Express and Node by OReilly"] }
  ]
}
```
