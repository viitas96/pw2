// 6.2
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }


function totalSalar(arr) {
    let x = 0;
    for (i in arr) {
        x += arr[i];
    }
    console.log('totalul salariilor este de: '  + x);
}

totalSalar(salaries);
// 6.5

let person = {
	name: `Person`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: 'email@domain.com'
},
address: `Moldova`
}

person.contacts.phone = '+37312345678';
person.address = null;
console.log(person);

// 10.1



