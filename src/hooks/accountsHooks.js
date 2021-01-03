import { useEffect, useState } from 'react';

const useUserAccounts = (firebase, userUid) => {
  const [isLoading, setLoading] = useState(false);
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    setLoading(true);
    const firebaseRef = (firebase.userAccounts(userUid)
      .onSnapshot((querySnapshot) => {
        let loadedAccounts = [];
        querySnapshot.forEach((doc) => {
          loadedAccounts.push(doc.data());
        });
        loadedAccounts = loadedAccounts.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        setAccounts(loadedAccounts);
      }));
    return () => firebaseRef();
  }, [firebase, userUid]);
  return {
    isLoading, accounts,
  };
};

const accountsHooks = {
  useUserAccounts,
};

export default accountsHooks;
