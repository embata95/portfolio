import { db } from '../../firebase-config'
import { collection, getDocs, orderBy, query } from "firebase/firestore"

function SetData({ tableName, setData, setDataIsLoading }) {
  const getData = async () => {
    const data = await getDocs(query(collection(db, tableName), orderBy("id", "desc")))
    setData(data.docs.map((doc) => doc.data()));
    setDataIsLoading(false);
  };
  getData();
}

export default SetData