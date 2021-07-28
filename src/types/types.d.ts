import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TextStyle} from 'react-native';

export interface RenderItemProps {
  item: CommentProps;
}

export interface ImageComponentProps {
  uri: string;
  type: 'big' | 'small';
}

export type CommentContainerProps = {
  onPressDelete?: () => void;
  onPressEdit?: () => void;
  author?: string;
  comment?: string;
};

export interface DialogBoxProps {
  show: boolean;
  onPressCancel?: () => void;
  onChangeAuthor?: (text: string) => void;
  onChangeContent?: (text: string) => void;
  onChangeTitle?: (text: string) => void;
  onPressSubmit?: () => void;
  authorValue: string;
  summaryValue: string;
  title?: string;
}

export interface CommentSectionProps {
  onPress?: () => void;
  onChangeAuthor?: (text: string) => void;
  onChangeContent?: (text: string) => void;
}

export interface CommentProps {
  newsId?: number;
  author?: string;
  content?: string;
  id?: string;
}

export interface ItemProps {
  id: number;
  title: string;
  author?: string;
  summary: string;
  content: string;
  news_source_id: Number;
  aggregator: null;
  url: string;
  status_id: Number;
  published_date: string;
  created_at: string;
  updated_at: string;
  additional_data: {
    banner: {
      title: string;
      url: string;
    };
    image: {
      description: string;
    };
  };
  media: {
    id: Number;
    url: string;
    media_type: {
      id: Number;
      type: string;
    };
  }[];
  tags: {
    id: Number;
    name: string;
    description: string;
    hidden: Boolean;
  }[];

  categories: [
    {
      id: number;
      name: string;
      parent_category: null;
      default: Boolean;
      status_id: Number;
      url: string;
      rank: Number;
    },
  ];
  news_source: {
    id: Number;
    name: string;
    logo_url: string;
  };

  comments: {
    author?: string;
    content?: string;
    id?: string;
  }[];
}

export interface CardComponentProps {
  item: ItemProps;
  index?: number;
  navigation?: HomeNavigationProp;
}

export interface CardProps {
  item: ItemProps;
  index?: Number;
}

export interface ContainerProps {
  onPressBack?: () => void | Boolean;
  onPressRight?: () => void | Boolean;
  rightText?: string;
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export interface FontSizeProps {
  color?: 'light' | 'dark';
  type: 'big' | 'small' | 'medium' | 'x-small';
  text: string | undefined;
  style?: TextStyle;
}

export type ViewNewsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ViewNews'
>;

export type HomeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type HomeProps = {
  navigation: HomeNavigationProp;
};

type ViewNewsRouteProp = RouteProp<RootStackParamList, 'ViewNews'>;

export type ViewNewsProps = {
  navigation: ViewNewsNavigationProp;
  route: ViewNewsRouteProp;
};

export type RootStackParamList = {
  Home: undefined;
  ViewNews: {item: ItemProps};
};
