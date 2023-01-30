import React from 'react';
import { BlogType } from '../../models/Blog';
import noimg from './../../assets/images/noimg.svg';
import s from './Blog.module.css';

export const Blog: React.FC<BlogType> = ({ name, websiteUrl, description, ...restProps }) => {
  return (
    <div className={s.blog_wrapper}>
      <div className={s.blog_photo}>
        <img src={noimg} alt="blog" />
      </div>
      <div className={s.blog_description__block}>
        <h4 className={s.blog_description__title}>{name}</h4>
        <div className={s.blog_description__website}>
          Website: <a href={`${websiteUrl}`}>{websiteUrl}</a>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
