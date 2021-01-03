import { useEffect, useState } from 'react';

const useUserCategories = (firebase, userUid) => {
  const [isLoading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setLoading(true);
    const firebaseRef = (firebase.userCategories(userUid)
      .onSnapshot((querySnapshot) => {
        let loadedCategories = [];
        querySnapshot.forEach((doc) => {
          loadedCategories.push(doc.data());
        });
        loadedCategories = loadedCategories.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        setCategories(loadedCategories);
      }));
    return () => firebaseRef();
  }, [firebase, userUid]);
  return {
    isLoading, categories,
  };
};

const categoriesHooks = {
  useUserCategories,
};

export default categoriesHooks;
