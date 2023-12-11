function validateForm() {
    var Prenom = document.forms["form-prenom"]["prenom"].values;
    var Nom = document.forms["form-nom"]["nom"].values;
    var Date = document.forms["form-date"]["date"].values;
    var Email = document.forms["form-email"]["email"].values;
    var Site = document.forms["form-site"]["site"].values;
    var Code = document.forms["form-code"]["code"].values;
    var Genre = document.forms["form-genre"]["genre"].values;
    var Pays = document.forms["form-pays"]["pays"].values;
    var Formation = document.forms["form-education"]["education"].values;
    var Photo = document.forms["form-photo"]["photo"].values;
    var Comment = document.forms["form-formation"]["formation"].values;
 
    if(Prenom === ""){
        alert("Veuillez entrer votre Prénom!");
        Prenom.focus();
        return false;
    }
    if(Nom === ""){
        alert("Veuillez entrer votre Nom!");
        Nom.focus();
        return false;
    }
    if(Date === null){
        alert("Veuillez entrer votre date de naissance!");
        Date.focus();
        return false;
    }
    if(Email !== confirm_email){
        alert("Veuillez entrer un Email!");
        Email.focus();
        return false;
    }
    if(Site !== url){
        alert("Veuillez entrer votre site internet avec un url!");
        Site.focus();
        return false;
    }
    if(Code !== 8){
        alert("Veuillez un code de 8 caractère exactement!");
        Code.focus();
        return false;
    }
    if(Genre !== "homme" || Genre !== "femme"){
        alert("Veuillez entrer votre genre!");
        Genre.focus();
        return false;
    }
    if(Pays === ""){
        alert("Veuillez entrer votre pays d'origine");
        Pays.focus();
        return false;
    }
    if(Formation === ""){
        alert("Veuillez entrer votre formation!");
        Formation.focus();
        return false;
    }
    if(Photo !== file){
        alert("Veuillez mettre une photo de vous!");
        Photo.focus();
        return false;
    }
    if(Comment >400){
        alert("Le nombre maximum de caractère est de 400");
        Comment.focus();
        return false;
    }
}