var theres = ['there', 'their', 'they\'re', 'theyre']
var Theres = ['There', 'Their', 'They\'re', 'Theyre']
var correctLowerTheres = ['there', 'their', 'they\'re']
var correctUpperTheres = ['There', 'Their', 'They\'re']

function isLowerThere(string) {
	for (var i = 0; i < theres.length; i++) {
		if (string === theres[i]) {
			return true;
		}
	}
	return false
}

function isUpperThere(string) {
	for (var i = 0; i < Theres.length; i++) {
		if (string === Theres[i]) {
			return true;
		}
	}
	return false
}

function randomLowerThere(string) {
	var there = string;
	while (there === string) {
		there = correctLowerTheres[Math.floor(Math.random() * correctLowerTheres.length)];
	}
	return there
}

function randomUpperThere(string) {
	var there = string;
	while (there === string) {
		there = correctUpperTheres[Math.floor(Math.random() * correctUpperTheres.length)];
	}
	return there
}

function replaceThere(string) {
	var tokens = string.split(" ");
	var newstring = []
	for (var i = 0; i < tokens.length; i++) {
		var next = tokens[i]
		if (isLowerThere(next)) {
			var newthere = randomLowerThere(next);
			next = newthere
		}
		else if (isUpperThere(next)) {
			var newthere = randomUpperThere(next);
			next = newthere
		}
		newstring[newstring.length] = next 
	}
	return newstring.join(" ")
}

$("tt,i,b,big,small,em,strong,kbd,var,cite,abbr,acronym,sub,sup,span,bdo,address,a,p,h1,h2,h3,h4,h5,h6,pre,q,ins,del,dt,dd,li,label,option,button,caption,td,th,div,code").each(function() {
    var contents = $(this).contents();
    if (contents.length > 0) {
        if (contents.get(0).nodeType == Node.TEXT_NODE) {
            $(this).html(replaceThere($(this).html()))
        }
    }
});
