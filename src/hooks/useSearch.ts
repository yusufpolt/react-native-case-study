import {useState} from 'react';

const useSearch = (searchData: any) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text: any) => {
    setSearchText(text);
    const results = searchData?.filter((item: any) =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchResults(results);

    return {
      searchText,
      searchResults,
      handleSearch,
    };
  };
};

export default useSearch;
