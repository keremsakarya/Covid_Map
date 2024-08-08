import axios from "axios";

const api = axios.create({
    baseURL: "https://covid-19-statistics.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': '3fe30a3be8mshdb46b05a133f93dp190a8ajsn63a5684de21d',
        'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
      }
})

export default api