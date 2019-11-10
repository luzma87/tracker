import { useEffect, useState } from 'react';

const useEvents = (firebase) => {
  const [isLoading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setLoading(true);
    const firebaseRef = (firebase.events()
      .onSnapshot((querySnapshot) => {
        const loadedEvents = [];
        querySnapshot.forEach((doc) => {
          loadedEvents.push(doc.data());
        });
        setEvents(loadedEvents);
      }));
    return () => firebaseRef();
  }, [firebase]);
  return {
    isLoading, events,
  };
};

const eventsHooks = {
  useEvents,
};

export default eventsHooks;
