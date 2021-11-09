import { db } from '../firebase'


export const getDocumentDinamico = (collection, doc) => {
  return new Promise((resolve, reject) => {
    db.collection(collection).doc(doc).get().then((doc) => {
      if (doc.exists) {
        let result = doc.data()
        result.key = doc.id
        resolve(result)
      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      reject(error);
    });
  })
}


export const getInfoCollectionAndWhere = async (collection, buscarParametro, buscarValor) => {
  return new Promise((resolve, reject) => {
    db.collection(collection).where(buscarParametro, "==", buscarValor).onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      resolve(docs)
    }, error => {
      reject(error)
    });
  })
}


export const getAllDocument = (collection, doc) => {
  return new Promise((resolve, reject) => {
    db.collection(collection).get()
    .then((querySnapshot) => {
      let info = []
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          data.key = doc.id 
          info.push(data)
        });
        resolve(info)
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    }).catch((error) => {
      reject(error);
    });
  })
}