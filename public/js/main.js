const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById("city_name");

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status')

const datahide = document.querySelector('.middle_layer')

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerHTML = `please write the name of city before searching`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `http://api.weatherapi.com/v1/current.json?key=678e8d0248da45dd87574956242205&q=${cityVal}&aqi=no`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(response);
            const arrData = [data];

            city_name.innerText=`${arrData[0].location.name} ,${arrData[0].location.country}`;
            temp_real_val.innerText=arrData[0].current.temp_c;
            const tempMood = arrData[0].current.condition.text;

            if(tempMood=="Sunny"){
                temp_status.innerHTML = "<i class = 'fas fa-sun' style color: #eccc68;'></i>";
            }
            else if(tempMood=="Cloudy"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud' style color: #f1f2f6;'></i>";
            }
            else if(tempMood=="Patchy rain nearby"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style color: #a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML = "<i class = 'fas fa-sun' style color: #eccc68;'></i>";
            }
            datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerHTML = `Write city Name properly`;
            datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click',getInfo);