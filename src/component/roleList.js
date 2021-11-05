import * as React from "react";
import {
  TextField,
  BooleanField,
  List,
  Datagrid,
  ArrayField,
  EditButton
} from "react-admin";


export const roleList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="uuid" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="default" />
      <EditButton/>
    </Datagrid>
  </List>
);
