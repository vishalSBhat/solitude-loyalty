import React from "react";
import TimelineCard from "./TimelineCard";

const Timeline = (props) => (
  <div className="timeline-container pt-5">
    <h2 style={{ fontSize: "min(2rem, 6vw)" }} className="pb-3">
      {props.customer.name}'s Timeline ,
    </h2>
    <div className="timeline-card-container">
      {props.customer.history.map((each, i) => (
        <React.Fragment key={i}>
          <TimelineCard date={each.date} items={each.items} />
          <div className="timeline-line"></div>
        </React.Fragment>
      ))}
      {props.customer.redeem_info.info && (
        <TimelineCard redeem_info={props.customer.redeem_info} />
      )}
    </div>
  </div>
);

export default Timeline;
