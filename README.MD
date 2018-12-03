# Fair Weather Friend

Simple App using the OpenWeatherMap forecast API [https://openweathermap.org/forecast5]  and Reactjs to 
display local and foriegn 5 day weather forecasts. 

To review the App live: http://www.cooper.industrialrd.com/fairweather/

# Usage

To build the app simply clone the repository git@github.com:cooper09/fairweather.git

cd into the "fairweather" directory

$ npm start

Open localhost:9999 for a dynamic view of the app and <localhost>/fairweather/dist for the production build.

To build a production version use the following:  $ npm run build:prod

Before using production, however, make sure you edit <localhost>/fairweather/dist/index.html. 

Look for the following line: <script src="/app/bundle.js"></script>  and change it to <script src="app/bundle.js"></script> and you should have no problems.

# On the Assignment

Only covered the basics in terms of consuming API data and displaying it in a user friendly way. That should be more than enough to give you a good idea of how I think through an application, coding it as efficiently as possible. However, I barely got to scratch the surface of the API which seems prett extensive. If given more time I would probably like to use the location finder to create forecast locatons on the fly, add the mapping features and give the user more options for non-local forecasts. I considered adding a dropdown to provide a city of your choice, but there were a few thousand to choose from. A bit too many for a weekend assignment. 

In any case, enjoy!

P.S. This version is also responsive so feel free to check it out on your phone or ipad as well. 