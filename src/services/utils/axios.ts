import axios from 'axios'

const clienteaxios = axios.create({
  baseURL: import.meta.env.API,
  headers:{
    'Authorization': `token ${import.meta.env.Token}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type':'application/json'
  }
})

export default clienteaxios
