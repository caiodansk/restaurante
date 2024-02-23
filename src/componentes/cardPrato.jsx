import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardPrato(props) {
  return (
    <Card sx={{ maxWidth: 2048, marginBottom: '1rem' }}>
      <CardMedia
        sx={{ height: 140}}
        // image="https://img.freepik.com/fotos-gratis/interior-do-restaurante_1127-3394.jpg?w=740&t=st=1708373027~exp=1708373627~hmac=a3fdf6abe25c5b3e9df33c0136d230df54578d8c1fc4ba5425a4b0fd9b50472d"
        image = "https://img.freepik.com/fotos-gratis/delicioso-hamburguer-3d-com-fundo-simples_23-2150914807.jpg?w=740&t=st=1708727326~exp=1708727926~hmac=42e3fe379f466f164fef0ec04aee8b8f23f6e6ce1f756529f09c8a5ebb5116aa"
        title="Imagem de espaço restaurante"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.prato.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.prato.ingredientes}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.prato.descricao}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="button" display="block" gutterBottom sx={{color: '#1769aa'}}>
          {props.prato.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
        </Typography>
        <Typography variant="button" display="block" gutterBottom sx={{color: '#1769aa'}}>
          {props.prato.tempoPreparo} min
        </Typography>
      </CardActions>
    </Card>
  );
}