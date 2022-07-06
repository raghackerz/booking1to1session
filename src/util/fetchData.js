/**
  * usage: 
  * let url = "/url"
  * fetchData(url,setData)
  * setData will be a setter of a react state
  * use fetchData inside useEffect to avoid infinite loop
  */

const fetchData = async (url, setData) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    setData(data);
    return data;
  }
  catch (err) {
    console.log("Something went wrong ... " + err);
  }
}

export default fetchData;
