// export const urlAPIdhs = "https://ws-dani-pemrog3-b1fcf6b5d6ca.herokuapp.com/dhs";

// export const urlAPImatkul = "https://ws-dani-pemrog3-b1fcf6b5d6ca.herokuapp.com/matakuliah";

// export const urlAPIdosen = "https://ws-dani-pemrog3-b1fcf6b5d6ca.herokuapp.com/dosen";

// export const urlAPImahasiswa = "https://ws-dani-pemrog3-b1fcf6b5d6ca.herokuapp.com/mahasiswa";

// export const urlAPIProgramStudi = "https://ws-dani-pemrog3-b1fcf6b5d6ca.herokuapp.com/programstudi";

// export const urlAPIFakultas = "https://ws-dani-pemrog3-b1fcf6b5d6ca.herokuapp.com/fakultas";

// export const urlAPILogin = "https://ws-dani-pemrog3-b1fcf6b5d6ca.herokuapp.com/login";

// export const urlAPIValidate = "https://ws-dani-pemrog3-b1fcf6b5d6ca.herokuapp.com/validate";


export const urlAPIdhs = "http://127.0.0.1:8000/dhs";

export const urlAPImatkul = "http://127.0.0.1:8000/matakuliah";

export const urlAPIdosen = "http://127.0.0.1:8000/dosen";

export const urlAPImahasiswa = "http://127.0.0.1:8000/mahasiswa";

export const urlAPIProgramStudi = "http://127.0.0.1:8000/programstudi";

export const urlAPIFakultas = "http://127.0.0.1:8000/fakultas";

export const urlAPILogin = "http://127.0.0.1:8000/login";

export const urlAPIValidate = "http://127.0.0.1:8000/validate";

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.reload(); //reload halaman setelah klik ok pada alert
}