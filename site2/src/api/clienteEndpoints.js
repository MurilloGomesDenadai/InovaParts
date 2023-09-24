import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5000'
});

//Login
export async function loginCliente(email, senha) {
    const resp = await api.post('/usuario/login', {
        email: email,
        senha: senha
    })

    return resp.data
};