import { useEffect, useState } from "react";
import { DataContext } from "./DataContex";



const DataProvider = ({children}) => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
    const fetchData=async()=>{
        const response=await fetch('/news.json');
        const result=await response.json();
        setData(result);
        setLoading(false);
    }
    fetchData();
    },[])
  const getPagedData = (page = 1, perPage = 10) => {
    const total = data.length;
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    const currentPage = Math.min(Math.max(1, page), totalPages);
    const start = (currentPage - 1) * perPage;
    const paged = data.slice(start, start + perPage);
    return { paged, total, totalPages, currentPage };
  };


    return (
     <DataContext value={{data,loading,getPagedData}}>
        {children}
    </DataContext>
    );
};

export default DataProvider;