import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
// import {Button} from '../common/button/Button'
// import { Labels } from '../../constants/labels';
import Stack from 'react-bootstrap/Stack';

import "./PrayerTable.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../App.css"

function PrayerTable() {

  var [date, setDate] = useState(new Date());

  function GetTime(date) {

    // Creating variables to hold time.
    var TimeType, hour, minutes, seconds;

    // Getting current hour from Date object.
    hour = date.getHours();

    // Checking if the Hour is less than equals to 11 then Set the Time format as AM.
    if (hour <= 11) {

      TimeType = 'AM';

    }
    else {

      // If the Hour is Not less than equals to 11 then Set the Time format as PM.
      TimeType = 'PM';

    }


    // IF current hour is grater than 12 then minus 12 from current hour to make it in 12 Hours Format.
    if (hour > 12) {
      hour = hour - 12;
    }

    // If hour value is 0 then by default set its value to 12, because 24 means 0 in 24 hours time format. 
    if (hour === 0) {
      hour = 12;
    }


    // Getting the current minutes from date object.
    minutes = date.getMinutes();

    // Checking if the minutes value is less then 10 then add 0 before minutes.
    if (minutes < 10) {
      minutes = '0' + minutes.toString();
    }


    //Getting current seconds from date object.
    seconds = date.getSeconds();

    // If seconds value is less than 10 then add 0 before seconds.
    if (seconds < 10) {
      seconds = '0' + seconds.toString();
    }


    // Adding all the variables in fullTime variable.
    return hour.toString() + ':' + minutes.toString() + ':' + seconds.toString() + ' ' + TimeType.toString();
  }

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }

  });

  const prayTimes = [
    { "prayerName": "Fajar", "athan": "05:53", "iqama": "06:30" },
    { "prayerName": "Duhr", "athan": "11:57", "iqama": "12:45" },
    { "prayerName": "Asr", "athan": "02:07", "iqama": "02:30" },
    { "prayerName": "Magrib", "athan": "04:29", "iqama": "04:34" },
    { "prayerName": "Isha", "athan": "06:02", "iqama": "07:30" },
    { "prayerName": "1st Jumma", "athan": "12:30", "iqama": "12:50" },
    { "prayerName": "2st Jumma", "athan": "01:10", "iqama": "01:25" },
  ]
  function getCurrentDate() {
    const date = new Date();
    return ` ${date.toLocaleString("en-US", { day: '2-digit' })}-${date.toLocaleString("en-US", { month: "long" })}-${date.getFullYear()}`
  }

  return (



    <div className='cards'>
      <h1>Prayer Times</h1>
      <div className='cards__container'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <td colSpan={3}>
                <Stack direction="horizontal" gap={3}>
                  <div className="">{getCurrentDate()}</div>
                  <div className="ms-auto">{GetTime(date)}</div>
                  <div className="ms-auto">Third item</div>
                </Stack>
              </td>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Prayer</th>
              <th>Athan</th>
              <th>Iqama</th>
            </tr>
          </thead>
          <tbody>
            {prayTimes.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.prayerName}</td>
                  <td>{val.athan}</td>
                  <td>{val.iqama}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default PrayerTable;