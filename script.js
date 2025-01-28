const num1=document.getElementById('num1');
const num2=document.getElementById('num2');
const res=document.getElementById('result');
const cal = (operation) => {
    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value);
    if(isNaN(n1)|| isNaN(n2)){
        res.textContent= 'please enter valid number';
        return;
    }
    let result;
    switch(operation){
        case 'add':
            result=n1+n2;
            break;
        case 'sub':
            result=n1-n2;
            break;
        case 'multi':
            result=n1*n2;
            break;
        case 'div':
            result= n2 !==0 ? n1/n2 : 'cannot be divided';
            break;
        default:
            result = "invalid operation";
    }
    res.textContent=result;
};

document.getElementById('add').addEventListener('click', () =>cal('add'))
document.getElementById('sub').addEventListener('click', () =>cal('sub'))
document.getElementById('multi').addEventListener('click', () =>cal('multi'))
document.getElementById('div').addEventListener('click', () =>cal('div'))