<!-- string parsing is not implemented so cities must begin with a capital letter! -->

<script setup>
    import WeatherComponent from '../components/WeatherComponent.vue'
    import { cityList } from '../assets/constants.js'
</script>

<script>
    export default {
        components: {
            WeatherComponent
        },
        data(){
            return {
                query: null,
                currentCity: '',
                selectedCity: '',
                weatherInfo: null
            }
        },
        methods: {
            async fetchWeather(e) {
                console.log(Object.keys(cityList));
                console.log(`My query: ${this.query}`);
                if(!(Object.keys(cityList).includes(this.query))) { 
                    alert('That city could not be found in the database')
                    return
                }
                this.selectedCity = this.query
                this.weatherInfo = await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityList[this.selectedCity].lat}&longitude=${cityList[this.selectedCity].lon}&hourly=temperature_2m&current_weather=true`)).json()
                this.currentCity = this.selectedCity
                e.preventDefault()
                console.log(this.weatherInfo)
            }
        },
    }
</script>

<template>

    <div class="table">
        <input type="text" v-model="query">
        <input type="button" value="Search" @click="fetchWeather">
    </div>
    <WeatherComponent v-if="weatherInfo !== null" :name="currentCity" :temperature="weatherInfo.current_weather.temperature"></WeatherComponent>
</template>

<style scoped>
.table{
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 10px;
    height: fit-content;
    margin: auto;
    }
  #wrapper{
    height: 600px;
    width: auto;
  }
  #display{
    display: flex;
    justify-content: center;
    gap: 20px;

  }
</style>