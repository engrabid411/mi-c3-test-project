import React from 'react';
import { connect } from 'react-redux';
import  {fetchPeople}   from '../actions/FetchPeopleAction'
import  {fetchPlanet}   from '../actions/FetchPlanetAction'
import TextField from 'material-ui/TextField'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableFooter
} from 'material-ui/Table'
import {Card} from 'material-ui/Card'
import Pagination from 'materialui-pagination'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {blue500, greenA200} from 'material-ui/styles/colors'

class People extends React.Component {

    constructor(props){
        super(props);
        // initial state
        this.state = {
            rowsPerPage: [10],
            people_list: {},
            planet:{},
            numberOfRows: 10,
            page: 1,
            total: 87,
            open: false
        };
        this.updateRows = this.updateRows.bind(this)

    }

    componentWillReceiveProps = (nextProps) => {
        // setting the state with next props received
       this.setState({people_list:nextProps.people_list,planet:nextProps.planet})
    }

    /**********************/
    // these two functions handleOpen and handleCloe toggle the  popup model
    handleOpen = () => {
      this.setState({open: true});
    }

    handleClose = () => {
      this.setState({open: false});
    }
    /**********************/

    //handle the pagination
    updateRows = (state) => {
       this.props.dispatch(fetchPeople(state.page));
       this.setState({page:state.page})
    }

    // fetct the planet data and open the dialog
    showPlanet = (url) => {
      this.props.dispatch(fetchPlanet(url))
      this.handleOpen()
    }

    // this function hanlde the grid filtered by the "name" key
    filterList = (event) => {
      let peopleState = JSON.parse(JSON.stringify(this.props.people_list));
      peopleState.results = peopleState.results.filter(people => {
          return people.name.toLowerCase().indexOf(event.target.value) > -1;
      });

      this.setState({
          people_list: peopleState
      })
    }
    render = () => {
      const viewButton = {
        color: blue500,
      };
      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
        />
      ];

      const dialogStyle = {
        width:'300px'
      }
      const inputStyle = {
        width:'200px'
      }

      let data = {}
      let planet = {}
      if(this.state.people_list.results){
        data = this.state.people_list.results;
      }
      if(this.state.planet){
        planet = this.state.planet
      }
      return (
        <Card>

          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn> <TextField onChange={this.filterList.bind(this)} style={inputStyle}
                    hintText="Name"
                  />
                </TableHeaderColumn>
                <TableHeaderColumn>Height</TableHeaderColumn>
                <TableHeaderColumn>Mass</TableHeaderColumn>
                <TableHeaderColumn>Created</TableHeaderColumn>
                <TableHeaderColumn>Edited</TableHeaderColumn>
                <TableHeaderColumn>Planet</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} stripedRows={true}>
            { Object.keys(data).map(
              (person, index) =>
                <TableRow  key={index}>

                  <TableRowColumn>{data[index].name}</TableRowColumn>
                  <TableRowColumn>{data[index].height}</TableRowColumn>
                  <TableRowColumn>{data[index].mass}</TableRowColumn>
                  <TableRowColumn>{data[index].created}</TableRowColumn>
                  <TableRowColumn>{data[index].edited}</TableRowColumn>
                  <TableRowColumn>
                  <IconButton onClick = {this.showPlanet.bind(this,data[index].homeworld)}
                    iconClassName="material-icons"
                    tooltip="view planet"
                    iconStyle={viewButton}
                  >
                    visibility
                  </IconButton>

                  </TableRowColumn>
                </TableRow>
            )}

            </TableBody>
          </Table>
          <Pagination
            total={this.state.total}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
            numberOfRows={this.state.numberOfRows}
            updateRows={this.updateRows}
          />
          <Dialog bodyStyle={dialogStyle}
          title="Planet Details"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div>Name: {planet.name}</div>
          <div>Diameter: {planet.diameter}</div>
          <div>Climate: {planet.climate}</div>
          <div>Population: {planet.population}</div>
        </Dialog>
        </Card>

      );

    }
}

const mapStateToProps = state => {
  return {
    people_list: state.PeopleReducer.people_list,
    planet:state.PlanetReducer.planet
  }
}
export default connect(mapStateToProps)(People);
