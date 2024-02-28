import {useQuery} from 'react-query';
import {handleGetProducts} from '../services/api';
import {useCallback, useEffect, useRef, useState} from 'react';

const useGetProducts = () => {
  const {data, isLoading, refetch} = useQuery({
    queryKey: ['products'],
    queryFn: handleGetProducts,
  });
  const [refreshing, setRefreshing] = useState(false);
  const [sortedData, setSortedData] = useState(null);

  const refRBSheet: any = useRef();

  const onRefreshing = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      refetch();
      setRefreshing(false);
    }, 2000);
  }, []);

  const sortByPriceAscending = useCallback(() => {
    if (sortedData) {
      const sorted: any = [...sortedData].sort(
        (a: any, b: any) => a.price - b.price,
      );
      setSortedData(sorted);
      refRBSheet.current.close();
    }
  }, [sortedData]);

  const sortByPriceDescending = useCallback(() => {
    if (sortedData) {
      const sorted: any = [...sortedData].sort(
        (a: any, b: any) => b.price - a.price,
      );
      setSortedData(sorted);
      refRBSheet.current.close();
    }
  }, [sortedData]);

  const sortByAlphabeticalAscending = useCallback(() => {
    if (sortedData) {
      const sorted: any = [...sortedData].sort((a: any, b: any) =>
        a.name.localeCompare(b.name),
      );
      setSortedData(sorted);
      refRBSheet.current.close();
    }
  }, [sortedData]);

  const sortByAlphabeticalDescending = useCallback(() => {
    if (sortedData) {
      const sorted: any = [...sortedData].sort((a: any, b: any) =>
        b.name.localeCompare(a.name),
      );
      setSortedData(sorted);
      refRBSheet.current.close();
    }
  }, [sortedData]);

  useEffect(() => {
    if (data) {
      setSortedData(data);
    }
  }, [data]);

  return {
    data: sortedData || data,
    isLoading,
    refetch,
    refreshing,
    onRefreshing,
    refRBSheet,
    sortByPriceAscending,
    sortByPriceDescending,
    sortByAlphabeticalAscending,
    sortByAlphabeticalDescending,
  };
};

export default useGetProducts;
