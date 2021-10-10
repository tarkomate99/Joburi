$.getJSON("https://driveral.com/hu/api/jobs?uid=3e7ccfff-eab8-40b3-b055-98fbd40c2286&page=1&lang=en", function (data) {
    appendData(data["data"])
    console.log(data["data"])
})

function appendData(data) {
    var main = document.getElementById('jobs-list');

    let jobsHTML = "";
    for (var job of data) {
        jobsHTML += `
            <div class="row">
                <div class="col-12 job-list-item mb-4">
                    <div class="row">
                        <div class="col-lg-2 imagebox"><img src="${job.company_image}" alt="job-img" class="image"/></div>
                            <div class="col-lg-10 d-flex align-items-center">
                                <div class="row ml-l">
                                <div class="col-12 job-title">${job.title}
                                    <div class="col-2 job-button"><button class="btn btn btn-outline-primary float-right job-time-button">Full Time</button></div>
                                </div>
                                    <div class="col">
                                    <div class="row">
                                        <div class="col-md-4 col-lg-3 job-company_name">${job.company_name}</div>
                                        <div class="col-md-4 col-lg-3 job-license">${job.license} permis de conducere</div>
                                        <div class="col-md-4 col-lg-3 job-country"><i class="fas fa-map-marker-alt"></i>${job.country}</div>
                                        <div class="col-md-4 col-lg-3 job-payment"><i class="fas fa-dollar-sign"></i>${job.payment}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    main.innerHTML = jobsHTML;
}