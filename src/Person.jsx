import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPerson } from './redux/actions';
import './App.css';

class Person extends Component {
  componentWillMount() {
    const { getPersonAction, location } = this.props;
    const id = location.pathname.split('_')[1];
    getPersonAction(id);
  }

  render() {
    const { person } = this.props;
    return (
      <div className="container">
        {person.status === 'loading' ? <div>Loading...</div> :
          <div>
            {`${person.payload.name} ${person.payload.gender} height: ${person.payload.height}`}
          </div>
        }
      </div>
    )
  }
}
  

const bindActions = dispatch => ({
  getPersonAction: bindActionCreators(getPerson, dispatch),
});

const mapStateToProps = state => ({
  person: state.person,
});

export default connect(mapStateToProps, bindActions)(Person);
