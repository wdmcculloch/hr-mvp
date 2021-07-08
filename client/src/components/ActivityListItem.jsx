import React from 'react';

const dateTime = (date) => {
  var d = new Date(date);
  console.log(d);
}
function ActivityListItem(props) {
  console.log(props.activity);
  const data = props.activity;

  return (
    <div className='item-container'>
      <div className='item-top'>
        <img src='../../client/assets/user.png'/>
        <div>
          <div id='name'>Will McCulloch</div>
          <div id='date-time-loc'>{data.start_date_local}</div>
        </div>
      </div>
      <div className='item-bottom'>
        <img src='../../client/assets/user.png'/>
        <div>

        </div>
      </div>
    </div>
  )
}

export default ActivityListItem;

