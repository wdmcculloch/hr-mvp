import React from 'react';
import ActivityListItem from './ActivityListItem.jsx';

function ActivityList (props) {
  let data = props.activities;
  data = data.reverse();

  const listItems = data.map((activity) =>
    <ActivityListItem  key={activity.id} activity={activity} modal={props.modal}/>
  );
  return (
    <div >
      <h3 id='feed-header'>Activity Feed</h3>
      <div className='feed'>
        {listItems}
      </div>
    </div>
  )
}

export default ActivityList;


