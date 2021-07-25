import {StackNavigationProp} from '@react-navigation/stack';
import {TextStyle} from 'react-native';

export interface ItemProps {
  id: Number;
  title: String;
  author: String;
  summary: String;
  content: String;
  news_source_id: Number;
  aggregator: null;
  url: String;
  status_id: Number;
  published_date: String;
  created_at: String;
  updated_at: String;
  additional_data: {
    banner: {
      title: String;
      url: String;
    };
    image: {
      description: String;
    };
  };
  media: [
    {
      id: Number;
      url: string;
      media_type: {
        id: Number;
        type: String;
      };
    },
  ];
  tags: [
    {
      id: Number;
      name: String;
      description: String;
      hidden: Boolean;
    },
  ];
  categories: [
    {
      id: Number;
      name: String;
      parent_category: null;
      default: Boolean;
      status_id: Number;
      url: String;
      rank: Number;
    },
  ];
  news_source: {
    id: Number;
    name: String;
    logo_url: String;
  };
}

export interface CardProps {
  item: ItemProps;
  index: Number;
}

export interface ContainerProps {
  onPressBack?: () => void | Boolean;
  onPressRight?: () => void | Boolean;
  rightText?: String;
  title: String;
  children: React.ReactNode;
}

export interface FontSizeProps {
  type: 'big' | 'small' | 'medium';
  text: String;
  style?: TextStyle;
}

export type ViewNewsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ViewNews'
>;

export type HomeProps = {
  navigation: ViewNewsNavigationProp;
};

export type RootStackParamList = {
  Home: undefined;
  ViewNews: {item: ItemProps};
};
