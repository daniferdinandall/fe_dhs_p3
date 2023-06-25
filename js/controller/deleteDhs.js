
function deleteData(IDHAPUS, urlAPIdhs) {
    // var presensiId = document.querySelector('a[data-presensi-id]').getAttribute('data-presensi-id');
    var presensiId = IDHAPUS;
    // console.log(IDHAPUS)
    // var target_url = "https://ws-dani-pemrog3-b1fcf6b5d6ca.herokuapp.com/dhs/" + presensiId;
    var target_url = urlAPIdhs+"/" + presensiId;

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result.message);
            location.reload();
        })
        .catch(error => console.log('Error:', error));
}
