import React from 'react';
const dateTime = (date) => {
  console.log(date);
}
function ActivityListItem(props) {
  console.log(props.activity);
  const data = props.activity;

  return (
    <div className='item-container'>
      <div className='item-top'>
        <div>profile pic</div>
        <div id='name'>Will McCulloch</div>
        <div id='date-time-loc'>{data.start_date_local}</div>
      </div>
      <div className='item-bottom'>
        <div>activity icon</div>
        <div>activity name,
          activity data
        </div>
      </div>
    </div>
  )
}

export default ActivityListItem;

