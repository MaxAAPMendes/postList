import React from 'react';
import { observer } from 'mobx-react-lite';
import PostStore from '../store/posts';
import {
  Button, makeStyles, Dialog, Divider
} from '@material-ui/core/';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';

const estilos = makeStyles({
  comentario: {
    display: 'grid',
    fontSize: '15px',
    color: '#222222'
  },
  rotulo: {
    fontWeight: "bold",
  }, 
  titulo: {
    color: '#CA860A',
    fontWeight: 'bold',
  }
});

const Detalhes = observer(({listaComent, loading, id}) => {
  const classes = estilos();
  
  return (
    <div>
      <Dialog
        open={PostStore.estado}
        onClose={() => PostStore.alternarEstadoDetalhes()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle 
          id="alert-dialog-title"
          className={classes.titulo}
        >
          {`Comentários do post ID ${id}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {loading && <CircularProgress />}
          {listaComent.map(comentario => (
            <div key={comentario.id} className={classes.comentario}>
              <p>
                <span style={{fontWeight: 'bold'}}>Email:</span> {comentario.email}
              </p>
              <span>
                <span style={{fontWeight: 'bold'}}>Comentário: </span>{comentario.body}
              </span>
              <Divider />
            </div>
          ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => PostStore.alternarEstadoDetalhes()} color="primary" autoFocus>
            Sair
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default Detalhes;