import { useEffect, useState } from "react";
import useData from "../Context/DataContext";
import usePagination from "../Context/PaginationContext";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { data: entries, dispatch } = useData();
  const {dispatch:pageDispatch} = usePagination();
  const { data } = entries;

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  useEffect(() => {
    const filtered = data.filter((elm) => {
      if (
        elm.name.toLowerCase().includes(search.toLowerCase()) ||
        elm.role.toLowerCase().includes(search.toLowerCase()) ||
        elm.email.toLowerCase().includes(search.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    
    dispatch({type:"filter",payload:{filtered}});
    dispatch({type:"setSearch",payload:{search}});

    
  }, [search,data]);

  useEffect(()=>{
    // if(!search) {
      pageDispatch({type:"reboot"})
    // }
  },[search])

  return (
    <input
      id="searchbar"
      className="border-2 px-2 border-slate-200 rounded-md"
      type="text"
      placeholder="Search..."
      onChange={handleChange}
      value={search}
    />
  );
};

export default SearchBar;
