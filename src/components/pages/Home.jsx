/* 
** Home.jsx;
*/ 
import { memo, useEffect, useState } from 'react';

import { HeaderLayout } from '../tmplates/HeaderLayout';
import { PostCard } from '../organisms/card/PostCard';
import { useFirebase } from '../../hooks/useFirebase';
// import PropTypes from 'prop-types';

export const Home = memo(() => {
  // props
  // Context
  // hooks
  const { getPostsData } = useFirebase();
  // State
  const [posts, setPosts] = useState([]);
  // function

  // Firestoreからデータ取得
  const getPosts = async () => {
    const dataArray = await getPostsData();
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
                  <PostCard id={posts.id} title={posts?.title} content={posts?.content} author={posts?.author}/>
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