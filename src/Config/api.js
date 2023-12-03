import { useEffect, useState } from "react";

export const url = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

export const Fetch = (url) =>{
 const [data , setData] = useState(null); 
  
    useEffect(() => {
      const dataFetch = async () => {
        try {
        const fetchData = await (await fetch(url)).json();
        setData(fetchData);
        }
        catch(e) {
          // throw e("something wrong");
          // console.log(e.type)
          console.log('Not connected to internet')
        }
      };
  
      dataFetch();
    }, []);
  
    return data;
  };