import { alterarImgCliente, alterarInfoCliente, buscarPorNomeCpf, cadastroCliente, deletarCliente, listarclientes, loginCliente, inserirCartao } from "../repository/usuarioRepository.js";

import { Router } from "express";
import multer from 'multer';

const server = Router();
const upload = multer({dest: 'storage/usuarioPerfil'});

server.post('/usuario', async (req, resp) => { 
    try {
        const cadastrar = req.body;
        
        if(!cadastrar.nome)
            throw new Error('Nome inválido.');

        const buscarCpf = await buscarPorNomeCpf(cadastrar.cpf)
        if(buscarCpf.length > 0 || cadastrar.cpf == undefined)
            throw new Error('CPF já cadastrado.');

        if(!cadastrar.telefone)
            throw new Error('Telefone Inválido.');

        if(!cadastrar.email)
            throw new Error('Email inválido.');

        if(!cadastrar.senha)
            throw new Error('Senha inválida.');

        const usuarioCadastrado = await cadastroCliente(cadastrar);
        resp.send(usuarioCadastrado);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.put('/usuario/:id/perfil', upload.single('perfil'), async (req, resp) => {
    try {
        const {id} = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImgCliente(imagem, id);
        if(resposta != 1)
            throw new Error('A imagem não pode ser alterada.');

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.post('/usuario/login', async (req, resp) => {
    try {
        const {email, senha} = req.body;
        const resposta = await loginCliente(email, senha);

        if(!resposta)
            throw new Error('Credenciais inválidas.')

        resp.send(resposta);
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.get('/usuario', async (req, resp) => {
    try {
        const dados = await listarclientes();
        resp.send(dados);

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.get('/usuario/busca', async (req, resp) => {
    try {
        const {nome, cpf} = req.query;
        const resposta = await buscarPorNomeCpf(nome, cpf);
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.put('/usuario/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const cliente = req.body;

        if(!cliente.nome)
            throw new Error('Nome inválido.');

        const buscarCpf = await buscarPorNomeCpf(cliente.cpf)
        if(buscarCpf.length > 0 || cliente.cpf == undefined)
            throw new Error('CPF já cadastrado.');

        if(!cliente.telefone)
            throw new Error('Telefone Inválido.');

        if(!cliente.email)
            throw new Error('Email inválido.');

        if(!cliente.senha)
            throw new Error('Senha inválida.');

        const resposta = await alterarInfoCliente(id, cliente);
        if(resposta != 1)
            throw new Error('Usuario não pode ser alterardo.');
        else
            resp.status(200).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})


server.delete('/usuario/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const resposta = await deletarCliente(id);

        if(resposta != 1)
            throw new Error('O cliente não pode ser deletado.');

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})


server.post('/cartao', async (req,resp) =>{

      
    try{
         
        const cadastrarCartao = req.body

        if(!cadastrarCartao.titular)
        throw new Error('Nome inválido.');

        if(!cadastrarCartao.cartao)
        throw new  Error('Numero inválido');

        if(!cadastrarCartao.validade)
        throw new Error('Validade inválida');

        if(!cadastrarCartao.cod_seguranca)
        throw new Error('Codigo de segurança inválido');

        if(!cadastrarCartao.parcelas)
        throw new Error('Parcelas inválidas');       
        
        const cartaoCadastrado  = await inserirCartao (cadastrarCartao);
        resp.send(cartaoCadastrado);

      } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }

})


export default server;