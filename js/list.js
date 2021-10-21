const list_items = [];

function addItems(items) {
    for (item of items) {
       
       list_items.push(item)
        
    }
}

const list_element = document.getElementById('jobs-list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 5;

$.getJSON("https://driveral.com/hu/api/jobs?uid=3e7ccfff-eab8-40b3-b055-98fbd40c2286&page=1&lang=en", function (data) {
    // appendData(data["data"])
    addItems(data["data"])
    DisplayList(list_items, list_element,rows,current_page);
    SetupPagination(list_items, pagination_element, rows);
    //console.log(data["data"])
})

function DisplayList (items, wrapper, rows_per_page, page) {
	const appendCol = ( colName, data, icon, text = "" ) => {
        //console.log(colName, data);

        const _icon = ( icon ? icon : "" );
        const _text = ( text ? text : "" );

        if( data && typeof(data) !== "undefined" ) {
            return `<div class="col-md-4 col-lg-3 job-${colName}">${_icon}${data} ${text}</div>`
        }

        return "";
    }

    wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);
    let item_element = "";
	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		item_element += `
                        <div class="row">
                        <div class="col-12 job-list-item mb-4">
                            <div class="row">
                                <div class="col-lg-2 imagebox ${ ( !item.company_image ? " d-flex align-items-center justify-content-center" : "" ) }">${( item.company_image ? `<img src="${item.company_image}" alt="job-img" class="image"/>` : item.company_name )}</div>
                                    <div class="col-lg-10 d-flex align-items-center">
                                        <div class="row ml-l">
                                        <div class="col-12 job-title"> 
                                            <div class="row">
                                                <div class="col-lg-9 col-12" on><a href="single.php?slug=${item.slug}">${item.title}</a></div>
                                                <div class="col-lg-3 col-12 job-button"><button class="btn btn btn-outline-primary float-right job-time-button">Full Time</button></div>
                                            </div>
                                            
                                        </div>
                                            <div class="col">
                                            <div class="row">
                                                ${appendCol( "company_name", item.company_name )}
                                                ${appendCol( "license", item.license, "", "licență" )}
                                                ${appendCol( "country", item.country, '<i class="fas fa-map-marker-alt"></i>' )}
                                                ${appendCol( "payment", item.payment, '<i class="fas fa-dollar-sign"></i>' )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
		
	}
    wrapper.innerHTML=item_element;
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
    //console.log(page_count)
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

// function appendData(data) {
//     var main = document.getElementById('jobs-list');

//     const appendCol = ( colName, data, icon, text = "" ) => {
//         console.log(colName, data);

//         const _icon = ( icon ? icon : "" );
//         const _text = ( text ? text : "" );

//         if( data && typeof(data) !== "undefined" ) {
//             return `<div class="col-md-4 col-lg-3 job-${colName}">${_icon}${data} ${text}</div>`
//         }

//         return "";
//     }

//     let jobsHTML = "";
//     for (var job of data) {
//         jobsHTML += `
//             <div class="row">
//                 <div class="col-12 job-list-item mb-4">
//                     <div class="row">
//                         <div class="col-lg-2 imagebox ${ ( !job.company_image ? " d-flex align-items-center justify-content-center" : "" ) }">${( job.company_image ? `<img src="${job.company_image}" alt="job-img" class="image"/>` : job.company_name )}</div>
//                             <div class="col-lg-10 d-flex align-items-center">
//                                 <div class="row ml-l">
//                                 <div class="col-12 job-title"> 
//                                     <div class="row">
//                                         <div class="col-lg-9 col-12" on><a href="single.php?slug=${job.slug}">${job.title}</a></div>
//                                         <div class="col-lg-3 col-12 job-button"><button class="btn btn btn-outline-primary float-right job-time-button">Full Time</button></div>
//                                     </div>
                                    
//                                 </div>
//                                     <div class="col">
//                                     <div class="row">
//                                         ${appendCol( "company_name", job.company_name )}
//                                         ${appendCol( "license", job.license, "", "licență" )}
//                                         ${appendCol( "country", job.country, '<i class="fas fa-map-marker-alt"></i>' )}
//                                         ${appendCol( "payment", job.payment, '<i class="fas fa-dollar-sign"></i>' )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }
//     main.innerHTML = jobsHTML;
// }

{/* <div class="col-md-4 col-lg-3 job-license">${job.license} permis de conducere</div>
<div class="col-md-4 col-lg-3 job-country"><i class="fas fa-map-marker-alt"></i>${job.country}</div>
<div class="col-md-4 col-lg-3 job-payment"><i class="fas fa-dollar-sign"></i>${job.payment}</div> */}