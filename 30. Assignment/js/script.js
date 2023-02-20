const randomColor = document.getElementById('cal-card');

function getRandom(){
    const random = Math.round(Math.random() * 1000000)
    const randomString = random +'';
    if (randomString.length === 6)
        return random;
    else getRandom();
}
// randomColor.addEventListener('mouseenter', (event)=>{
//     const random = getRandom();
//     randomColor.style.backgroundColor = '#'+random;
//     console.log(random);
// });

// ____________________________________
//              triangle
// ____________________________________
const TriangleCalculate = getID('TriangleCalculate');

TriangleCalculate.addEventListener('click', (e)=>{
    addcalculationEvent('TriangleInput1', 'TriangleInput2', 'warningTriangle', 'Triangle');
});
// ____________________________________
//              Rectangle
// ____________________________________
rectangleCalculate.addEventListener('click', (e)=>{
    addcalculationEvent('RectangleInput1', 'RectangleInput2', 'warningRectangle', 'Rectangle');
});
// ____________________________________
//              Parallelogram
// ____________________________________
parallelogramCalculate.addEventListener('click', (e)=>{
    addcalculationEvent('ParallelogramInput1', 'ParallelogramInput2', 'warningParallelogram', 'Parallelogram');
});
// ____________________________________
//              Rhombus
// ____________________________________
rhombusCalculate.addEventListener('click', (e)=>{
    addcalculationEvent('RhombusInput1', 'RhombusInput2', 'warningRhombus', 'Rhombus');
});
// ____________________________________
//              Pentagon
// ____________________________________
pentagonCalculate.addEventListener('click', (e)=>{

    addcalculationEvent('PentagonInput1', 'PentagonInput2', 'warningPentagon', 'Pentagon');
});
// ____________________________________
//              Ellipse
// ____________________________________
ellipseCalculate.addEventListener('click', (e)=>{

    addcalculationEvent('EllipseInput1', 'EllipseInput2', 'warningEllipse', 'Ellipse');
});