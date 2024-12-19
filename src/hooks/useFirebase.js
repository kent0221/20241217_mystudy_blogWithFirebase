/* 
** useFirebase.js
*/
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useCallback } from 'react';

import { auth, db } from '../../Firebase';

export const useFirebase = () => {
  // Context
  // State
  // function
  // 投稿記事データを保存する関数
  const storePost = useCallback( async ( title, content ) =>{
    const postData = await addDoc(collection(db, 'posts'), {
      title: title,
      content: content,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      }
    });    
    console.log('保存されたドキュメントID：', postData.id);
  },[])

  // Firestoreからデータを取得する関数
  const getPostsData = useCallback( async () => {
    const data = await getDocs(collection(db,'posts'));
    // console.log('data: ', data);
    // console.log('data.docs: ', data.docs);
    // console.log('data.docs.map(( doc ) => ( doc )): ', data.docs.map(( doc ) => ( doc )));
    // console.log('data.docs.map(( doc ) => ( { ...doc.data() } )): ', data.docs.map(( doc ) => ( { ...doc.data() } )));
    // console.log('data.docs.map(( doc ) => ( { ...doc.data(), id:doc.id } )): ', data.docs.map(( doc ) => ( { ...doc.data(), id: doc.id } )));
    const dataArray = data.docs.map( doc => ( { ...doc.data(), id: doc.id } ) )
    return dataArray
  }, [])


  return { storePost, getPostsData }
};