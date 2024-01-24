import React from 'react'

export const WeatherCard = (props) => {
  return (
    <div className="element">
          <img src={props.icon} alt="" className="icon" />
          <div className="data">
            <div id="humidity-percent">{props.value}</div>
            <div className="text">{props.text}</div>
          </div>
        </div>
  )
}
