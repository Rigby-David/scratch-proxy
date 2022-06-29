const fetch = require('node-fetch');
require('dotenv').config();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};




exports.handler = async (event, context) => {
  console.log(event.queryStringParameters);
  try {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${event.queryStringParameters.weatherQuery}&limit=5&appid=${process.env.WEATHER_KEY}`);
    const data = await response.json();
    
    const lat = data[0].lat;
    const lon = data[0].lon;
    
    const weatherData = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}`);
    const convert = await weatherData.json();
    console.log(convert);
    const json = JSON.stringify(convert);
    
    return { 
      statusCode: 200, 
      headers,
      body: json
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
