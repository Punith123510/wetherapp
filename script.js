let weather={
    apiKey:"0c4fa64c8f4188f539daaae176864629",
        fetchWeather:function(city){
            
       fetch("https://api.openweathermap.org/data/2.5/weather?q="
       +city+"&appid="+this.apiKey)
        
            .then(response=>response.json())
            .then(data=>this.displayWeather(data))
        },
       displayWeather:function(data){
        const  {name}=data;
        const {icon,description}=data.weather[0];
        const {humidity}=data.main;
        const tem=data.main.temp;
        const temp=tem-273.15;
        const {speed}=data.wind;
        
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText="weather in "+name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".humidity").innerText="Humidity:"+humidity+"%";
        document.querySelector(".wind").innerText="wind speed:"+speed+"km/h";
        document.querySelector(".weather").classList.remove("loading");
       
        document.body.style.backgroundImage="url(https://l13.alamy.com/360/PN94GT/geneva-old-town-20-gigapixel-skyline-360-panorama-switzerland-PN94GT.jpg)"
       },
       search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
       },
      };
        document.querySelector(".search button").addEventListener("click",function(){
           weather.search();
    
           
        })
          document.querySelector(".search-bar").addEventListener("keyup",function(event){
            if (event.key=="enter"){
                weather.search();
                
            }
            
          });
        