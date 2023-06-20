//SWR fetch the link api/current (for get data from url ())
// and store it in Global store
import useSWR from 'swr';

// get data from url (hook)
import fetcher from '@/libs/fetcher';

const useUser = (userId: string) => {
  const { data, error, isLoading, mutate } = useSWR(userId ? `/api/users/${userId}` : null, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useUser;