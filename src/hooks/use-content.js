import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../contexts/firebase";
import { getDocs, collection, doc } from "firebase/firestore";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { db } = useContext(FirebaseContext);

  // We're using firebase to access the collection of content (films or series),
  // once we have that info back from firebase, we have a new array of all the content data
  // and we can then use it on the browse page to display cards for every piece of media,
  // while also separating out films and series.
  const contentGrabber = async () => {
    console.log("turkey");

    const contentRef = collection(db, target);
    console.log("pluck");
    const contentSnap = await getDocs(contentRef);

    // We're pulling out the docId here so that we can have a unique ID on each item to act as the key
    if (contentSnap.exists()) {
      const allContent = contentSnap.docs.map((contentObj) => ({
        ...contentObj.data(),
        docId: contentObj.id,
      }));

      setContent(allContent);
    }
  };

  useEffect(() => {
    contentGrabber().catch((error) => {
      console.log(error.message);
    });
  }, []);

  return { [target]: content };
}
