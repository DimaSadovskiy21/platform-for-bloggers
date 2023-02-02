import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getPost } from '../store/reducers/postSlice';

export const PostPage = () => {
  const { post, loading, error } = useAppSelector((state) => state.postReducer);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useLayoutEffect(() => {
    id && dispatch(getPost(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Загрузка</div>;
  }
  return (
    <div>
      <PageTitle title={'Posts'} breadcrumbs={post.blogName} />
      {error && <div>{error}</div>}
      {post.id === id && post.id}
    </div>
  );
};
