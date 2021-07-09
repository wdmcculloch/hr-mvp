import React, { useState, useEffect } from 'react';
import axios from 'axios';
import routeImg from './assets/sample-route.png';


function tConvert (time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}

const dateTime = (d) => {
  let month = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  }
  let test = d.split('T')

  let date = test[0];
  let time = test[1];
  date = date.split('-')

  time = time.slice(0, time.length - 1);
  time = tConvert(time);
  time = time.split(':');
  time[2] = time[2].slice(2);
  time = `${time[0]}:${time[1]} ${time[2]}`;

  return `${month[Number(date[1])]} ${Number(date[2])}, ${date[0]} at ${time}`;
}

const round = (num) => {
  num = num.toFixed(2);
  if(num.length === 1) {
    num = num + '.00';
  }
  return num;
}

const formatTime = (time) => {
  const format = val => `0${Math.floor(val)}`.slice(-2);
  const hours = time / 3600;
  const minutes = (time % 3600) / 60;
  return [hours, minutes, time % 60].map(format).join(':');
}

const mileTime = (dist, time) => {
  dist = dist / 1609.34;
  let pace = time / dist;
  pace = formatTime(pace);
  pace = pace.slice(4);
  return pace;
}

const totalTime = (time) => {
  time = formatTime(time);
  time = time.split(':')
  for (let i = 0; i < time.length; i++) {
    time[i] = Number(time[i]);
  }
  return time[0] === 0 ? `${time[1]}m ${time[2]}s` : `${time[0]}h ${time[1]}m`;
}

function ActivityListItem(props) {
  const data = props.activity;
  const type = data.type === 'Run' ?
    <div>{`${mileTime(data.distance, data.moving_time)} /mi`}</div> :
    <div>{`${Math.ceil(data.total_elevation_gain * 3.28084)} ft`}</div>;
  // console.log(data);
  function handleSave(e) {
    e.preventDefault();
    let params = {
      _id: e.target.id
    }
    axios.post('/save', params)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));

  };

  return (
    <div className='container'>

    <div className='item-container'>
      <div className='item-top'>
        <div>
          <div id='user'>Will McCulloch</div>
          <div id='date-time-loc'>{dateTime(data.start_date_local)} - Santa Rosa, CA</div>
        </div>
      </div>
      <div className='item-bottom'>
        <div id='title'>
        <div>{data.name}</div>
        </div>
        <div id='act-data'>
          <div>{data.type}</div>
          <div>{`${round(data.distance / 1609.34)} mi`}</div>
          <div>{totalTime(data.elapsed_time)}</div>
          {type}
        </div>
        {console.log(data.saved)}
        <button id={data._id}onClick={handleSave}>{data.saved ? 'Saved' : 'Save'}</button>
      </div>
    </div>
    <img src={routeImg} onClick={props.modal}/>
    </div>

  )
}

export default ActivityListItem;

