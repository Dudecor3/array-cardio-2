var people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kate', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
    { name: 'Dave', year: 1990 }
];

var comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good!', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my favourite food!', id: 123523 },
    { text: 'Nice, Nice, Nice!', id: 542328 }
];

var current_year = new Date().getFullYear()

function to_consumable_array(array) {
    if (!Array.isArray) {
        Array.isArray = function (array) {
            for (var i = 0, array2 = Array(array.length); i++;) {
                array2[i] = array[i];
            }
            return Object.prototype.toString.call(array.name + array.year);
        }
    } else {
        return Array.from(array);
    }
}

var people2 = to_consumable_array(people);
console.log(people2);

function return_all_names(array) {
    for (var i = 0; i < array.length; i++) {
        console.log('\n' + array[i].name);
    }
}

function is_at_least_19(array) {
    for (var i = 0; i < array.length; i++) {
        if (current_year - array[i].year >= 19) {
            console.log('\n' + array[i].name + ' is at least 19');
        }
    }
}

function find_comment(array, id) {
    for (var i = 0; i < array.length; i++) {
        if (id === array[i].id) {
            console.log(array[i].id + ': ' + array[i].text)
        }
    }
}
// not working as I intended. Read up on array methods.
function add_comment (array, comment_to_add) {
    array.slice(0);
    array.push(comment_to_add);
    console.log(array);
}

return_all_names(people2);
is_at_least_19(people);
find_comment(comments, 542328);
add_comment(comments, 'this is a comment');

