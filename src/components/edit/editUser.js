import { Edit,SimpleForm,SimpleFormIterator,TextInput,DateInput,ArrayInput,BooleanInput, } from "ra-ui-materialui";

const editUser = (props) => (
  <Edit title="edit users" {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="uuid" />
      <TextInput source="phone" />
      <TextInput source="email" />
      <DateInput source="fullName" />
      <TextInput source="gender" />
      <TextInput source="birthDate" />
      <TextInput source="address" />
      <TextInput source="username" />
      <ArrayInput source="roles">
        <SimpleFormIterator>
          <TextInput label="id" source="id" />
          <TextInput label="uuid" source="uuid" />
          <TextInput label="name" source="name" />
          <TextInput label="Description" source="description" />
          <TextInput label="Authorities" source="authorities" />
          <BooleanInput label="Default?" source="default" />
        </SimpleFormIterator>
      </ArrayInput>
      <BooleanInput source="enabled" />
    </SimpleForm>
  </Edit>
);
export default editUser;
