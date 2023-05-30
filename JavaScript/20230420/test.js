//   class Sausage {
//     constructor(ingredients) {
//       this.ingredients = ingredients;
//     }

//     taste() {
//       console.log(`${this.ingredients.join("와 ")} 맛이 난다!`);
//     }
//   }

//   class FireSausage extends Sausage {
//     constructor(ingredients) {
//       super(ingredients);
//     }

//     taste() {
//       console.log(`불 맛이 나기 시작합니다!`);
//     }
//   }
//   let normalSausage = new Sausage(["소고기", "불"]);
//   let firedSausage = new FireSausage(["소고기", "불"]);

//   class Sausage {
//     constructor(ingre1, ingre2) {
//       this.ingre1 = ingre1;
//       this.ingre2 = ingre2;
//     }

//     taste() {
//       console.log(`${this.ingre1}와(과) ${this.ingre2} 맛이 난다`);
//     }
//   }

//   class FiresSausage extends Sausage {
//     // 서브 클래스에서 생성자 함수가 없다면 자동으로 부모의 프로퍼티 상속
//     taste() {
//       console.log(`${this.ingre1}와(과) ${this.ingre2}, 불 맛이 난다`);
//     }
//   }

//   s1 = new Sausage("소고기", "파");
//   s1.taste();

//   s2 = new FiresSausage("소고기", "파");
//   s2.taste();

//   class sausage {
//     constructor(...taste) {
//       this.taste = taste;
//     }
//     whatTaste() {
//       console.log(`${this.taste} 맛이 난다!`);
//     }
//   }

//   class firesSausage extends sausage {
//     whatTaste() {
//       console.log(`${this.taste}맛과 불맛이 난다!`);
//     }
//   }

//   let a = new sausage("파", "소고기", "겨자");
//   let b = new firesSausage("과자", "파");

class Sausage {
  constructor(el1, el2) {
    this.inside1 = el1;
    this.inside2 = el2;
  }
  taste() {
    console.log(`${this.inside1}맛과 ${this.inside2}맛이 나는 소세지다!!`);
  }
}

class FireSausage extends Sausage {
  constructor(el1, el2, el3) {
    super(el1, el2);
    this.inside3 = el3;
  }

  // 오버로딩 > JS에서는 지원하지 않음
  taste(el1) {
    console.log(
      `${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}맛이 나는 소세지다!!`
    );
  }
  taste(el1, el2) {
    console.log(
      `${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}맛이 나는 소세지다!!`
    );
  }
  taste(el1, el2, el3) {
    console.log(
      `${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}맛이 나는 소세지다!!`
    );
  }

  // 오버리이딩
  taste() {
    console.log(
      `${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}맛이 나는 소세지다!!`
    );
  }
}

const fireSausage = new FireSausage("파", "불", "소고기");
