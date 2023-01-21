//DEFINE EVERY BUTTON
const btn_number = document.querySelectorAll('.number');
const btn_counter = document.querySelectorAll('.counter');
const btn_reset = document.getElementById('btn-reset_number');
const btn_count_total_number = document.getElementById(
  'btn-count_total_number'
);
//DEFINE VARIABLE TO COUNTING
//using 'let', coz we will define after event
let first_number = []; //as array, coz every number clicked willbe push into array variable
let second_number = []; //as array, coz every number clicked willbe push into array variable
let counter = '';
let total_number = 0;
//EVENT FOR EVERY NUMBER
btn_number.forEach((current_btn) => {
  current_btn.addEventListener('click', function (e) {
    e.preventDefault();
    let num = parseInt(current_btn.textContent);
    if (!counter) return sett_first_num(num);
    return sett_second_num(num);
  });
});
//sett to push value
function sett_first_num(num) {
  first_number.push(num);
  let current_number = converting_array_number_into_integer(first_number);
  document.getElementById('first_number').textContent = current_number;
}
function sett_second_num(num) {
  second_number.push(num);
  let current_number = converting_array_number_into_integer(second_number);
  document.getElementById('second_number').textContent = current_number;
}
//EVENT FOR EVERY COUNTER
btn_counter.forEach((current_btn) => {
  current_btn.addEventListener('click', function (e) {
    e.preventDefault();
    counter = current_btn.textContent; //get counter
    document.getElementById('counter').textContent = counter; //sett counter into variable and show it into frontend
  });
});
//EVENT FOR COUNTING
btn_count_total_number.addEventListener('click', async function (e) {
  e.preventDefault();
  if (is_empty(first_number) && is_empty(second_number) && is_empty(counter)) {
    return false;
  } else {
    const first_int = converting_array_number_into_integer(first_number);
    const second_int = converting_array_number_into_integer(second_number);
    total_number = await counting_number(first_int, second_int);
    document.getElementById('total_number').textContent = total_number;
  }
});
//EVENT FOR RESET
btn_reset.addEventListener('click', function (e) {
  e.preventDefault();
  if (is_empty(first_number) && is_empty(second_number) && is_empty(counter)) {
    return false;
  } else {
    first_number = [];
    second_number = [];
    counter = '';
    total_number = 0;
    document.getElementById('first_number').textContent = 0;
    document.getElementById('counter').textContent = '';
    document.getElementById('second_number').textContent = 0;
    document.getElementById('total_number').textContent = 0;
  }
});

//FUNCTIONS FOR COUNTING
function counting_number(first_int, second_int) {
  let total = 0;
  switch (counter) {
    case 'x':
      total = first_int * second_int;
      break;
    case '/':
      total = first_int / second_int;
      break;
    case '-':
      total = first_int - second_int;
      break;
    case '+':
      total = first_int + second_int;
      break;
  }
  return total;
}
function converting_array_number_into_integer(arr_number) {
  //arr_number.join(''), willbe join array value
  //Number(), will convert into integer
  return Number(arr_number.join(''));
}
function is_empty(param) {
  return !param ? true : false;
}
