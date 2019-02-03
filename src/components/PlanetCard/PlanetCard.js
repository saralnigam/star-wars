import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './PlanetCard.module.css';


class PlanetCard extends Component {
  render() {
    const { planet } = this.props;
    return (
      <div className={styles.card}>
        <h4 className={styles.name}>{planet.name}</h4>
        <p>
          <label>Population: &nbsp;</label>
          {planet.population}
        </p>
        <progress className={styles['population-scale']} value={planet.population_scale} max="50" />

      </div>
    );
  }
}

PlanetCard.propTypes = {

};

export default PlanetCard;
