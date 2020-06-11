import React from 'react';


const Events = props => {
    return (
        <div className="event-container">
                <h1>Event Type: {props.type}</h1>
                <h2>Event Title: {props.title}</h2>
                <p>Event Description: {props.description}</p>
                <p>Organizer: {props.organizer}</p>
                <p>Start Date: {props.start_date}</p>
                <p>Venue: {props.venue}</p>
                <p>City: {props.city}</p>
                <p>Country: {props.country}</p>
        </div>

    )
}

export default Events;