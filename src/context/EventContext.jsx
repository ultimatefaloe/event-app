import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const EventContext = createContext(null);

const EVENTS_KEY = "event_app_events";

function getAllEvents() {
  const raw = localStorage.getItem(EVENTS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveAllEvents(events) {
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
}

export function EventProvider({ children }) {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);

  // Load events belonging to the logged in user whenever user changes
  useEffect(() => {
    if (!user) {
      setEvents([]);
      return;
    }
    const all = getAllEvents();
    setEvents(all.filter((e) => e.ownerId === user.id));
  }, [user]);

  const refreshFromStorage = (ownerId) => {
    const all = getAllEvents();
    setEvents(all.filter((e) => e.ownerId === ownerId));
  };

  const addEvent = (eventData) => {
    if (!user) throw new Error("You must be logged in to create an event.");
    const all = getAllEvents();
    const newEvent = {
      id: crypto.randomUUID(),
      ownerId: user.id,
      createdAt: new Date().toISOString(),
      ...eventData,
    };
    const updated = [...all, newEvent];
    saveAllEvents(updated);
    refreshFromStorage(user.id);
    return newEvent;
  };

  const updateEvent = (id, eventData) => {
    if (!user) throw new Error("You must be logged in to update an event.");
    const all = getAllEvents();
    const updated = all.map((e) =>
      e.id === id && e.ownerId === user.id ? { ...e, ...eventData } : e
    );
    saveAllEvents(updated);
    refreshFromStorage(user.id);
  };

  const deleteEvent = (id) => {
    if (!user) throw new Error("You must be logged in to delete an event.");
    const all = getAllEvents();
    const updated = all.filter((e) => !(e.id === id && e.ownerId === user.id));
    saveAllEvents(updated);
    refreshFromStorage(user.id);
  };

  const getEvent = (id) => events.find((e) => e.id === id);

  const value = {
    events,
    addEvent,
    updateEvent,
    deleteEvent,
    getEvent,
  };

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>;
}

export function useEvents() {
  const ctx = useContext(EventContext);
  if (!ctx) {
    throw new Error("useEvents must be used within an EventProvider");
  }
  return ctx;
}
