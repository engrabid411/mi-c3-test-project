import React from 'react';
import { connect } from 'react-redux';
import  {fetchPeople}   from '../actions/FetchPeopleAction'
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
import {blue500, greenA200} from 'material-ui/styles/colors'

class People extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            //people_list: {},
            rowsPerPage: [10],
            people_list: [],
            numberOfRows: 10,
            page: 1,
            total: 87
        };
        this.updateRows = this.updateRows.bind(this)

    }
    updateRows = (state) => {
      console.log(state);
       this.props.dispatch(fetchPeople(state.page));
       this.setState({page:state.page})
    }

    showPlanet = (url) => {
      console.log(url)
    }
    render = () => {
      const viewButton = {
        color: blue500,
      };
      let data = {}
      if(this.props.people_list.results){
        data = this.props.people_list.results;
      }
      return (
        <Card>

          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
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

        </Card>
      );

    }
}
const mapStateToProps = state => {
  return {
    people_list: state.PeopleReducer.people_list
  }
}
export default connect(mapStateToProps)(People);
