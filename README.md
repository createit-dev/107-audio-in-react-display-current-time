# Audio in React – display current time
### Blog post: https://www.createit.com/blog/audio-in-react-display-current-time/

Having an audio file played, we would like to have the ability to know the current play time. In React, this can be achieved by using the onTimeUpdate event. 

Knowing currentTime, we need to parse the value and format it using the str_pad_left function. This technique can also be used for streaming audio/video.

## Run
1. Clone the repo
2. `npm install`
3. `npm start`

## Preview

![react-ontimeupate-demo2.gif](images%2Freact-ontimeupate-demo2.gif)