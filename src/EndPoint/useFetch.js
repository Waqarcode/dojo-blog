import { useState, useEffect } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then(res => {
        if(!res.ok){
            if (res.status===404) {
              throw Error("Data not Available")
            }
            else{
              throw Error("Could not fetch data")
            }
            console.log(res);
        }
            return res.json();
      })
      .then(data => {
        console.log(data);
        setIsLoading(false);
        setError(null)
        setData(data);
      })
      .catch(err => {
        //debugger;
        if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        
      })
      return () => abortCont.abort();
  }, [url])

//   useEffect(() => {
//     fetch(url)
//       .then(res => {
//         if(!res.ok){
//             throw Error("Could not fetch data")
//             console.log(res);
//         }
//             return res.json();
//       })
//       .then(data => {
//         console.log(data);
//         setIsLoading(false);
//         setError(null)
//         setData(data);
//       })
//       .catch(err => {
//         //debugger;
//         setIsLoading(false);
//         setError(err.message);
//       })
//   }, [url])

  return {data, isLoading, error};
}

export default useFetch;