import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEvent } from '../reducers/eventSlice'

export const AddEventForm = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')

    const dispatch = useDispatch()

    const onNameChanged = e => setName(e.target.value)
    const onLocationChanged = e => setLocation(e.target.value)

    const onSavePostClicked = () => {
        if (name && location) {
            dispatch(
                addEvent({
                    name,
                    location
                })
            )

            setName('')
            setLocation('')
        }
    }

    return (
        <section>
            <h2>Add a New Event</h2>
            <form>
                <label htmlFor="eventName">Event Name:</label>
                <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    value={name}
                    onChange={onNameChanged}
                />
                <label htmlFor="eventLocation">Location:</label>
                <textarea
                    id="eventLocation"
                    name="eventLocation"
                    value={location}
                    onChange={onLocationChanged}
                />
                <button type="button" onClick={onSavePostClicked}>Save Event</button>
            </form>
        </section>
    )
}