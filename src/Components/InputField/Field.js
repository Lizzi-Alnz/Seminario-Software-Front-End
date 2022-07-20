const Field = (
  {
    name = "",
    labelText = "",
    type = "text",
    value = "",
    onChange = ()=>{},
    ...rest
  }
) => {
  return (
   <fieldset>
       <label htmlFor={name}>{labelText}</label>
       <input type={type} name={name} id="" value={value} onChange={onChange}/>
   </fieldset>
  );
}


export default Field;