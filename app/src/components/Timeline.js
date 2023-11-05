import React from "react";

import AnimatedDiv from "./AnimatedDiv";
import Title from "./Title";


// timeline_components (hashmap): Should contain all details to be inserted
//      into the timeline, e.g. year, month, event, job title, etc.
class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.timeline_components = props.timeline_components || {}; // Initialize as an empty object if not provided
        this.variants = {
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 }
        }
        this.delay = 0.5;
    }

    parse_timeline_component(event_details, eventId) {
        this.delay += 0.1;
        return (
            <div className="timeline-event">
                <div className="timeline-obj"></div>
                <AnimatedDiv className="event-details" duration={0.75} delay={this.delay} variants={this.variants} key={eventId}>
                    <Title size={"extra-small"}>
                        {event_details['job_title']}
                    </Title>
                    <br></br>
                    <Title size={"tiny"}>
                        {event_details['start_date']} - {event_details['end_date']}
                    </Title>
                    <br></br>
                    <ul>
                        {event_details['role_details'].map(element => (
                            <li>{element}</li>
                        ))}
                    </ul>
                </AnimatedDiv>
            </div>
        );
    }

    render() {
        return (
            <div className="timeline-container">
                {Object.keys(this.timeline_components).map(eventId => (
                    this.parse_timeline_component(this.timeline_components[eventId], eventId)
                ))}
            </div>
        );
    }
}

export default Timeline;