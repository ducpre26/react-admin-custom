import {
  Create,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  DateInput,
  ArrayInput,
  BooleanInput,
  SelectInput,
} from "ra-ui-materialui";

const createUser = (props) => {
  console.log(props);
  const choice2=[];
  return (
    <Create {...props}>
      <SimpleForm id="formUser">
        <TextInput source="address" id="address" />
        <DateInput source="birthDate" id="birthDate" />
        <TextInput source="email" id="email" />
        <TextInput source="fullName" id="fullName" />
        <BooleanInput source="enabled" id="enabled" />
        <SelectInput 
        source="gender"
        choices={[
          { id: "M", name: "Male" },
          { id: "F", name: "Female" },
          { id: "O",name :"Other"}
        ]}
      />
        <TextInput source="username" id="username" />
        <TextInput source="password" id="password" />
        <TextInput source="phone" id="phone" />
        <ArrayInput source="roleIDs">
          <SimpleFormIterator>
            <SelectInput 
              choices={choice2}
            />
            <BooleanInput label="Default?" source="default" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export default createUser;
  
