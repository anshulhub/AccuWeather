const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
const day=document.getElementById("day");
const today_date = document.getElementById("today_date");
const time=document.getElementById("time");


const getInfo = async(event) => {
    event.preventDefault();

    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = `Enter the city name first`;
        datahide.classList.add("data_hide");
    }else{

        try{
            

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b1b8f1846ac7e72f6e7bd1b341d51e66`
            const response = await fetch(url);

            const data = await response.json();
            const arrData = [data];

            const lon = arrData[0].coord.lon;
            const lat = arrData[0].coord.lat;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}    (${tempMood}) `;
            console.log(lon);
            console.log(lat);
            
        

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #0097e6;'></i>";
            } else if (tempMood == "Mist") {
            temp_status.innerHTML =
                "<i class='fas  fa-wind' style='color: #a3c2c2;'></i>";
            } else if (tempMood == "Smoke") {
            temp_status.innerHTML =
                "<i class='fas  fa-smog' style='color: #99b3ff;'></i>";
            } else if (tempMood == "Haze") {
            temp_status.innerHTML =
                "<i class='fas fa-cloud-sun' style='color: #99b3ff;'></i>";
            } else if (tempMood == "Fog") {
                temp_status.innerHTML =
                    "<i class='fas fa-water' style='color: #D0D0D0'></i>";    
            } else if (tempMood == "Rain") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #2b8cb3;'></i>";
            } else {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";

            }
            datahide.classList.remove('data_hide');
            cityVal = "";
           
       
        }catch{
            cityVal = " ";
            datahide.classList.add("data_hide");
            city_name.innerText =  `Please enter the city name correctly `;
        }
        
    }
}
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
day.innerText = n;

const date = new Date();
var b=date.getDate();
// console.log();

var a = new Date();
var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sept";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
var p = month[a.getMonth()];

const r = `${b} ${p}`
today_date.innerText=r

const ti = new Date();
var hou = ti.getHours()
var tim = ti.getMinutes() 
if (tim>59) {
    tim=tim-60;
}
if(tim<10){
    tim="0"+tim
    }


var hou=`${hou}:${tim}`;
time.innerText=hou

submitBtn.addEventListener('click', getInfo);