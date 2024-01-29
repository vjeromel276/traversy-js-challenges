const THREE={
    
    
}

const thing = new THREE.something();
console.log(thing);

function Car(){

    function something(){
        return new Car();
    }
   
}

THREE.something = Car;
const render = new THREE.something();
console.log(render);