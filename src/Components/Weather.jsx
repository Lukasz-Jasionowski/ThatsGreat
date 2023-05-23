import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [search, setSearch] = useState('');
    const [inputValue, setInputValue] = useState('');

    const searchPressed = () => {
        setInputValue('');
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=953351888f206cda2751c4f328190ce0&units=metric`)
            .then((res => res.json()))
            .then((result) => {
                setWeatherData(result)
            }
            )
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=Gdańsk&appid=953351888f206cda2751c4f328190ce0&units=metric`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {weatherData ? (
                <div className='weather greet'>
                    <h2>Weather in {weatherData.name}</h2>
                    <p>{weatherData.main.temp} °C</p>
                    <p>{weatherData.weather[0].main}</p>
                    <p>({weatherData.weather[0].description})</p>
                    <input className='weather'
                        type='text'
                        placeholder='Check your city'
                        value={inputValue}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setInputValue(e.target.value)
                        }}
                    />
                    <button onClick={searchPressed}>Search</button>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

export default Weather;
