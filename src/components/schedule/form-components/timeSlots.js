import React, { useState } from 'react'

const blockedTimes = [['10:00', '11:00'], ['14:30', '15:15']]

export default function TimeSlots(props) {
  function timeSlotClick(e, hour) {
    let bounds = e.target.getBoundingClientRect()

    let percent = (e.clientX - bounds.left) / e.target.offsetWidth * 100
    let time
    if (percent < 25)
      time = `${hour}:00`
    else if (percent < 50)
      time = `${hour}:15`
    else if (percent < 75)
      time = `${hour}:30`
    else
      time = `${hour}:45`
    if (!props.value || !props.value[0] || props.value[0].split(':')[0] > hour)
      props.onChange([time, ''])
    else
      props.onChange([props.value[0], time])
  }

  function renderSlots() {
    const slots = []
    const [startTime, endTime] = props.value || ['', '']
    for (let i = 1; i <= 24; i++) {
      const marker = (i <= 12) ? `${i}AM` : `${i - 12}PM`
      let selectedFillPercent = 0
      let selectedFill = false
      let selectedGradient = ['transparent', '#28a745']

      const splitStart = startTime.split(':')
      const splitEnd = endTime.split(':')
      if (splitStart[0] == i) {
          selectedFillPercent = 100 / (60 / (60 - splitStart[1]))
      }
      if (i > splitStart[0] && i < splitEnd[0]) {
        selectedFill = true
      }
      if (splitEnd[0] == i) {
          selectedFillPercent = (100 / (60 / (60 - splitEnd[1])))
          selectedGradient = ['#28a745', 'transparent']
      }

      for (const blockedTime of blockedTimes) {
        const [startTime, endTime] = blockedTime
        const splitStart = startTime.split(':')
        const splitEnd = endTime.split(':')
        if (splitStart[0] == i) {
            selectedFillPercent = 100 / (60 / (60 - splitStart[1]))
            selectedGradient = ['transparent', 'red']
        }
        if (i > splitStart[0] && i < splitEnd[0]) {
          selectedFill = true
        }
        if (splitEnd[0] == i) {
            selectedFillPercent = (100 / (60 / (60 - splitEnd[1])))
            selectedGradient = ['red', 'transparent']
        }
      }



      slots.push (
        <div key={i}>
          <span className='time-marker'>{marker}</span>
          <div
            className={'time-box border-top border-bottom'}
            style={{
              background: selectedFill ? '#28a745' :
              `linear-gradient(to right, ${selectedGradient[0]} ${100 - selectedFillPercent}%, ${selectedGradient[1]} ${100 - selectedFillPercent}%)`
            }}
            onClick={e => timeSlotClick(e, i)}
           />
        </div>
      )
    }
    return slots
  }
  return (

    <div className='time-slots my-3 border rounded p-3'>
      {renderSlots()}
    </div>
  )
}
