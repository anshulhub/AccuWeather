
# AccuWeather
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

AccuWeather is a WebApplication helpful in getting the most accurate weather report anytime, anywhere.


## Appendix

Implemented Restful API using GET/PUT requests from OpenWeathermap.org by creating NodeJS server and made able to call requests and display current weather reports and temperature anywhere in the world in celsius with dynamically implemented clock and date functions.

  
## Features

- Realtime Weather Report
- Live previews
- Dynamically fetched date and time
- Cross platform
- Accurate Temperature with Weathermod icons

  
## API Reference

#### Get all items

```http
  GET /https://api.openweathermap.org/data/2.5/weather&appid=api_key
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /apiapi.openweathermap.org/data/weather?q=cityVal
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cityVal`      | `string` | **Required**. cityname to fetch |



  
## Deployment

To deploy this project run

```bash
  npm run start
```

  
## Contributing

Contributions are always welcome!


Please adhere to this project's `code of conduct`.

  
