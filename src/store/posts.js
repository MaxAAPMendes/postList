import { decorate, observable } from 'mobx';

class PostStore {
  constructor() {
    this.numPag = 1;
    this.estadoDetalhes = false;
    this.alvo = '';
    this.idpost = 0;
  }

  carregarNumPage(num) {
    this.numPag = num;
  }

  get numPagina() {
    return this.numPag;
  }

  alternarEstadoDetalhes() {
    this.estadoDetalhes = !this.estadoDetalhes;
  }

  carregarDetalhes(alvo, id) {
    this.alvo = alvo;
    this.idpost = id;
  }
  get estado() {
    return this.estadoDetalhes;
  }
  get alvoClique() {
    return this.alvo;
  }
  get idPostDetalhes() {
    return this.idpost;
  }
}

decorate(PostStore, {
  numPag: observable,
  alvo: observable,
  estadoDetalhes: observable,
  idpost: observable,
});

export default new PostStore();