/* 
** Home.jsx;
*/ 

import { memo, useEffect, useState } from 'react';
import { HeaderLayout } from '../tmplates/HeaderLayout';
import { PostCard } from '../organisms/card/PostCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase';
// import PropTypes from 'prop-types';

export const Home = memo(() => {
  // props
  // Context
  // hooks
  // State
  const [posts, setPosts] = useState([]);
  // function

  // Firestoreからデータ取得
  const getPosts = async () => {
    const data = await getDocs(collection(db,'posts'));
    // console.log('data: ', data);
    // console.log('data.docs: ', data.docs);
    // console.log('data.docs.map(( doc ) => ( doc )): ', data.docs.map(( doc ) => ( doc )));
    // console.log('data.docs.map(( doc ) => ( { ...doc.data() } )): ', data.docs.map(( doc ) => ( { ...doc.data() } )));
    // console.log('data.docs.map(( doc ) => ( { ...doc.data(), id:doc.id } )): ', data.docs.map(( doc ) => ( { ...doc.data(), id: doc.id } )));
    const dataArray =data.docs.map( doc => ( { ...doc.data(), id: doc.id } ) )
    setPosts(dataArray);
  }

  useEffect(() => {
    getPosts();
  }, [])
  
  return (
    <>
      <HeaderLayout>
        <div className="c-home">
          <ul className="c-home_list">
            {posts.map((posts)=>{
              return (
                <li key={posts.id} className="c-home_listItem">
                  <PostCard title={posts?.title} content={posts?.content} author={posts.author?.username}/>
                </li>
              )
            })}
          </ul>
        </div>
      </HeaderLayout>
    </>
  );
});
Home.displayName = 'Home';
Home.propTypes = {};