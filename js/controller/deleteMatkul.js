
function deleteData(IDHAPUS, urlAPImatkul) {

    if (confirm("Apakah anda yakin ingin menghapus data ini?") == true) {
        // var matkulId = document.querySelector('a[data-presensi-id]').getAttribute('data-presensi-id');
        var matkulId = IDHAPUS;
        var target_url = urlAPImatkul + "/" + matkulId;
    
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };
        console.log(urlAPImatkul)
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
