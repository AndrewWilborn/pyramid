function factorial(x){
    let sum = 1
    for(let i = 0; i < x; i++){
        sum *= (i+1);
    }
    return sum;
}

console.log(factorial(5))

function pyramid1(height){
    for(let i = 0; i < height; i++){
        console.log("🗿".repeat(i+1))
    }
}

pyramid1(5)

function pyramid2(height){
    for(let i = 0; i < height; i++){
        console.log("  ".repeat(height-(i+1)) + "🗿".repeat(i*2+1))
    }
}

pyramid2(5)

function pyramid3(height){
    console.log("  ".repeat(height-1) + "🗿")
    for(let i = 0; i < height-1; i++){
        console.log("  ".repeat(height-(i+2)) + "🗿" + "  ".repeat((i)*2+1) + "🗿")
    }
}

pyramid3(5)

function pyramid4(height){
    console.log("  ".repeat(height-1) + "🗿")
    for(let i = 0; i < height-2; i++){
        console.log("  ".repeat(height-(i+2)) + "🗿" + "  ".repeat(i*2+1) + "🗿")
    }
    console.log("🗿".repeat(height*2-1))
}

pyramid4(5)