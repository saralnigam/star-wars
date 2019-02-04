import React from 'react';
import PropTypes from 'prop-types';

import styles from './PlanetCard.module.css';


const PlanetCard = ({ planet }) => (
  <div className={styles.card}>
    <h4 className={styles.name}>{planet.name}</h4>
    <p>
      <span>Population: &nbsp;</span>
      {planet.population}
    </p>
    <progress className={styles['population-scale']} value={planet.population_scale} max="50" />

  </div>
);

PlanetCard.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
    population: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    population_scale: PropTypes.number,
  }).isRequired,
};

export default PlanetCard;
