import { Edit,SimpleForm,TextInput,TextField,BooleanInput} from "ra-ui-materialui";

const editRole = (props) => (
    <Edit title="Role Edit" {...props}>
    <SimpleForm>
        <TextInput source="id" />
        <TextInput source="uuid" />
        <TextInput source="name" />
        <TextInput source="description" />
        <TextInput source="authorities" />
        <BooleanInput source="default" />
    </SimpleForm>
</Edit>
)
export default editRole;