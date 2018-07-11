$(function() {
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    $("#keyboard-upper-container").hide()
    let er=0
    let lw=20
    $("#yellow-block").css("left", lw+"px")
    let kindex=0
    let sen=0
    let ts=0
    $("#sentence").append("<p>"+sentences[sen]+"</p>")
    let idlet=sentences[sen].charAt(kindex)
    $("#target-letter").append("<p>"+idlet+"</p>")
    $("#feedback").css("text-align", "left")   
    $(document).keydown(function(event){
    let k1=event.key
    if (kindex==0&&sen==0) { ts=Date.now() }
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
    if (sen==sentences.length) {
                let te=Date.now()
                let tl=(te-ts)/60000
                console.log(tl,ts,te)
                let wpm=(54/tl)-(2*er)
                $("document").off("keypress")
                $("#sentence").empty()
                $("#feedback").empty()
                $("#target-letter").empty()
                $("#target-letter").append(
                    $("<h3/>").text("Results"),
                    $("<p/>").text("Your WPM is "+wpm+"."),
                    $("<p/>").text("You had "+er+" errors."),
                    $("<h4/>").text("Retry"),
                    $("<form/>",{}).append(
                        $("<input/>",{
                            type: "submit",
                            value: "Yes"}),
                        $("<input/>",{
                            type: "button",
                            value: "No"
                    }))
                )
            }
    if(event.which===16) {
        $("#keyboard-upper-container").hide()
        $("#keyboard-lower-container").show()
    }});
    $(document).on("keypress",function() {
        
        let idlet=sentences[sen].charAt(kindex)
        lw=lw+17.4
        $("#yellow-block").css("left", lw+"px")
        kindex++
        let idletn=sentences[sen].charAt(kindex)
        let k1=event.key
        let key=k1.charCodeAt()
        if (key===idlet.charCodeAt()) {
            $("#feedback").append("<span></span>")
            $("#feedback span:last-child").attr("class","glyphicon glyphicon-ok")
        }else{
            er++
            $("#feedback").append("<span></span>")
            $("#feedback span:last-child").attr("class","glyphicon glyphicon-remove")
        }
        if (kindex==sentences[sen].length) {
            sen++
            lw=20
            kindex=0
            $("#sentence").empty()
            $("#sentence").append("<p>"+sentences[sen]+"</p>")
            $("#feedback").empty()
            $("#yellow-block").css("left", lw+"px")
        }
        if (idlet==idletn===false) {
            $("#target-letter").empty()
            let idlet=sentences[sen].charAt(kindex)
            if (idlet===' ') { idlet="space"}
            $("#target-letter").append("<p>"+idlet+"</p>")
        }
        
    })
    
    
})