import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        const data = response.data;
        setPokemonDetails({
          name: data.name,
          image: data.sprites.front_default,
          type: data.types[0].type.name,
          height: data.height / 10, // Converter de decímetros para metros
          weight: data.weight / 10, // Converter de hectogramas para quilogramas
        });
      })
      .catch((error) => {
        console.error('Erro ao obter os detalhes do Pokémon:', error);
      });
  }, [id]);

  if (!pokemonDetails) {
    return <div>Carregando...</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ maxWidth: 400 }}>
        <CardContent style={{ textAlign: 'center' }}>
          <Typography variant="h4" component="div">
            {pokemonDetails.name.toUpperCase()}
          </Typography>
          <img src={pokemonDetails.image} alt={pokemonDetails.name} style={{ maxWidth: '100%', height: 'auto' }} />
          <Typography>Tipo: {pokemonDetails.type}</Typography>
          <Typography>Altura: {pokemonDetails.height} m</Typography>
          <Typography>Peso: {pokemonDetails.weight} kg</Typography>
          {/* Outras informações do Pokémon */}
        </CardContent>
      </Card>
    </div>
  );
};

export default PokemonDetails;
