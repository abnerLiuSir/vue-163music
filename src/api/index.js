import axios from 'axios'

export  const Get = (path,params) => {
    return axios.get(path, {
        params: params
    })
}

