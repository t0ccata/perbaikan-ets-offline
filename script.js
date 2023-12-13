$(document).ready(function () {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon',
        method: 'GET',
        success: function (response) {
            displayData(response.results);
        },
        error: function (error) {
            console.error("Error fetching data : ", error);
        }
    });

    function displayData(results) {
        let output = '';

        $.each(results, function (key, result) {
            output += `
            <div class="col-md-3 mb-3 d-flex">
                <div class="card text-center mb-3" style="width: 18rem;">
                    <div class="card-body">
                        <p class="card-text">${result.name}</p>
                        <a href="${result.url}" class="btn btn-primary">Detail</a>
                    </div>
                </div>
            </div>
            `;
        });
        $('#pokemon-container').html(output);
    }
});