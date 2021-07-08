import React from 'react';
import ActivityListItem from './ActivityListItem.jsx';

function ActivityList (props) {
  let data = props.activities;

  const listItems = data.map((activity) =>
    <ActivityListItem  key={activity.id} activity={activity}/>
  );
  return (
    <div className='feed'>
     {listItems}
    </div>
  )
}

export default ActivityList;


