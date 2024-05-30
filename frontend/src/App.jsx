import React, { useEffect, useState } from "react";

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {

      try {

        const response = await fetch("http://localhost:5001/api/data");
        const result = await response.json();
        // console.log(result)
        setData(result);
        if(result){
          setLoading(false)
          // response.json
        }
      } catch (error) {
        setError({error});
      }
    };

    fetchData();
  }, []);
// console.log(data)
  return (
    <div>
      {error && <div>{error}</div>}
   
        <ul>

          {loading && <div>Loading...</div>}
          {!loading && data.map((item, index) => (
            <li key={index}>{item.title}</li>
          
          ))}
        </ul>

        
    </div>
  );
};

export default DataFetchingComponent;
