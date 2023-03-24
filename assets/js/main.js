
// scrollify init
$(function() {
    $.scrollify({
        section : ".scrollify-div",
        sectionName : "section-name",
        scrollSpeed: 200,
    });
});


function ajaxCallBack(url, method, data){
    $.ajax({
        url: url,
        type: method,
        dataType: "json",
        success: data,
        error: function(xhr){
            console.error(xhr);
        }
    })
}

//projects
ajaxCallBack("data.json", "get", function(result){
    showProjects(result)
})

function showProjects(projectsArray){
    var html = '';
    for(var project in projectsArray.projects){
        html += `<div class="card col-4" style="width: 18rem;">
        <img src="${projectsArray.projects[project].image}" class="card-img-top" alt="${projectsArray.projects[project].name}">
        <div class="card-body">
          <h5 class="card-title">${projectsArray.projects[project].name}</h5>
          <p class="card-text">${projectsArray.projects[project].description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${projectsArray.projects[project].technologies}</li>
          <li class="list-group-item">Responsive: ${projectsArray.projects[project].responsive}</li>
        </ul>
        <div class="card-body">
          <a href="${projectsArray.projects[project].link}" class="btn btn-primary" target="_blank" >Go to the website</a>
        </div>
    </div>`
    }

    $("#projectsDiv").html(html)   
}

//navigation
ajaxCallBack("data.json", "get", function(result){
    showNavigation(result)
})

function showNavigation(navigationArr){
    var html ="";
    html += `<div class="container-fluid">
    <a class="navbar-brand" href="${navigationArr.href}">${navigationArr.name}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">`

    for(var navItem in navigationArr.navigation){
        html += `<a class="nav-link" href="${navigationArr.navigation[navItem].href}">${navigationArr.navigation[navItem].name}</a>`
    }

    html += " </div></div></div>";
    

     $("#navigation").html(html)   
}

window.addEventListener("load", () => {
    var html = "";
    for(var i=1; i<=10; i++){
            html += "<li></li>"
    }
    
    $(".circles").html(html)
})

$(document).on("click", "#show-more", () => {
    // console.log("klik")
    $.scrollify.next()
})
  