import React from "react";
import "./ActivityList.css";
import Activity from "./Activity"

function ActivityList({activities}) {
    if (activities.length <= 0){
    return null;
  }
  return (
    <Activity items={activities}/>
  )
}

export default ActivityList;
