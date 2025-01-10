function sortArray(arr) {
	arr.sort((a, b) => {
	  if (a.name.toLowerCase() < b.name.toLowerCase()) {
		return -1; // a comes before b
	  }
	  if (a.name.toLowerCase() > b.name.toLowerCase()) {
		return 1; // a comes after b
	  }
	  return 0; // a and b are equal
	});
}

function findObjectByName(array, name) {
    return array.find(item => item.name === name) || null;
}

// Function to save a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration time
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to load a cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null; // Return null if cookie not found
}

