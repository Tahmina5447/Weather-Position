const loadData=async(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7924c66a795892af0dffbb9699049591&units=metric`
    const res= await fetch(url);
    const data= await res.json();
    displayData(data);

}


const displayData=async(data)=>{
    // console.log(data.weather[0].main);
    // const temparatureId=document.getElementById('temparature');
    // temparatureId.innerText=`${data.main.temp}`
    // const weatherName=document.getElementById('weather-name');
    // weatherName.innerText=`${data.weather[0].main}`
    setvaluedynamic('temparature',`${data.main.temp}`);
    setvaluedynamic('weather-name',`${data.weather[0].main}`);
}


const setvaluedynamic=(id,valuedynamic)=>{
    const temparatureId=document.getElementById(id);
    temparatureId.innerText=valuedynamic;
}



document.getElementById('search-btn').addEventListener('click',function(){
    const searchFieldId=document.getElementById('search-field');
    const searchFieldValue=searchFieldId.value;
    searchFieldId.value="";
    if(searchFieldValue){
        const cityName=document.getElementById('city-name');
        cityName.innerText=searchFieldValue;
        loadData(searchFieldValue);
    }
})


loadData('Dhaka');