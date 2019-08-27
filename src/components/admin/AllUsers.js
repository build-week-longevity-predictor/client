import React, {useEffect} from "react";
import { connect } from "react-redux";
import {getUsers} from '../../action/adminUsers';

import { Table } from 'antd';

const { Column, ColumnGroup } = Table;



const AllUsers = ({getUsers,allUsers}) => {

  useEffect(() => {
    getUsers()
  },[getUsers]);

  return (


  <Table dataSource={allUsers} rowKey={record => record.email} >
    <ColumnGroup title="Users" >
      <Column title="Username" dataIndex="username" key="username" />
      <Column title="Email" dataIndex="email" key="email" />
    </ColumnGroup>

  </Table>  
    )
}

const mapStateToProps = state => ({
  gettingUsers: state.admin.gettingUsers,
  allUsers: state.admin.allUsers
});

//export default allUsers;

export default connect(
  mapStateToProps,
  {getUsers}
)(AllUsers);
