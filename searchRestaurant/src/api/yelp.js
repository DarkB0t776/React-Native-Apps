import axios from 'axios';

export default axios.create({
  baseURL: ' https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer AGaKitPjY7YSuQ-IWd8UCRgsDFy6DKyU3crYialsUyF8ayx90qdJgePeW_OspOXf7AJKJgdIij6OVyKe-8D1eG8ovV3CU8GGZlstORV-UMvh32fXan64J3c9FU9qXnYx'
  }
});