import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => {
        const data = response.data.results;
        setPokemonList(data);
      })
      .catch((error) => {
        console.error('Erro ao obter a lista de Pokémon:', error);
      });
  }, []);

  return (
    <div>
      <h1>Pokédex</h1>
      <Grid container spacing={2}>
        {pokemonList.map((pokemon, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Link to={`/pokemon/${index + 1}`}>
              <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardContent>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                    alt={pokemon.name}
                    style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
                  />
                  <Typography variant="h6" component="div" style={{ textAlign: 'center' }}>
                    {pokemon.name.toUpperCase()}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Pokedex;
