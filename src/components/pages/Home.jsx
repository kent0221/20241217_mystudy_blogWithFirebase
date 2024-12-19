/* 
** Home.jsx;
*/ 

import { memo } from 'react';
import { HeaderLayout } from '../tmplates/HeaderLayout';
import { PostCard } from '../organisms/card/PostCard';
// import PropTypes from 'prop-types';

export const Home = memo(() => {
  // props
  // Context
  // hooks
  // State
  // function

  const data = {
    title: 'タイトル',
    content: '内容',
    author: 'Ken',
  }

  return (
    <>
      <HeaderLayout>
        <div className="c-home">
          <ul className="c-home_list">
            {[...Array(4)].map((_, id)=>{
              return (
                <li key={id} className="c-home_listItem">
                  <PostCard title={data.title} content={data.content} author={data.author}/>
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