import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

import { getPeople } from './redux/actions';
import './App.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  };

  componentWillMount() {
    const { getPeopleAction } = this.props;
    getPeopleAction();
  }

  onChange = (e) => {
    this.setState({searchText: e.target.value.toLowerCase()});
  }

  render() {
    const { peopleList } = this.props;
    const { searchText } = this.state;
    const data = peopleList.status === 'done' ? peopleList.payload.filter(j => (j.name.toLowerCase().includes(searchText))) : [];
    return (
      <div className="container">
        <input className="search-input" type="text" placeholder="search..." onChange={this.onChange}/>
        {peopleList.status === 'loading' ? <div>Loading...</div>
        :
        <div>
          <div className="list">{data.map((k, i) => (
            <Link className="list-item" key={k.name} to={`${k.name}_${i + 1}`} >{k.name}</Link>
          ))}</div>
        </div>}
      </div>
    );
  }
}

const bindActions = dispatch => ({
  getPeopleAction: bindActionCreators(getPeople, dispatch),
});

const mapStateToProps = state => ({
  peopleList: state.peopleList,
});

export default connect(mapStateToProps, bindActions)(List);

