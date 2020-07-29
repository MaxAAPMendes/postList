import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { observer } from 'mobx-react-lite';
import PostStore from '../store/posts';

const estilos = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    paddingBottom: '3%' 
  },
}));

const Paginacao = observer(({numPags}) => {
  const classes = estilos();
  const [numPagina, setNumPagina] = useState(1);
  const paginaSelecionada = (event, number) => {
    event.preventDefault();
    setNumPagina(number);
    PostStore.carregarNumPage(number);
  };
  return (
    <div className={classes.root}>
      <Pagination
        page={numPagina}
        count={numPags}
        variant="outlined"
        shape="rounded"
        color="primary"
        onChange={(event, number)=>paginaSelecionada(event, number)}
      />
    </div>
  );
});

export default Paginacao;
