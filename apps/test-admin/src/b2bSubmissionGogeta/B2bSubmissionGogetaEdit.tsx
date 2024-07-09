import * as React from "react";
import { Edit, SimpleForm, EditProps, SelectInput } from "react-admin";

export const B2bSubmissionGogetaEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Option 1", value: "Option1" },
            { label: "asdasdsdasd", value: "Asdasdsdasd" },
            { label: "asdasd", value: "Asdasd" },
            { label: "asasd", value: "Asasd" },
            { label: "asd", value: "Asd" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
