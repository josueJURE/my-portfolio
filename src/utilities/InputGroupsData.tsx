interface InputGroupsDataInterface {
  className: string;
  label: string;
  innerHTML: string;
  typeAttribute: string;
  nameAttribute: string;
}

type InputGroupsDataType = InputGroupsDataInterface[];

const inputGroupData: InputGroupsDataType = [
  {
    className: "input-group",
    label: "name",
    innerHTML: "Your full name",
    typeAttribute: "text",
    nameAttribute: "name",
  },
  {
    className: "input-group",
    label:  "email",
    innerHTML:  " Your email address ",
    typeAttribute:  "email",
    nameAttribute: "email",
  },
];

export default inputGroupData;
