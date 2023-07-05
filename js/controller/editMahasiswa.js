export function isiData(results) {
  setTimeout(function() {
    // console.log("After waiting for 10 seconds");
    console.log(results);
    const inputMapping = [
      { id: 'nama', path: 'nama' },
      { id: 'npm', path: 'npm' },
      { id: 'optionFakultas', path: 'fakultas._id' },
      { id: 'optionProdi', path: 'program_studi._id' },
      { id: 'optionDosen', path: 'dosen_wali._id' },
      // { id: 'jam_masuk', path: 'biodata.jam_kerja', index: 0, property: 'jam_masuk' },
      // { id: 'jam_keluar', path: 'biodata.jam_kerja', index: 0, property: 'jam_keluar'  },
      // { id: 'durasi', path: 'biodata.jam_kerja', index: 0, property: 'durasi'  },
    ];
  
    inputMapping.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      // console.log(`Value at path ${path}:`, value);
      inputElement.value = value;
    });
  }, 1000); 
}

function getNestedValue(obj, path, index, property) {
  const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
  // console.log(`Value at path ${path}:`, value);

  if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
    console.log("masuy",value[index][property])
    return value[index][property];
  }

  return value;
}