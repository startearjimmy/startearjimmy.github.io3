var sayhello=function(){
    $('body > div:nth-child(9) > img:nth-child(1)').hide();
}
$('body > div.btn > a:nth-child(1)').on('click',sayhello);