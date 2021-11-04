import {
  Create,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  DateInput,
  ArrayInput,
  BooleanInput,
  SelectInput,
  AutocompleteInput
} from "ra-ui-materialui";

export const createUser = (props) => {


  const formatRoleIds = () => {

  }

  return (
    <Create {...props}>
      <SimpleForm id="formUser">
        <TextInput source="address" id="address" />
        <DateInput source="birthDate" id="birthDate" />
        <TextInput source="email" id="email" />
        <TextInput source="fullName" id="fullName" />
        <BooleanInput source="enabled" id="enabled" />
        <TextInput source="gender" id="gender" />
        <TextInput source="username" id="username" />
        <TextInput source="password" id="password" />
        <TextInput source="phone" id="phone" />
        <ArrayInput source="roleIDs">
          <SimpleFormIterator>
            <SelectInput 
              choices={[
                {id:"ROLE_ADMIN", name:"ROLE_ADMIN"},
                {id:"ROLE_USER", name:"ROLE_USER"}
              ]}
            />
            <BooleanInput label="Default?" source="default" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
}
  
  
