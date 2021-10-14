// NPM packages
import {
  collection,
  getDocs,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";

// Create file
export async function createDoc(db, path, data) {
  await addDoc(collection(db, path), data);
}

// Read files
export async function getCollection(db, path) {
  const collectionReference = collection(db, path);
  const snapshop = await getDocs(collectionReference);
  const list = snapshop.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return list;
}

// Update document
export async function updateDocument(db, path, id, data) {
  const docReference = doc(db, path, id);
  await updateDoc(docReference, data);
}

// Delete document
export async function delDoc(db, path, id) {
  deleteDoc(doc(db, path, id));
}
