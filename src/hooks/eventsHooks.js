import { useEffect, useState } from 'react';

const useEvents = (firebase) => {
  const [isLoading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setLoading(true);
    const firebaseRef = (firebase.events()
      .onSnapshot((querySnapshot) => {
        let loadedEvents = [];
        querySnapshot.forEach((doc) => {
          loadedEvents.push(doc.data());
        });
        loadedEvents = loadedEvents.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
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
