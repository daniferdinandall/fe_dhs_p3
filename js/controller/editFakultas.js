export function isiData(results) {

  // console.log("After waiting for 10 seconds");
  console.log(results);
  const inputMapping = [
    { id: 'kode', path: 'kode_fakultas' },
    { id: 'nama', path: 'nama' },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    // console.log(`Value at path ${path}:`, value);
    inputElement.value = value;
  });

}

function getNestedValue(obj, path, index, property) {
  const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
  // console.log(`Value at path ${path}:`, value);

  if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
    console.log("masuy", value[index][property])
    return value[index][property];
  }

  return value;
}