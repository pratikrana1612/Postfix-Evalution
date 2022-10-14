// const question = prompt('Enter Your Question');
const body = document.body;
let stack=[];
document.querySelector('button').addEventListener('click',() =>
{
    const question = document.querySelector('input').value;
    let main_array = question.split(',');
    main_array.forEach(e => console.log(e));
    console.log(isNaN(main_array[1]));
    main_array= main_array.map(e => isNaN(e)?e:+e);
    // main_array.forEach(e => console.log(typeof(e)==='number' ? true:false))
    for(let i=0;i<main_array.length;i++)
    {
        if(main_array[i] === '+' || main_array[i] === '*' || main_array[i] === '-' ||main_array[i] === '/' || main_array[i] === '^')
        {
            const ans=operation(stack[0],stack[1],main_array[i]);
            stack.shift();
            stack.shift();
            stack.unshift(ans);
            console.log(stack);
            render();
        }
        if(typeof(main_array[i]) === 'number' )
        {
            stack.unshift(main_array[i]);
        }
    }
    console.log(stack);
});
// console.log(typeOf(main_array[0]));
function render()
{
    const p= document.createElement('p');
    // for(i of stack)
    // {
    //     p.innerText = `[${p.innerText} ${i}]` ;
    // }
    p.innerText=`[ ${stack} ]`;
    body.append(p);
}
function operation(item1,item2,operator)
{
    if(operator === '+')
    {
        return item2 + item1;
    }
    if(operator === '-')
    {
        return item2 - item1;
    }
    if(operator === '*')
    {
        return item2 * item1;
    }
    if(operator === '/')
    {
        return item2 / item1;
    }
    if(operator === '^')
    {
        return square(item2,item1);
    }
}
// 2,10,3,+,*,5,2,*,-,3,2,^,+
// 2,3,2,+,*,5,1,10,2,15,3,1,+,*,-,+,*,+,+
function square(item2,item1)
{
    if(item1 === 1)
    {
        return item2;
    }
    else{
        return item2*square(item2,item1-1);
    }
}