import * as instance from 'axios';

const AxiosClient = instance.create({
    baseURL: 'http://localhost:8080/api-market/'
})

const requestHandler = (request) => {
    request.headers['Accept'] = 'application/json'
    request.headers['Content-Type'] = 'application/json'
    const session = JSON.parse(localStorage.getItem('user')) || null
    if (session?.isLogged)
        request.headers['Authorization'] = `Bearer ${session.token}`
    return request
}

const errorResponseHandler = (error) => {
    return Promise.reject(error)
}

const succesResponseHandler = (response) => Promise.resolve(response.data)

AxiosClient.interceptors.request.use(
    requestHandler,
    (error) => Promise.reject(error)
)

AxiosClient.interceptors.response.use(
    succesResponseHandler,
    (error) => errorResponseHandler(error) //Este es lo mismo que el de arriba
)

export default AxiosClient