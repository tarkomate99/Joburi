$.getJSON("https://driveral.com/hu/api/jobs?uid=3e7ccfff-eab8-40b3-b055-98fbd40c2286&page=1&lang=en", function (data) {
    appendData(data["data"])
    console.log(data["data"])
})

function appendData(data) {
    var main = document.getElementById('jobs-list');

    const appendCol = ( colName, data, icon, text = "" ) => {
        console.log(colName, data);

        const _icon = ( icon ? icon : "" );
        const _text = ( text ? text : "" );

        if( data && typeof(data) !== "undefined" ) {
            return `<div class="col-md-4 col-lg-3 job-${colName}">${_icon}${data} ${text}</div>`
        }

        return "";
    }

    let jobsHTML = "";
    for (var job of data) {
        jobsHTML += `
            <div class="row">
                <div class="col-12 job-list-item mb-4">
                    <div class="row">
                        <div class="col-lg-2 imagebox ${ ( !job.company_image ? " d-flex align-items-center justify-content-center" : "" ) }">${( job.company_image ? `<img src="${job.company_image}" alt="job-img" class="image"/>` : job.company_name )}</div>
                            <div class="col-lg-10 d-flex align-items-center">
                                <div class="row ml-l">
                                <div class="col-12 job-title"> 
                                    <div class="row">
                                        <div class="col-lg-9 col-12" on><a href="single.php?slug=${job.slug}">${job.title}</a></div>
                                        <div class="col-lg-3 col-12 job-button"><button class="btn btn btn-outline-primary float-right job-time-button">Full Time</button></div>
                                    </div>
                                    
                                </div>
                                    <div class="col">
                                    <div class="row">
                                        ${appendCol( "company_name", job.company_name )}
                                        ${appendCol( "license", job.license, "", "licență" )}
                                        ${appendCol( "country", job.country, '<i class="fas fa-map-marker-alt"></i>' )}
                                        ${appendCol( "payment", job.payment, '<i class="fas fa-dollar-sign"></i>' )}
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

{/* <div class="col-md-4 col-lg-3 job-license">${job.license} permis de conducere</div>
<div class="col-md-4 col-lg-3 job-country"><i class="fas fa-map-marker-alt"></i>${job.country}</div>
<div class="col-md-4 col-lg-3 job-payment"><i class="fas fa-dollar-sign"></i>${job.payment}</div> */}