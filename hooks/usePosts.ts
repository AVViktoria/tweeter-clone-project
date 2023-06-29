//SWR fetch the link api/current (for get data from url ())
// and store it in Global store
import useSWR from 'swr';

// get data from url (hook)
import fetcher from '@/libs/fetcher';

const usePosts = (userId?: string) => {
  const url = userId ? `/api/posts?userId=${userId}` : '/api/posts';
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default usePosts;