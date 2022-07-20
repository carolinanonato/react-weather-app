import "./current-weather.css";

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Belgrade</p>
                    <p className="weather-description">Sunny</p>
                </div>
                <img className="weather-icon" src="icons/01d.png" alt="weather" />
            </div>
            <div className="bottom">
                <p className="temperature">18ºC</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">22ºC</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">2 m/2</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">15%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Preassure</span>
                        <span className="parameter-value">15 hPa</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CurrentWeather;