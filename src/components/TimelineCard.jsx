import React from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardText } from "reactstrap";
import RedeemInfo from "./RedeemInfo";

const TimelineCard = (props) => {
  return (
    <Card className="timeline-card py-2 px-3">
      <CardTitle className="m-0">
        {props.date ? (
          <>
            Date : <strong>{props.date}</strong>
          </>
        ) : (
          "Offer"
        )}
      </CardTitle>
      <CardBody className="px-0 pt-2">
        {props.items && (
          <>
            <CardSubtitle>Items Ordered :</CardSubtitle>
            <CardText className="m-2">
              <ul className="list-unstyled p-2">
                {props.items.map((item, i) => (
                  <li
                    key={i}
                    className="pb-1 pl-2"
                    style={{ borderLeft: "3px solid black" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </CardText>
          </>
        )}
        {props.redeem_info && (
          <RedeemInfo
            info={props.redeem_info.info}
            items={props.redeem_info.items}
            redeem={props.redeem_info.redeem}
          />
        )}
      </CardBody>
    </Card>
  );
};
export default TimelineCard;
