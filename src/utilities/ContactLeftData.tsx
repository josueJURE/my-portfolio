

interface ContactLeftData {
  classNameDiv: string;
  classNameIcon: string;
  span: string[];
}

type ContactLeftDataType = ContactLeftData[];

const contactLeftData: ContactLeftDataType = [
  {
    classNameDiv: "address",
    classNameIcon: "a-solid fa-location-dot",
    span: ["London ", "UK"],
  },
  {
    classNameDiv: "freelance",
    classNameIcon: "fa-regular fa-user",
    span: ["Developer ", "Available Right Now"],
  },
  {
    classNameDiv: "email",
    classNameIcon: "fa-regular fa-envelope",
    span: ["Email: ", "josue.jure@gmail.com"],
  },
  {
    classNameDiv: "phone",
    classNameIcon: "fa-solid fa-phone",
    span: ["Phone ", "+7887399922"],
  },
  
];


export default contactLeftData