<script setup>
    import WeatherComponent from '../components/WeatherComponent.vue'
    import { cityList } from '../assets/constants.js'
</script>

<script>
export default {
    data() {
        return {
            weatherInfo: null,
            selectedCity: '',
            currentCity: ''
        }
    },
    methods: {
        async fetchWeather(e) {
        console.log(this.selectedCity);
        this.weatherInfo = await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityList[this.selectedCity].lat}&longitude=${cityList[this.selectedCity].lon}&hourly=temperature_2m&current_weather=true`)).json()
        this.currentCity = this.selectedCity
        e.preventDefault()
        console.log(this.weatherInfo);
        }
    }
}
</script>

<template>
      <div class="table">
        <label for="selector">Select city: </label>
        <select title="Select city" name="selector" v-model="selectedCity">
          <option v-for="city, key in cityList" :value="key">{{key}}</option>
        </select>
        <input type="button" value="See weather" @click="fetchWeather">
      </div>
      <WeatherComponent v-if="weatherInfo !== null" :name="currentCity" :temperature="weatherInfo.current_weather.temperature"></WeatherComponent>
</template>

<style scoped>
    .table{
        display: flex;
        height: auto;
        margin: auto;
        justify-content: center;
        gap: 10px;
        }
</style>