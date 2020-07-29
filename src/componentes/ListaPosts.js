import React , { useState, useEffect } from 'react';
import {ApiPosts, ApiUsers} from '../api/api';
import Paginacao from './Paginacao';
import { observer } from 'mobx-react-lite';
import PostStore from '../store/posts';
import Detalhes from './Detalhes';
import {CircularProgress, Tooltip } from '@material-ui/core';

const ListaPosts = observer(() => {
  const [lista, setLista] = useState([]);
  const [usuario, setUsuario] = useState('');
  const [id, setId] = useState(0);
  const [listaCom, setListaComentarios] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const pagAtual = PostStore.numPagina;
  const [postPorPag, setPostPorPag] = useState(10);
  
  useEffect(() => {
    const consultarPosts = async () => {
      setCarregando(true);
      const resposta = await ApiPosts.get();
      setLista(resposta.data);
      setCarregando(false);
    };
    consultarPosts();
  },[]);
  
  const  indiceUltPost = pagAtual * postPorPag;
  const indicePriPost = indiceUltPost - postPorPag;
  const postAtual = lista.slice(indicePriPost, indiceUltPost);
  const numeroPags = lista.length/postPorPag;

  const detalhesPost = (event, id) => {
    consultarComentarios(id);
    PostStore.alternarEstadoDetalhes();
    PostStore.carregarDetalhes(event.target, id);
    setId(id);
  }

  const consultarComentarios = async (id) => {
    setCarregando(true);
    const resposta = await ApiPosts.get(`/${id}/comments`);
    setListaComentarios(resposta.data);
    setCarregando(false);
  };

  const consultarUser = async () => {
    const resposta = await ApiUsers.get(`/${pagAtual}`);
    setUsuario(resposta.data.name);
  };

  useEffect(()=>{
    consultarUser();
  });
  return (
    <div className="post-root">
      {carregando && <CircularProgress />}
      <div className="post-principal">
        <div className="post">
          <h3>Usuário: {usuario}</h3>
          {postAtual.map(post => (
            <Tooltip title="Clique para exibir comentários">
              <div 
                key={post.id}
                onClick={(event)=>detalhesPost(event, post.id)}
                className="item-post"
              >
                {post.title}
              </div>
            </Tooltip>
          ))
          }
        </div>
      <Paginacao numPags={numeroPags} />
      </div>
      <Detalhes listaComent={listaCom} loading={carregando} id={id}/>
    </div>
  );

});

export default ListaPosts;