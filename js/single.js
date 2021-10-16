var slug = window.location.href;

$.getJSON("https://driveral.com/hu/api/job?uid=3e7ccfff-eab8-40b3-b055-98fbd40c2286&page=1&lang=en&slug="+slug.slice(slug.indexOf("=")+1,slug.length), function (data) {
    appendData(data["data"])
})


function appendData(data) {
    var main = document.getElementById('job-information');
    
    let informationHTML = "";
    
        informationHTML+=`
        <div class="row">
        <div class="col-12 mb-4">
            <div class="row">
                <div class="col-lg-2" style="border: 1px solid #a2c0be; width:100px; height: 100px; text-align:center;"><img src="${data.company_image}" alt="" class="image" style="max-width: 80%;
                                                                        max-height: 80%;
                                                                        border-image-width: 10px;
                                                                        padding: 10px 10px 10px 10px; vertical-align: middle; horizontal-align: middle; border:none; height:65x; text-align:center;
                                                                        position: absolute;
                                                                        top: 50%;
                                                                        left: 50%;
                                                                        -moz-transform: translateX(-50%) translateY(-50%);
                                                                        -webkit-transform: translateX(-50%) translateY(-50%);
                                                                        transform: translateX(-50%) translateY(-50%);"></div>
                                                                        <div class="col-lg-10 d-flex align-items-center">
                                                                            <div class="row ml-1">
                                                                                <div class="col-12 job-title">
                                                                                    <div class="row">
                                                                                        <div class="col-lg-9 col-12">${data.title}</div>
                                                                                        <div class="col-lg-3 col-12 job-button"><button class="btn btn-primary btn-sm float-right"><i class="fas fa-check" style="margin-right: 10px;"></i>Candidez pentru slujbă</button></div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col">
                                                                                    <div class="row">
                                                                                        <div class="col-md-4 col-lg-3"><i class="fas fa-suitcase" style="margin-right: 10px"></i>${data.company_name}</div>
                                                                                        <div class="col-md-4 col-lg-3"><i class="fas fa-map-marker-alt" style="margin-right: 10px"></i>${data.country}</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
            </div>
            <div class="row d-flex align-items-center" style="background-color: #a2c0be; text-align:center; color:white; margin-top: 10px;">
                <div class="col-6"><i class="fas fa-phone-square" style="margin-right: 10px"></i>${data.company_phone}</div>
                <div class="col-6"><i class="fas fa-envelope" style="margin-right: 10px"></i>${data.company_email}</div>
            </div>
            <div class="row">
                <div class="col-lg-8">
                    <div class="mb-5">
                        <div class="h5 d-flex align-items-center mb-4 text-primary" style="margin-top: 10px">Descrierea postului</div>
                    </div>
                </div>
            </div>
            <div class="row">
                    <div class="col col-lg-8">
                    <div class="mb-5">${data.description}</div>
                    <div class="mb-5">${data.expectations}</div>
                    <div class="mb-5">${data.experiences}</div>
                    <div class="col-lg-4 job-detail-box" style="max-width:60%">
                        <div class="bg-light p-3 border rounded mb-4>
                            <h3 class="text-primary mt-3 h5 mb-3 style="color: #a2c0be">Agregator de locuri de muncă</h3>
                            <ul class="list-unstyled mb-0>
                                <li class="mb-2">
                                <div style="color: black"><strong>Publicat: </strong> ${data.date}</div>
                                </li>
                                <li class="mb-2">
                                <div style="color: black"><strong>Tipul lucrării: </strong>
                                    ${data.type}</div>
                                </li>
                                <li class="mb-2">
                                    <div style="color: black"><strong>Loc de munca: </strong>
                                    ${data.country}</div>
                                </li>
                                <li class="mb-2">
                                    <div style="color: black"><strong>Plată: </strong>
                                    ${data.payment}</div>
                                </li>
                                <li class="mb-2">
                                    <div style="color: black"><strong>Licență: </strong>
                                    ${data.license} licență</div>
                                </li>
                                <li class="mb-2">
                                    <div style="color: black"><strong>Durata muncii: </strong>
                                    ${data.timespan}</div>
                                </li>
                                <li class="mb-2">
                                    <div style="color: black"><strong>Vehicul: </strong>
                                    ${data.vehicles}</div>
                                </li>
                                <li class="mb-2">
                                   <div style="color: black"><strong>Program de lucru: </strong>
                                    ${data.order}</div>
                                </li>
                                <li class="mb-2">
                                    <div style="color: black"><strong>Limbă vorbită așteptată: </strong>
                                    ${data.languages}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        `;
    main.innerHTML = informationHTML;
}
