$(document).ready(function() {
    $('div').fadeIn('slow');

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      url += '?' + $.param({
     'api-key': "3dd8bdb7036d4506bc3cf48476ade8c9",
     'q': "new york",
     'begin_date': "20010101"
      });

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });

    var searchTerm = " ";
    var numberOfRecords = " ";
    var startYear = " ";
    var endYear = " ";
    var searchButton = false;
    var clearResultsButton = false;


 $(".clearNews").on("click", function() {

    searchButton = false;
    clearResultsButton = true;
      
    searchTerm = $("#initialSearch").val().empty();
    numberOfRecords = $("#records").val().empty();
    startYear = $("#startYear").val().empty();
    endYear = $("#endYear").val().empty();
      
  });

  $(".searchNews").on("click", function() {
      searchButton = true;
      clearResultsButton = false;

      searchTerm = $(".searchbar").val().trim();
      numberOfRecords = $(".numberbar").val().trim();
      startYear = $(".yearbar").val().trim();
      endYear = $(".endyearbar").val().trim();

      function search(e) {
        $("#initialSearch").append(searchTerm);
        $("#records").append(numberOfRecords);
        $("#startYear").append(startYear);
        $("#endYear").append(endYear);
      }
      search();
  });
});