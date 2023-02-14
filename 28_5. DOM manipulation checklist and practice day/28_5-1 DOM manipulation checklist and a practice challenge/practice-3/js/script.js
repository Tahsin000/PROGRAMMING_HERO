const boldBtn = document.getElementById('boldBtn');
const italicBtn = document.getElementById('italicBtn');
const underlineBtn = document.getElementById('underlineBtn');
const alignLeftBtn = document.getElementById('alignLeftBtn');
const alignCenterBtn = document.getElementById('alignCenterBtn');
const alignRightBtn = document.getElementById('alignRightBtn');
const alignJustifyBtn = document.getElementById('alignJustifyBtn');
const textArea = document.getElementById('textArea');
const fontSize = document.getElementById('fontSize');
const fontCase = document.getElementById('fontCase');
const fontColor = document.getElementById('fontColor');

boldBtn.addEventListener('click', ()=>{
    (textArea.style.fontWeight==='bold') ? textArea.style.fontWeight = 'normal' : textArea.style.fontWeight='bold';
});
italicBtn.addEventListener('click', ()=>{
    (textArea.style.fontStyle === 'italic') ? textArea.style.fontStyle = 'normal' : textArea.style.fontStyle = 'italic' ;

});
underlineBtn.addEventListener('click', ()=>{
    (textArea.style.textDecoration==='underline') ? textArea.style.textDecoration='none' : textArea.style.textDecoration='underline';
});
alignLeftBtn.addEventListener('click', ()=>{
    (textArea.style.textAlign==='left') ? textArea.style.textAlign = 'left' : textArea.style.textAlign = 'left';
});
alignRightBtn.addEventListener('click', ()=>{
    (textArea.style.textAlign==='right') ? textArea.style.textAlign='left' :textArea.style.textAlign = 'right';
});
alignCenterBtn.addEventListener('click', ()=>{
    (textArea.style.textAlign==='center') ? textArea.style.textAlign='left' :textArea.style.textAlign = 'center';
});
alignJustifyBtn.addEventListener('click', ()=>{
    (textArea.style.textAlign==='justify') ? textArea.style.textAlign='left' :textArea.style.textAlign = 'justify';
});
fontSize.addEventListener('click', ()=>{
    textArea.style.fontSize=fontSize.value+"px";
});
fontSize.addEventListener('keyup', ()=>{
    textArea.style.fontSize=fontSize.value+"px";
});
fontCase.addEventListener('click', ()=>{
    (textArea.style.textTransform==='uppercase') ? textArea.style.textTransform='none' :textArea.style.textTransform = 'uppercase';
});
fontColor.addEventListener('mouseout', ()=>{
    textArea.style.color=fontColor.value.toString();
    console.log(fontColor.value.toString());
});



