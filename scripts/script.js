let openorclose = 'flex';

function senseInDesighButton(){
    let a = document.getElementById('open_cards').style.display = openorclose;
    if (openorclose == 'flex') {
        openorclose = 'none'
    } else if (openorclose == 'none') {
        openorclose = 'flex'
    }
}