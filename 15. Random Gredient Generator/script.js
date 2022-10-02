let gradienBox=document.getElementsByClassName('gradient')[0];
let color_one_box=document.querySelector('.color-one .first div');
let color_one_code=document.querySelector('.color-one .first span');
let color_two_box=document.querySelector('.color-one .second div');
let color_two_code=document.querySelector('.color-one .second span');

let codeBox=document.querySelector('.code-box span');
let generatebtn=document.querySelector('.button-container .generate-btn');
let copyBtn=document.querySelector('.copied');
let copiedmsg=document.querySelector('.copied-message');

let string='0123456789abcdef';

let generateCode=()=>{
    let hexCode='#';
    for(let i=0;i<6;i++){
        hexCode+=string[Math.floor(Math.random()*string.length)];
    }
    return hexCode

}
let setColor=()=>{
    let color_one=generateCode();
    let color_two=generateCode();
    let randomdeg=Math.floor(Math.random()*360);
    gradienBox.style.background=`linear-gradient(${randomdeg}deg,${color_one},${color_two})`;
    // console.log(gradienBox);

    color_one_box.style.background=color_one;
    color_two_box.style.background=color_two;
    color_two_code.innerHTML=color_two;
    color_one_code.innerHTML=color_one;

    codeBox.innerHTML=`background:linear-gradient(${randomdeg}deg,${color_one},${color_two})`
    // console.log(codeBox);
}

generatebtn.addEventListener('click',setColor);
setColor();

copyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(codeBox.textContent);
    copiedmsg.style.visibility='visible';
    setTimeout(() => {
        copiedmsg.style.visibility='hidden'
    }, 800);
})
