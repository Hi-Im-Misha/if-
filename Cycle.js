for (;num < 100 && num;) {
    const num = prompt("ведите число, больше", "100");
    if (isNaN(num)) {
        alert("Нужно написать число");
    } else if (num >= 100 && num){
        break;
    }
}
