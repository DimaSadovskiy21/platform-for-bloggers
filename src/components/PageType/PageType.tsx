import React from 'react';
import { BlogType } from '../../models/Blog';
import { ItemType } from '../../models/Item';
import { Blog } from '../Blog/Blog';
import { Select } from '../Select/Select';
import s from './PageType.module.css';

type PageTypePropsType = {
  type: 'blogs' | 'posts';
  title: string;
  value: string;
  items: ItemType[];
  setValue: (value: string) => void;
  elements: BlogType[];
};

export const PageType: React.FC<PageTypePropsType> = ({
  type,
  title,
  value,
  items,
  setValue,
  elements,
}) => {
  return (
    <div>
      <h3 className={s.page_title}>{title}</h3>
      <div className={s.page_container}>
        <div className={s.page_filter}>
          {type === 'blogs' && <input placeholder="Search" className={s.blogs_input__search} />}
          <Select value={value} items={items} setValue={setValue} />
        </div>
        {elements.map((blog) => (
          <Blog key={blog.id} {...blog}/>
        ))}
      </div>
    </div>
  );
};
