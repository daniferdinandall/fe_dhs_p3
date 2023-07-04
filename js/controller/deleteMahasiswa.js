
function deleteData(IDHAPUS, urlAPImahasiswa) {
    
    let text;
    if (confirm("Apakah anda yakin ingin menghapus data ini?") == true) {
        // var mhsId = document.querySelector('a[data-presensi-id]').getAttribute('data-presensi-id');
        var mhsId = IDHAPUS;
        // console.log(IDHAPUS)
        // var target_url = "https://ws-dani-pemrog3-b1fcf6b5d6ca.herokuapp.com/dhs/" + mhsId;
        var target_url = urlAPImahasiswa + "/" + mhsId;
    
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };
        console.log(urlAPImahasiswa)
        fetch(target_url, requestOptions)
            .then(response => response.json())
            .then(result => {
                alert(result.message);
                location.reload();
            })
            .catch(error => console.log('Error:', error));
    } else {
        alert("Data tidak jadi dihapus");   
    }
}
