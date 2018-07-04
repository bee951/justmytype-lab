$(function() {
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    $("#keyboard-upper-container").hide()
    let er=0
    $(document).keydown(function(event){
    let k1=event.key
    if (k1.length==1) {
        let key=k1.charCodeAt(0)
        $("#"+key).css("background-color", "yellow")
    }  
    if (event.which===16) {
        $("#keyboard-upper-container").show()
        $("#keyboard-lower-container").hide()
    }});
    $(document).keyup(function(event){
    let k1=event.key
    if (k1.length==1) {
        let key=k1.charCodeAt(0)
        $("#"+key).css("background-color", "")
    }         
    if(event.which===16) {
        $("#keyboard-upper-container").hide()
        $("#keyboard-lower-container").show()
    }});
    $(document).keypress(function() {
        
    })
})