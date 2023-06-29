
//SWR fetch the link api/current (for get data from url ())
// and store it in Global store
import useSWR from 'swr';

// get data from url (hook)
import fetcher from '@/libs/fetcher';

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useCurrentUser;