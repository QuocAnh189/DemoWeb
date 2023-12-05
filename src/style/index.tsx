export interface IBlog  {
    _id: string;
    avatar: string;
    name: string;
    description: string;
    age: number;
    dislike: boolean;
    createdat: any;
};

export const InitBlog = {
    avatar: '',
    name: '',
    description: '',
    age: 0,
    dislike: false,
    createdat: ''
} as IBlog;
