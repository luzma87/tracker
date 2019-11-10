import { useEffect, useState } from 'react';

const useUser = (firebase, editId) => {
  const [isLoading, setLoading] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let firebaseRef;
    if (editId !== undefined) {
      setLoading(true);
      firebaseRef = (firebase.user(editId)
        .onSnapshot((querySnapshot) => {
          const editUser = querySnapshot.data();
          setUser({ ...editUser });
          setEditing(true);
          setLoading(false);
        })
      );
    }
    return () => firebaseRef && firebaseRef();
  }, [firebase, editId]);

  return {
    isLoading, isEditing, user,
  };
};

const usersHooks = {
  useUser,
};

export default usersHooks;
