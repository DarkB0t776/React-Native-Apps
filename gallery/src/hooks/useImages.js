import { useState, useEffect } from 'react';

export default () => {
  const [images, setImages] = useState([]);

  const onSubmitHandler = async searchTerm => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=5`,
        {
          headers: {
            Authorization:
              'Client-ID 896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043'
          }
        }
      );

      const images = await response.json();

      setImages(images.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    onSubmitHandler('ice cream');
  }, []);

  return [images, onSubmitHandler];
};
