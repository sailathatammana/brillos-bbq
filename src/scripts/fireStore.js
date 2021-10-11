// NPM packages
import { collection, getDocs } from "firebase/firestore/lite";

// Read files
export async function getCollection(db, path) {
  const collectionReference = collection(db, path);
  const snapshop = await getDocs(collectionReference);
  const list = snapshop.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return list;
}
