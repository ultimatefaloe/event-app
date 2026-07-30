import React, { useEffect, useState } from 'react'
import { events } from '../data/events'

export const useEvent = () => {
  // add the loading state and error state to the hook
  const [eventsData, setEventsData] = useState(events);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    getEvents();
  }, []);

  const getEvents = () => {
    setEventsData(events);
  };

  const getEventById = (id) => {
    const event = events.find((event) => event.id === id);
    if (!event) {
      return null;
    }
    return event;
  };

  //  id: 7,
  //   name: "Mental Health Awareness Workshop",
  //   description:
  //     "Interactive workshop focusing on stress management, mindfulness techniques, and mental wellness in the workplace.",
  //   date: "2026-07-28T10:00:00",
  //   status: "upcoming",
  //   category: "workshop",
  //   location: "Convention Center, Downtown",
  //   createdAt: "2026-06-01T12:00:00",
  //   updatedAt: "2026-07-01T08:30:00",

  const createEvent = (eventData) => {
    const newEvent = {
      id: events.length + 1,
      name: eventData.name,
      description: eventData.description,
      date: eventData.date,
      status: eventData.status,
      category: eventData.category,
      location: eventData.location,
      createdAt: new Date().toISOString(),
      updatedAt: null,
    };

    setEventsData([newEvent, ...eventsData]);
  }


  const updateEvent = (id, data) => {
    const eventToBeUpdated = eventsData.find((event)=> event.id === id);

    if(!eventToBeUpdated) {
      setError(`Event with id ${id} not found`);
      return;
    }

    const updatedEvent = {
      ...eventToBeUpdated,
      ...data,
      updatedAt: new Date().toISOString(),
    }

    const updatedEvents = eventsData.map(e => e.id === id ? updatedEvent : e);

    setEventsData(updatedEvents);
  };


  const deleteEvent = (id) => {
    const updatedEvents = eventsData.filter((event) => event.id !== id);
    setEventsData(updatedEvents);
  };

  return {
    loading: false,
    error: null,
    eventsData,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
  };
}