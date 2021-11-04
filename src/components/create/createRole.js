import {
  Create,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  AutocompleteInput,
  BooleanInput,
  SelectInput,
  AutocompleteArrayInput,
} from "ra-ui-materialui";
import { authoritiesList } from "../authoritiesList";

const createRole = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" /> 
      <TextInput source="description" />
      <TextInput source="name" />
      <AutocompleteArrayInput source="authorities" choices={authoritiesList} />
    </SimpleForm>
  </Create>
);
 export default createRole;