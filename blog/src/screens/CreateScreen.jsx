import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      initialValues
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Home'));
      }}
    />
  );
};

export default CreateScreen;
