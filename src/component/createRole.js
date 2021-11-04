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
import { authoritiesList } from "./authoritiesList";

export const createRole = (props) => (
  <Create {...props}>
    <SimpleForm>
      <SelectInput
        source="id"
        choices={[
          { id: "ROLE_ADMIN", name: "ROLE_ADMIN" },
          { id: "ROLE_USER", name: "ROLE_USER" },
        ]}
      />
      <TextInput source="description" />
      <TextInput source="name" />
      <AutocompleteArrayInput source="authorities" choices={authoritiesList} />
    </SimpleForm>
  </Create>
);
