
function deleteData(IDHAPUS, urlAPIprodi) {

    if (confirm("Apakah anda yakin ingin menghapus data ini?") == true) {
        // var prodiId = document.querySelector('a[data-presensi-id]').getAttribute('data-presensi-id');
        var prodiId = IDHAPUS;
        var target_url = urlAPIprodi + "/" + prodiId;
    
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };
        console.log(urlAPIprodi)
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
