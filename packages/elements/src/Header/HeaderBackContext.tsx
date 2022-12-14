import getNamedContext from '../getNamedContext';

const HeaderBackContext = getNamedContext<
  { title: string; href?: string } | undefined
>('HeaderBackContext', undefined);

export default HeaderBackContext;
