import Vue from 'vue'
import axios from 'axios'

const axiosConfig = axios.create({
  baseURL: 'https://api.nasa.gov/',
  params: {
    api_key: 'TU6FE4MCPECh0DYgoLrervlGyavPM85fpUzyLfyH'
  }
})

Vue.prototype.$axios = axiosConfig
