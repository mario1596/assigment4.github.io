
// 92da120d
//faa39a4483bd9f51b72e4b9e60d25c78
    
$(document).ready(function(){
    
    /* paso 1 */ 
    
$("#formid").on("submit",function(e){ /* primer paso poner el form con el submit y la e para evitar el parpadeo */
    
    //a
    
    var x = $("#search").val(); /* el inputfield se llama y se previene que parpadee con el prevent */
    
    
     var fetchweather;
     
    
//c
    e.preventDefault();
    //b
    console.log(x);
//d
    fetchweather(x);
    forecast(x);
    console.log(fetchweather);
    
   function fetchweather(x){
      
    $.ajax({   
        
       method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + x + "&APPID=faa39a4483bd9f51b72e4b9e60d25c78",
        dataType: "json"
    }).done(function(result){
        
        
        var C = ((result.main.temp) - 273.15).toFixed(2) ;
        var Mi = ((result.main.temp_min) - 273.15).toFixed(2) ;
        var Ma = ((result.main.temp_max) - 273.15).toFixed(2) ;
        var placeholder = "";
        var weatherarray = result.weather;
        $.each(weatherarray, function(index, wea){
          
     
      //     var icon = "http://openweathermap.org/img/w/" + wea.icon +".png"; 
            
               var icons = "icons/" + wea.icon +".png"; 
            
            
        placeholder = ` <div class="container text-center">
  <img src="${icons}" id="icono">
    <h5 class="text-light">${C}&#160;&#160;	&#8451;</h5>
    <h5 class="text-light">${wea.description}</h5>
    <h2 class="text-light">${x} ${result.sys.country} </h2>
</div>
<div class="row mt-5 text-center">
<div class="col-2">
<h4 class="text-light">Min <br> ${Mi}&#160;&#160;	&#8451; </h4>
</div>
<div class="col-2">
<h4 class="text-light">Max <br> ${Ma}&#160;&#160;	&#8451; </h4>
</div>
<div class="col-2">
<h4 class="text-light">Humidity <br> ${result.main.humidity}% </h4>
</div>
<div class="col-2">
<h4 class="text-light">Visibility <br>${result.visibility}</h4>
</div>

<div class="col-2">
<h4 class="text-light">Wind Speed <br>${result.wind.speed}</h4>
</div>

<div class="col-2">
<h4 class="text-light">Pressure <br> ${result.main.pressure} </h4>
</div>

</div>

`;
         
        // condiciones para cambiar de fondo de pantalla con el clima dia y noche
            
        if(wea.icon == "01d" ) 
        { 
        $(".bgi1").css("background-image" , "url(img/sunny.jpg)");       
        }
            
        if(wea.icon == "01n" ) 
        { 
        $(".bgi1").css("background-image" , "url(img/sunny.jpg)");       
        }
         
        if(wea.icon == "02d") 
        { 
        $(".bgi1").css("background-image" , "url(img/pcloudy.jpg)");     
        }
            
         if(wea.icon == "02n") 
        { 
        $(".bgi1").css("background-image" , "url(img/pcloudyn.jpg)");     
        }
            
        if(wea.icon == "03d" | wea.icon == "04d") 
        { 
        $(".bgi1").css("background-image" , "url(img/cloudy.jpg)");     
        }
          
        if(wea.icon == "03n" | wea.icon == "04n") 
        { 
        $(".bgi1").css("background-image" , "url(img/cloudyn.jpg)");     
        }
        
            
        if(wea.icon == "09d" | wea.icon == "10d") 
        { 
        $(".bgi1").css("background-image" , "url(img/rainy.jpg)");     
        }
        
         if(wea.icon == "09n" | wea.icon == "10n") 
        { 
        $(".bgi1").css("background-image" , "url(img/rainyn.jpg)");     
        }
            
        if(wea.icon == "11d" ) 
        { 
        $(".bgi1").css("background-image" , "url(img/thunderstorm.jpg)")   
        }
            
            if(wea.icon == "11n" ) 
        { 
        $(".bgi1").css("background-image" , "url(img/thundern.jpg)")   
        }
                       
        if(wea.icon == "13d" ) 
        { 
        $(".bgi1").css("background-image" , "url(img/snow.jpg)");       
        }
            
        if(wea.icon == "13n" ) 
        { 
        $(".bgi1").css("background-image" , "url(img/snown.jpg)");       
        }
            
        if(wea.icon == "50d" ) 
        { 
        $(".bgi1").css("background-image" , "url(img/foggy.jpg)");       
        }
        
        if(wea.icon == "50n" ) 
        { 
        $(".bgi1").css("background-image" , "url(img/foggy.jpg)");       
        }
            
            // aqui va la vaina de las imagenes
            
            $("#weatherinfo").html(placeholder);
            
        });
        
        
        console.log(result);
    });
       
   };
    
    
    
});
    
    
    
 
function forecast(x){
    
    $.ajax({
        
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + x + "&units=metric&APPID=faa39a4483bd9f51b72e4b9e60d25c78",
        dataType: "json"
        
    }).done(function(result){
        
       
    console.log(result);    
     
    var forecastarray = result.list;    
        
    let foricon1 = "icons/" + forecastarray[6].weather[0].icon + ".png";
    let foricon2 = "icons/" + forecastarray[14].weather[0].icon + ".png";
    let foricon3 = "icons/" + forecastarray[22].weather[0].icon + ".png";
    let foricon4 = "icons/" + forecastarray[30].weather[0].icon + ".png";
    let foricon5 = "icons/" + forecastarray[38].weather[0].icon + ".png";
        
     
    var n = new Date();   
    var days = new Array(7);
    
    days[0] = "Sunday";
    days[1] = "Monday";
    days[2] = "Tuesday";
    days[3] = "Wednesday";
    days[4] = "Thursday";
    days[5] = "Friday";
    days[6] = "Saturday";
    
    var w = days[n.getDay()];
        
        
        var placeholder2 = "";
        var fc1;
        var fc2;
        var fc3;
        var fc4;
        var fc5;
        
        
        if (w == "Sunday"){
        
        fc1 = "Monday";
        fc2 = "Tuesday";
        fc3 = "Wednesday";
        fc4 = "Thursday";
        fc5 = "Friday";   
        }
        
        
            if (w == "Monday"){
        
        fc1 = "Tuesday";
        fc2 = "Wednesday";
        fc3 = "Thursday";
        fc4 = "Friday";
        fc5 = "Saturday";   
        }
        
        
            if (w == "Tuesday"){
        
        fc1 = "Wednesday";
        fc2 = "Thursday";
        fc3 = "Friday";
        fc4 = "Saturday";
        fc5 = "Sunday";   
        }
        
        
            if (w == "Wednesday"){
        
        fc1 = "Thursday";
        fc2 = "Friday";
        fc3 = "Saturday";
        fc4 = "Sunday";
        fc5 = "Monday";   
        }
        
        
            if (w == "Thursday"){
        
        fc1 = "Friday";
        fc2 = "Saturday";
        fc3 = "Sunday";
        fc4 = "Monday";
        fc5 = "Tuesday";   
        }
        
        if (w == "Friday"){
        
        fc1 = "Saturday";
        fc2 = "Sunday";
        fc3 = "Monday";
        fc4 = "Tuesday";
        fc5 = "Wednesday";   
        }
        
        if (w == "Saturday"){
        
        fc1 = "Sunday";
        fc2 = "Monday";
        fc3 = "Tuesday";
        fc4 = "Wednesday";
        fc5 = "Thursday";   
        }
        
        console.log(n);
        
        placeholder2 = `
    <div class="row">    
<div class="col col-lg">
 <h5 class="text-light"> ${fc1} </h5>
<img src="${foricon1}" id="icono">
<h5 class="text-light">${forecastarray[6].main.temp}&#160;&#160;	&#8451;</h5>
</div>
<div class="col col-lg">
<h5 class="text-light"> ${fc2} </h5>
<img src="${foricon2}" id="icono">
<h5 class="text-light">${forecastarray[14].main.temp}&#160;&#160;	&#8451;</h5>
</div>
<div class="col col-lg">
<h5 class="text-light"> ${fc3} </h5>
<img src="${foricon3}" id="icono">
<h5 class="text-light">${forecastarray[22].main.temp}&#160;&#160;	&#8451;</h5>
</div>
<div class="col col-lg">
<h5 class="text-light"> ${fc4} </h5>
<img src="${foricon4}" id="icono">
<h5 class="text-light">${forecastarray[30].main.temp}&#160;&#160;	&#8451;</h5>
</div>
<div class="col col-lg">
<h5 class="text-light"> ${fc5} </h5>
<img src="${foricon5}" id="icono">
<h5 class="text-light">${forecastarray[38].main.temp}&#160;&#160;	&#8451;</h5>
</div>
    </div>

`;
        
        $("#weatherday").html(placeholder2);
        
    });
    
    
    
}    
    
    

}); //end of device ready 

             








