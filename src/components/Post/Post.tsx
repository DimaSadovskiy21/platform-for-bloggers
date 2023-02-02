import React from 'react';
import { NavLink } from 'react-router-dom';
import noimg from './../../assets/images/noimg.svg';
import s from './Post.module.css';
type PostType = {
  id: string;
  title: string;
  blogName: string;
  createdAt: string;
};

export const Post: React.FC<PostType> = ({ id ,title, blogName, createdAt, ...restProps }) => {
  const formatter = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  const date = formatter.format(Date.parse(createdAt)).replaceAll('/', '.');

  return (
    <NavLink to={`/posts/${id}`} className={s.post_wrapper}>
      <div className={s.post_photo}>
        <img src={noimg} alt="post" />
      </div>
      <div className={s.post_description}>
        <div className={s.post_smallImg}>
          <img className={s.post_smallImg_photo} src={noimg} alt="blog" />
        </div>
        <div>
          <h4 className={s.post_description__title}>{title}</h4>
          <p className={s.post_description__blogName}>{blogName}</p>
          <div className={s.post_description__date}>
            {date}
          </div>
        </div>
      </div>
    </NavLink>
  );
};
