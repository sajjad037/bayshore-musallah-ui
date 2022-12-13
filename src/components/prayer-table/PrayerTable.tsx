import React, { useState, useEffect, useMemo } from 'react'
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

// import { Aladhan } from '../../constants/values'
import { AladhanAPI } from '../../api-services/AladhanAPI'
import {
  getReadableCurrentDate,
  getReadableCurrentTime,
} from '../../utils/dateTimeUtils'
import { iPrayerTable } from '../../types/aladhan'

import "./PrayerTable.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../App.css"

function PrayerTable() {
  const apiService = useMemo(() => new AladhanAPI(), []);
    // const prayTable: iPrayerTable = Aladhan.getStaticPrayerTable(timeIn24Format)

  var [currentTime, setCurrentTime] = useState<string>("");
  var [prayTable, setPrayTable] = useState<iPrayerTable>();
  var [timeIn24Format, setTimeIn24Format] = useState<boolean>(false);

  useEffect(() => {
    var timer = setInterval(() => setCurrentTime(getReadableCurrentTime(timeIn24Format)), 1000)
    return function cleanup() {
      clearInterval(timer)
    }

  });

  useEffect(() => {
    apiService.getTodayPrayTime(timeIn24Format).then(
      function (response: iPrayerTable) {
        console.log("getTodayPrayTime: ", response)
        setPrayTable(response)
      }
    );
  }, [timeIn24Format, apiService]);

  return (
    <div className='cards'>
      <Card>
        <Card.Header>
          <Stack direction="horizontal" gap={3}>
            <div className="">{getReadableCurrentDate()}</div>
            <div className="ms-auto">{currentTime}</div>
            <div className="ms-auto">{prayTable?.islamicDate.ar}</div>
          </Stack>
        </Card.Header>
        <Card.Body className="text-center">
          <Card.Title>Prayer Times</Card.Title>
          <Table striped bordered hover >
            <thead style={{
              backgroundColor: '#0d6efd',
              color: "white",
              borderColor: '#0d6efd'
            }}>
              <tr>
                <th>Prayer</th>
                <th>Athan</th>
                <th>Iqama</th>
              </tr>
            </thead>
            <tbody>
              {prayTable?.times.map((val, key) => {
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
        </Card.Body>
        <Card.Footer>
          <Stack direction="horizontal" gap={2}>
            <div className="">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="24 Hours Format"
                onChange={(e) => setTimeIn24Format(e.target.checked)}
              />
            </div>
            <div className="ms-auto">
              <Card.Text>
                <span className="text-muted">Sunrise: </span> <b>{prayTable?.sunrise}</b>
              </Card.Text>
            </div>
          </Stack>

        </Card.Footer>
      </Card>
    </div>
  )
}

export default PrayerTable;