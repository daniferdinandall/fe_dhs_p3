
function deleteData(IDHAPUS, urlAPIfakultas) {

    if (confirm("Apakah anda yakin ingin menghapus data ini?") == true) {
        // var fakultasId = document.querySelector('a[data-presensi-id]').getAttribute('data-presensi-id');
        var fakultasId = IDHAPUS;
        var target_url = urlAPIfakultas + "/" + fakultasId;
    
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };
        console.log(urlAPIfakultas)
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
