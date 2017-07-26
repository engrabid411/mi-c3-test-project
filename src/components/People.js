import React from 'react';
import { connect } from 'react-redux';
import  {fetchPeople}   from '../actions/FetchPeopleAction';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class People extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            people: {}
        };
    }
    componentWillMount() {

    }
    isSelected = (index) => {
      
    };

    handleRowSelection = (selectedRows) => {

    };
    render() {

      return (
        <Table onRowSelection={this.handleRowSelection}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow selected={this.isSelected(0)}>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow selected={this.isSelected(1)}>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Randal White</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow selected={this.isSelected(2)}>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Stephanie Sanders</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow selected={this.isSelected(3)}>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>Steve Brown</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      );

    }
}
const mapStateToProps = state => {
  return {
    people: state.people
  }
}
export default connect(mapStateToProps)(People);
