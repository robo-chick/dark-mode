import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Events from './Events';

export default function EventList() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.coingecko.com/api/v3/events")
            .then(response => {
                console.log(response.data);
                setEvents(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {events.map(event => {
                return (
                   <Events
                     type={event.type}
                     title={event.title}
                     description={event.description}
                     organizer={event.organizer}
                     start_date={event.start_date}
                     />    
                )
            })}
            
        </div>
    )
}


