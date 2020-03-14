import { useState, useEffect } from 'react';

export default () => {
  const [imgUrl, setImgUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const getImage = async id => {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/${id}`, {
        headers: {
          Authorization:
            'Client-ID 896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043'
        }
      });
      const image = await response.json();

      setImgUrl(image.urls.regular);
    } catch (e) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    getImage(id);
  }, []);

  return [imgUrl, getImage];
};
