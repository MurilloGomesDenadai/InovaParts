import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5011'
    // baseURL: 'http://localhost:5011'
});


export async function Buscar(id) {
    const resp = await api.get(`/produto/busca/${id}`)

    return resp.data
};

export async function listarMercadoria() {
    const resp = await api.get(`/produto`)

    return resp.data
};