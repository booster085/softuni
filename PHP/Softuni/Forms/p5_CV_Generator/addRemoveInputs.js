(function () {
    var compLangField = document.getElementById("progLanguages").firstChild.innerHTML;
    document.getElementById('addCompLang').addEventListener("click", function(){
        addElement("progLanguages", compLangField)
    });
    document.getElementById('removeCompLang').addEventListener("click", function(){
        removeElement("progLanguages")
    });

    var spokenLangField = document.getElementById("languages").firstChild.innerHTML;
    document.getElementById('addSpokenLang').addEventListener("click", function(){
        addElement('languages', spokenLangField)
    });
    document.getElementById('removeSpokenLang').addEventListener("click", function(){
        removeElement("languages")
    });

    function addElement(parentId, element){
        var field = document.createElement('DIV');
        field.innerHTML = element;
        document.getElementById(parentId).appendChild(field);
    }

    function removeElement(parentId){
        var countElements = document.getElementById(parentId).children.length;
        if (countElements > 1) {
            var lastChild = document.getElementById(parentId).lastChild;
            document.getElementById(parentId).removeChild(lastChild);
        }
    }

})();
