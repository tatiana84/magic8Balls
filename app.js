let userName = '';

/*if (userName = '') {
    console.log('Hello!');
}
else {
    console.log(`Hello, ${userName}!`);
}*/

(userName === '') ? console.log('Hello!') : console.log(`Hello, ${userName}!`);

let userQuestion = 'Will I visite Grecee this year?';

console.log(userQuestion);

let randomNumber = Math.floor(Math.random()*8);

let eightBall = '';

switch (randomNumber) {
    case 0:
        console.log('Only if you"ll be vaccinated!');
    break;

    case 1:
        console.log('It is certain!');
    break;

    case 2:
        console.log('It is decidedly so');
    break;

    case 3:
        console.log('Reply hazy try again');
    break;

    case 4:
        console.log('Cannot predict now');
    break;

    case 5:
        console.log('Do not count on it');
    break;

    case 6:
        console.log('My sources say no');
    break;

    case 7:
        console.log('Outlook not so good');
    break;

    case 8:
        console.log('Signs point to yes');
    break;

    default:
        console.log('Invalid!');
    break;
}

console.log(eightBall);