import inputGroupData from "../utilities/InputGroupsData";

function InputGroups() {
  return (
    <>
      <div className="input-groups">
        {inputGroupData.map((item, index) => (
          <div className={item.className} key={index}>
            <label htmlFor={item.label}>
              {item.innerHTML} <i className="fa-solid fa-asterisk"></i>
            </label>
            <input
              type={item.typeAttribute}
              name={item.nameAttribute}
              required
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default InputGroups;
