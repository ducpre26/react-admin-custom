import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { userList } from "./component/userList";
import customDataProvider from "./component/customDataProvider";
import myAuthProvider from "./component/myAuthProvider";
import { editUser } from "./component/editUser";
import { createUser } from "./component/createUser";
import { roleList } from "./component/roleList";
import { editRole } from "./component/editRole";
import { createRole } from "./component/createRole";

const App = () => (
    <Admin dataProvider={customDataProvider}>
        <Resource name="user" list={userList} edit={editUser} create={createUser} />
        <Resource name="role" list={roleList} edit={editRole} create={createRole}/>
    </Admin>
);

export default App;
// in src/App.js
