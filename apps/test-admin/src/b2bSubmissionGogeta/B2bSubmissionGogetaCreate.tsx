import * as React from "react";
import { Create, SimpleForm, CreateProps, SelectInput } from "react-admin";

export const B2bSubmissionGogetaCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
            { label: "newoptionset", value: "Newoptionset" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
