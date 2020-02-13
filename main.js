
document.getElementById('nxnButton').addEventListener('click', function(e){
    e.preventDefault();
    loadVideos('data/nxn_giaiaothoisu.json');
});

document.getElementById('ddButton').addEventListener('click', function(e){
    e.preventDefault();
    loadVideos('data/setv_dodzung_thoisu247.json');
});

document.getElementById('nsdbButton').addEventListener('click', function(e){
    e.preventDefault();
    loadVideos('data/thvl_nhipsongdongbang.json');
});

document.getElementById('knsButton').addEventListener('click', function(e){
    e.preventDefault();
    loadVideos('data/sbtn_kimnhungshow.json');
});

document.getElementById('ddmplButton').addEventListener('click', function(e){
    e.preventDefault();
    loadVideos('data/sbtn_thoisubuoisang.json');
});

document.getElementById('chinaUncensoredButton').addEventListener('click', function(e){
    e.preventDefault();
    loadVideos('data/chinaUncensored_trungquockhongkiemduyet.json');
});

document.getElementById('luanDamThoiSuButton').addEventListener('click', function(e){
    e.preventDefault();
    loadVideos('data/lsgtv_luandamthoisu.json');
});

document.getElementById('joelOsteenButton').addEventListener('click', function(e){
    e.preventDefault();
    loadVideos('data/joelosteenshow.json');
});

document.getElementById('vietThaoShowButton').addEventListener('click', function(e){
    e.preventDefault();
    loadVideos('data/vietthaoshow.json');
});

document.getElementById('kySuMienTayButton').addEventListener('click', function(e){
    e.preventDefault();
    loadVideos('data/thvl_kysumientay.json');
});


function loadVideos(jsonFilePath){
    var xhr = new XMLHttpRequest();
    xhr.onload = function (){
        var videosData = JSON.parse(this.responseText);
        var output = "";
        for (let i=0; i < videosData.items.length; i++){
            output += `<div class="col-lg-4 col-md-6 mb-4">
                        <div class="card h-100">
                            <iframe width="348" height="226" src="https://www.youtube.com/embed/${videosData.items[i].id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class="card-body">
                                <h4 class="card-title">${videosData.items[i].snippet.title}</h4>
                                <p class="card-text">Published On: ${videosData.items[i].snippet.publishedAt}</p>
                            </div>
                            </div>
                       </div>`
        }
        document.getElementById('loadingVideos').innerHTML = output;
    }
    xhr.open('GET', jsonFilePath, true);
    xhr.send(null);
}//End og loadVideos(jsonFilePath)
