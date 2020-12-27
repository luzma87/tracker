import { useEffect, useState } from 'react';

const useUserStores = (firebase, userUid) => {
  const [isLoading, setLoading] = useState(false);
  const [stores, setStores] = useState([]);
  useEffect(() => {
    setLoading(true);
    const firebaseRef = (firebase.userStores(userUid)
      .onSnapshot((querySnapshot) => {
        let loadedStores = [];
        querySnapshot.forEach((doc) => {
          loadedStores.push(doc.data());
        });
        loadedStores = loadedStores.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        setStores(loadedStores);
      }));
    return () => firebaseRef();
  }, [firebase, userUid]);
  return {
    isLoading, stores,
  };
};

const storesHooks = {
  useUserStores,
};

export default storesHooks;
