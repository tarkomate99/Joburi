let pages_len = 10;


$(document).ready(function () {
    //getJSON(1);

    getData(1).then(function(data){
        addItems(data["data"])
        pages_len=data["meta"]["lastPage"];
        rows=data["meta"]["perPage"];
        showDatas(data["data"],list_element);
        SetupPagination(list_items, pagination_element, rows,pages_len);
    });
})
const list_items = [];

function addItems(items) {
    for (item of items) {
       
       list_items.push(item)
        
    }
}

const list_element = document.getElementById('jobs-list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 0;


function getData(page){
    return new Promise((resolve,reject) => {
            $.getJSON("https://driveral.com/hu/api/jobs?uid=3e7ccfff-eab8-40b3-b055-98fbd40c2286&page="+String(page)+"&lang=en", function (data) {
                if( data && data.success ){
                    resolve(data);
                }
            })
    }).catch(function(err){
        reject("err: ", err)
    });
}

/* function getJSON(page) {
    $.getJSON("https://driveral.com/hu/api/jobs?uid=3e7ccfff-eab8-40b3-b055-98fbd40c2286&page="+String(page)+"&lang=en", function (data) {
        addItems(data["data"])
        pages_len=data["meta"]["lastPage"];
        rows=data["meta"]["perPage"];
        showDatas(data["data"],list_element)
    })
}

function Datas(page){
    $.getJSON("https://driveral.com/hu/api/jobs?uid=3e7ccfff-eab8-40b3-b055-98fbd40c2286&page="+String(page)+"&lang=en", function (datas) {
        return datas;
    })
} */

function showDatas(items,wrapper){
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
    let list_element = "";


    console.log("Items: ", items);

    for (item of items){
        list_element += `
                        <div class="row job">
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
    wrapper.innerHTML=list_element;
}

function SetupPagination (items, wrapper, rows_per_page,pages) {
	wrapper.innerHTML = "";

	let page_count = pages;
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items, setActive = null) {
    if( setActive && !isNaN(setActive)){
        $(".pagination-button").each(function(){
            $(this).removeClass("active");
            
            const nextActive = $(".pagination-button#to-page-" + setActive);

            if( !nextActive.hasClass("active") ) {
                nextActive.addClass("active");
            }
        })
        return false;
    }

	let button = document.createElement('button');
	button.innerText = page;

    $(button).attr("id", `to-page-${page}`).addClass("pagination-button");    

    if( page === current_page ) $(button).addClass("active");

    console.log(page, " -> ", button, " cp: ", current_page);

	button.addEventListener('click', function () {
        location.href="#job-section";
        //getJSON(button.innerText);
        list_element.innerText="";
        getData(page).then(function(data){
            showDatas(data.data,list_element);
            PaginationButton("","",data.meta.currentPage);
        });
	});

	return button;
}

