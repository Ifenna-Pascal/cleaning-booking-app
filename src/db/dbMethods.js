import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  query,
  addDoc,
  where,
  updateDoc,
  doc,
  onSnapshot,
} from 'firebase/firestore';

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// collection db init
const db = getFirestore(app);
// initialize auth
export const auth = getAuth(app);
// collection ref
const colRef = collection(db, 'bookings');
// get Collection Data
const getCollectionData = async (type, setSortedOrders) => {
  let Query;
  // define query
  if (type !== 'all') {
    Query = query(colRef, where('status', '==', type));
  } else {
    Query = colRef;
  }
  onSnapshot(Query, (querySnapshot) => {
    setSortedOrders(
      querySnapshot.docs?.map((doc) => ({
        id: doc?.id,
        ...doc?.data(),
      }))
    );
  });
};
// add data to DB
const addDocument = async (arg) => {
  const { serviceType, email, address, name } = arg;
  const result = await addDoc(colRef, {
    serviceType,
    email,
    address,
    name,
    status: 'pending',
  });
  return result;
};
// update a document status
const updateDocument = async (id, newStatus, setLoading, loading) => {
  setLoading(true);
  console.log(loading, 'new Loading');
  try {
    const docRef = doc(db, 'bookings', id);
    const response = updateDoc(docRef, { status: newStatus });
    response && setLoading(false);
    return 'Data updated successfully.';
  } catch (error) {
    setLoading(false);
    console.log(error.message);
    return error.message;
  }
};
// Admin Login
const adminLogin = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
// custom auth hook
const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const sub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return sub;
  }, []);
  return { user: currentUser };
};
// logout
const logout = async () => {
  return signOut(auth);
};

// Export functions
export {
  getCollectionData,
  addDocument,
  updateDocument,
  adminLogin,
  useAuth,
  logout,
};
