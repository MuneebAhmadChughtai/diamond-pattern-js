let height = 30;

let p = Math.trunc(height / 2);
let string = ""
for (let i = 0; i <= height; i++) {
    for (let j = 0; j <= height; j++) {
        if (j === Math.abs(p) || j === Math.abs(p + height) || j === Math.abs(height - p)) {
            string += "*";

        } else {
            string += " ";
        }

    }
    console.log(string);
    p--
    string = '';

}
