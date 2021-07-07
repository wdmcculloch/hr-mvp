import React from 'react';
import ActivityListItem from './ActivityListItem.jsx';

function ActivityList (props) {
  let data = props.activities;
  console.log(data);
  const listItems = data.map((activity) =>
    <ActivityListItem  key={activity.id} activity={activity}/>
  );
  return (
    <div>
     {listItems}
    </div>
  )
}

export default ActivityList;


