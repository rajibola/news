import {ItemProps} from '../../types/types';
import {apiService} from '../../utils';

type UserResponse = {
  data: ReadonlyArray<ItemProps>;
};

export const loadNews = async () => {
  const result = await apiService('/articles?page=1&size=50', 'get');
  const data = (await result) as UserResponse;
  return data.data.map(news => ({
    ...news,
    comments: [],
  })) as ReadonlyArray<ItemProps>;
};

export const defaultImage =
  'https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

export const newsModel: ItemProps = {
  id: 63327,
  title: 'CHRISTMAS AND COVID: HOLIDAY PREDICTION FOR 2020',
  author: 'Akpevwe Abenabe',
  summary:
    'Phew! It has been an unexpected year. With the outbreak of the novel coronavirus, it certainly feels like the world is taking one step forward and two steps backwards. While for some, it may feel too early to put up the Christmas tree, we can all agree that the holiday season has undoubtedly been on our minds.',
  content:
    '<p><span style="color: rgb(41, 41, 41);">Phew! It has been an unexpected year. With the outbreak of the novel coronavirus, it certainly feels like the world is taking one step forward and two steps backwards. While for some, it may feel too early to put up the Christmas tree, we can all agree that the holiday season has undoubtedly been on our minds.</span></p>',
  news_source_id: 30182,
  aggregator: null,
  url: 'https://akpevwe-abenabe.medium.com/christmas-and-covid-holiday-prediction-for-2020-940c4796bbb0',
  status_id: 5,
  published_date: '2020-11-22 13:01:44',
  created_at: '2020-11-22 13:04:57',
  updated_at: '2020-11-22 13:04:57',
  additional_data: {
    banner: {
      title: '',
      url: 'https://akpevwe-abenabe.medium.com/christmas-and-covid-holiday-prediction-for-2020-940c4796bbb0',
    },
    image: {
      description: '',
    },
  },
  media: [
    {
      id: 24071,
      url: 'https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      media_type: {
        id: 1,
        type: 'image',
      },
    },
  ],
  tags: [
    {
      id: 2,
      name: 'topfeeds',
      description: 'Perferendis non omnis suscipit.',
      hidden: false,
    },
  ],
  categories: [
    {
      id: 10,
      name: 'Clane Features ',
      parent_category: null,
      default: true,
      status_id: 1,
      url: 'https://res.cloudinary.com/clane-company-ltd/image/upload/v1562765320/clane-originals_illustration.png',
      rank: 8,
    },
  ],
  news_source: {
    id: 30182,
    name: 'Medium.com ',
    logo_url: '',
  },
  comments: [],
};
