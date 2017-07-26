import React from 'react';
import { connect } from 'react-redux';
import  {fetchPeople}   from '../actions/FetchPeopleAction'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import {Card} from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import Pagination from 'materialui-pagination'

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
    }
    componentWillMount = () => {
      //console.log(this.state)
    }
    componentDidMount = () => {
      // /console.log(this.state)
    }


    render = () => {
      //this.setState({total:this.props.people_list.count})
      let data = {}
      if(this.props.people_list.results){
        data = this.props.people_list.results;
      }
      return (
        <Card>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Height</TableHeaderColumn>
                <TableHeaderColumn>Mass</TableHeaderColumn>
                <TableHeaderColumn>Created</TableHeaderColumn>
                <TableHeaderColumn>Edited</TableHeaderColumn>
                <TableHeaderColumn>Planet</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
            { Object.keys(data).map(
              (person, index) =>
                <TableRow key={index}>
                  <TableRowColumn>{data[index].name}</TableRowColumn>
                  <TableRowColumn>{data[index].height}</TableRowColumn>
                  <TableRowColumn>{data[index].mass}</TableRowColumn>
                  <TableRowColumn>{data[index].created}</TableRowColumn>
                  <TableRowColumn>{data[index].edited}</TableRowColumn>
                  <TableRowColumn>{data[index].homeworld}</TableRowColumn>
                </TableRow>
            )}

            </TableBody>
          </Table>
          <Divider />
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
  //console.log(state,state.PeopleReducer.people_list)

  return {
    people_list: state.PeopleReducer.people_list
  }
}
export default connect(mapStateToProps)(People);
