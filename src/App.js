// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import userList from "./components/list/userList";
import roleList from "./components/list/roleList";
import UserIcon from '@material-ui/icons/Group';
import myDataProvider from "./components/myDataProvider";
import myAuthProvider from "./components/myAuthProvider";
import myLoginPage from "./components/myLoginPage";
import editRole from "./components/edit/editRole";
import editUser from "./components/edit/editUser";
import createUser from "./components/create/createUser";
import createRole from "./components/create/createRole";
const App = () => (
    <Admin loginPage={myLoginPage} dataProvider={myDataProvider}  authProvider={myAuthProvider}>
        <Resource name="user" list={userList} edit={editUser} create={createUser}/>
        <Resource name="role" list={roleList} edit={editRole} create={createRole}/>
    </Admin>
);

export default App;