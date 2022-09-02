import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import {
    getFirestore, 
    collection, 
    getDocs, 
    query, 
    addDoc,
    where
} from 'firebase/firestore';


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// collection db init
const db = getFirestore(); 

// collection ref
const colRef = collection(db, 'bookings');

// get Collection Data
const  getCollectionData = async(type) => {
    let Query;
    // define query
    if (type !== 'all') {
        Query = query(colRef, where("status", "==", type ));
    }else {
        Query = colRef
    }
     const results = await getDocs(Query);
     return results.docs.map(result => {
        return {
             ...result.data(),
            id:result.id
        }
     })
}

// add data to DB
const addDocument = async (arg) => {
   const  {serviceType, email, address, name } = arg;
   const result = await addDoc(colRef, {
        serviceType,
        email,
        address,
        name,
        status: "pending"
    })
    return result;
}

export {
    getCollectionData,
    addDocument
}