import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../contexts/firebase";
import { getDocs, collection, query, getFirestore } from "firebase/firestore";

export default function useContent(target) {
  const contentArr = [];
  const [content, setContent] = useState([]);
  const { db } = useContext(FirebaseContext);
  const dbInstance = getFirestore(db);

  // We're using firebase to access the collection of content (films or series),
  // once we have that info back from firebase, we have a new array of all the content data
  // and we can then use it on the browse page to display cards for every piece of media,
  // while also separating out films and series.
  const contentGrabber = async () => {
    const q = query(collection(dbInstance, target));
    const querySnapshot = await getDocs(q);

    // We're pulling out the docId here so that we can have a unique ID on each item to act as the key
    if (querySnapshot) {
      console.log("check");
      querySnapshot.forEach((doc) => {
        contentArr.push({ [doc.id]: doc.data() });
      });

      setContent(contentArr);
    }
  };

  useEffect(() => {
    contentGrabber().catch((error) => {
      console.log(error.message);
    });
  }, []);

  return { [target]: content };
}
