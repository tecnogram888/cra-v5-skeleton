import React from 'react'
import { selectAllEvents, selectEventId } from './../reducers/eventSlice'
import { useSelector, useDispatch } from 'react-redux';

const EventView = (props) => {
    console.log('eventview', props)
    const { eventId } = props
    const { name, location } = useSelector(state => {
        console.log('eventview selector')
        return selectEventId(state, eventId)
    })
    return <div>
        <div>name: {name}</div>
        <div>location: {location}</div>
    </div>
}

const EventListView = (props) => {
    console.log('view')
    const allEvents = useSelector(selectAllEvents)
    console.log('eventlistview', allEvents)
    const x = allEvents.map((eventId) => { return <EventView eventId={eventId} key={eventId} /> })
    console.log(x)
    return allEvents.length ? <div>
        {x}
    </div>
        : <div>No Events</div>
}

export default EventListView