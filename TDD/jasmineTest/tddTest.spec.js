describe("자스민 테스트 묶음입니다.", () => {
  // it 함수 : 함수 테스트 유닛입니다. 첫번째 인자로 테스트할 함수에 대한 설명,
  // 두번쨰로 테스트할 코드를 전달합니다.
  it("인자를 전달하면 1을 더해주는 함수입니다.", () => {
    // let num = 20;
    // expect : 기대식. 실행할 함수의 결과값을 인수로 전달합니다.
    // toBe : 매쳐함수. 내가 기대한 결과와 일치하는지 판단하는 함수입니다.
    expect(plusOne(num)).toBe(num + 1);
  });
});
