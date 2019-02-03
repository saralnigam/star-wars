// Import React Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Redux Dependecies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Components
import AppContainer from '../AppContainer/AppContainer';
import PlanetCard from '../../components/PlanetCard/PlanetCard';

// Import Actions
import { getPlanets } from './actions';

// Import Services
import { extractIdFromUrl } from '../../services/utils';

// Import Styles
import styles from './SearchContainer.module.css';


class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  componentDidMount() {
    this.props.actions.getPlanets();
  }

  handleSearchTextChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  renderPlanetCards = () => {
    const { planets } = this.props;

    let filteredPlanets = [];
    if (this.state.searchText === '') {
      filteredPlanets = planets;
    } else {
      filteredPlanets = this.filterPlanets();
    }

    return (
      <div>
        {
          filteredPlanets.length > 0
            ? filteredPlanets.map(planet => <PlanetCard planet={planet} />)
            : <p>Loading Planets...</p>
          }
      </div>
    );
  }

  filterPlanets = () => {
    const { planets } = this.props;
    const { searchText } = this.state;
    // Use a fuzzy search algorithm here
    // Sorted on the basis of ids
    return planets
      .filter(planet => (planet.name.toLowerCase()).indexOf(searchText.toLowerCase()) > -1)
      .sort((a, b) => extractIdFromUrl(a.url) - extractIdFromUrl(b.url));
  }

  render() {
    const { searchText } = this.state;
    const { location } = this.props;

    return (
      <AppContainer location={location}>
        <h2>Search Planets</h2>
        <input
          className={styles['search-box']}
          type="text"
          value={searchText}
          onChange={this.handleSearchTextChange}
          placeholder="e.g. Alderaan"
        />
        <br />
        {this.renderPlanetCards()}
      </AppContainer>
    );
  }
}

SearchContainer.propTypes = {
  actions: PropTypes.shape({
    getPlanets: PropTypes.func,
  }).isRequired,
  location: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  planets: Object.values(state.planets.byId),
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getPlanets }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
