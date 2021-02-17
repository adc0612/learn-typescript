// 숫자형 enum
enum Chocolates{
    Toyou = 10, // 10
    Ghana, // 11
}

let snack = Chocolates.Toyou;
console.log(snack); // 10

// 문자형 enum
enum Country{
    asia = 'Korea',
    europe = 'hungary',
}

let mapPoint = Country.asia;
console.log(mapPoint); // Korea

// enum 활용
enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer:Answer) {
    if (answer === Answer.Yes) {
        console.log('정답');
    } else if (answer === Answer.No) {
        console.log('오답');
    }
}

// askQuestion('Yes') //enum값만 들어갈 수 있음
askQuestion(Answer.Yes);