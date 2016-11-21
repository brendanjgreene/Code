describe("Fizz Buzz", function() {
  it(" should say Fizz Buzz if the number is divisible by three and five", function() {
    expect(fizzBuzz(15)).toEqual("fizzbuzz");
    expect(fizzBuzz(30)).toEqual("fizzbuzz");
    expect(fizzBuzz(45)).toEqual("fizzbuzz");
    expect(fizzBuzz(60)).toEqual("fizzbuzz");
    expect(fizzBuzz(75)).toEqual("fizzbuzz");
    expect(fizzBuzz(90)).toEqual("fizzbuzz");
  });
  it("should says Fizz if the number is divisible by three only", function(){
  	expect(fizzBuzz(3)).toEqual("fizz");
  	expect(fizzBuzz(6)).toEqual("fizz");
  	expect(fizzBuzz(9)).toEqual("fizz");
  	expect(fizzBuzz(12)).toEqual("fizz");
  	expect(fizzBuzz(18)).toEqual("fizz");
  	expect(fizzBuzz(21)).toEqual("fizz");
  	expect(fizzBuzz(24)).toEqual("fizz");
  	expect(fizzBuzz(27)).toEqual("fizz");
  	expect(fizzBuzz(33)).toEqual("fizz");
  	expect(fizzBuzz(36)).toEqual("fizz");
  	expect(fizzBuzz(39)).toEqual("fizz");
  	expect(fizzBuzz(42)).toEqual("fizz");
  	expect(fizzBuzz(48)).toEqual("fizz");
  	expect(fizzBuzz(51)).toEqual("fizz");
  	expect(fizzBuzz(54)).toEqual("fizz");
  	expect(fizzBuzz(57)).toEqual("fizz");
  	expect(fizzBuzz(63)).toEqual("fizz");
  	expect(fizzBuzz(66)).toEqual("fizz");
  	expect(fizzBuzz(69)).toEqual("fizz");
  	expect(fizzBuzz(72)).toEqual("fizz");
  	expect(fizzBuzz(78)).toEqual("fizz");
  	expect(fizzBuzz(81)).toEqual("fizz");
  	expect(fizzBuzz(84)).toEqual("fizz");
  	expect(fizzBuzz(87)).toEqual("fizz");
  	expect(fizzBuzz(93)).toEqual("fizz");
  	expect(fizzBuzz(96)).toEqual("fizz");
  	expect(fizzBuzz(99)).toEqual("fizz");

  });
  it("Should say Buzz if the number is divisible by 5 only", function(){
  	expect(fizzBuzz(5)).toEqual("buzz");
  	expect(fizzBuzz(10)).toEqual("buzz");
  	expect(fizzBuzz(20)).toEqual("buzz");
  	expect(fizzBuzz(25)).toEqual("buzz");
  	expect(fizzBuzz(35)).toEqual("buzz");
  	expect(fizzBuzz(40)).toEqual("buzz");
  	expect(fizzBuzz(50)).toEqual("buzz");
  	expect(fizzBuzz(55)).toEqual("buzz");
  	expect(fizzBuzz(65)).toEqual("buzz");
  	expect(fizzBuzz(70)).toEqual("buzz");
  	expect(fizzBuzz(80)).toEqual("buzz");
  	expect(fizzBuzz(85)).toEqual("buzz");
  	expect(fizzBuzz(95)).toEqual("buzz");
  	expect(fizzBuzz(100)).toEqual("buzz");

  });
  it("Should return the nummber if it is neither divisible by 3 or 5", function(){
  	expect(fizzBuzz(1)).toEqual(1);
  	expect(fizzBuzz(2)).toEqual(2);
  	expect(fizzBuzz(4)).toEqual(4);
  	expect(fizzBuzz(7)).toEqual(7);
  	expect(fizzBuzz(8)).toEqual(8);
  	expect(fizzBuzz(11)).toEqual(11);
  	expect(fizzBuzz(13)).toEqual(13);
  	expect(fizzBuzz(14)).toEqual(14);
  	expect(fizzBuzz(16)).toEqual(16);
  	expect(fizzBuzz(17)).toEqual(17);
  	expect(fizzBuzz(19)).toEqual(19);
  	expect(fizzBuzz(22)).toEqual(22);
  	expect(fizzBuzz(23)).toEqual(23);
  	expect(fizzBuzz(26)).toEqual(26);
  	expect(fizzBuzz(28)).toEqual(28);
  	expect(fizzBuzz(29)).toEqual(29);
  	expect(fizzBuzz(31)).toEqual(31);
  	expect(fizzBuzz(32)).toEqual(32);
  	expect(fizzBuzz(34)).toEqual(34);
  	expect(fizzBuzz(37)).toEqual(37);
  	expect(fizzBuzz(38)).toEqual(38);
  	expect(fizzBuzz(41)).toEqual(41);
  	expect(fizzBuzz(43)).toEqual(43);
  	expect(fizzBuzz(44)).toEqual(44);
  	expect(fizzBuzz(46)).toEqual(46);
  	expect(fizzBuzz(47)).toEqual(47);
  	expect(fizzBuzz(49)).toEqual(49);
  	expect(fizzBuzz(52)).toEqual(52);
  	expect(fizzBuzz(53)).toEqual(53);
  	expect(fizzBuzz(56)).toEqual(56);
  	expect(fizzBuzz(58)).toEqual(58);
  	expect(fizzBuzz(59)).toEqual(59);
  	expect(fizzBuzz(61)).toEqual(61);
  	expect(fizzBuzz(62)).toEqual(62);
  	expect(fizzBuzz(64)).toEqual(64);
  	expect(fizzBuzz(67)).toEqual(67);
  	expect(fizzBuzz(68)).toEqual(68);
  	expect(fizzBuzz(71)).toEqual(71);
  	expect(fizzBuzz(73)).toEqual(73);
  	expect(fizzBuzz(74)).toEqual(74);
  	expect(fizzBuzz(76)).toEqual(76);
  	expect(fizzBuzz(77)).toEqual(77);
  	expect(fizzBuzz(79)).toEqual(79);
  	expect(fizzBuzz(82)).toEqual(82);
  	expect(fizzBuzz(83)).toEqual(83);
  	expect(fizzBuzz(86)).toEqual(86);
  	expect(fizzBuzz(88)).toEqual(88);
  	expect(fizzBuzz(89)).toEqual(89);
  	expect(fizzBuzz(91)).toEqual(91);
  	expect(fizzBuzz(92)).toEqual(92);
  	expect(fizzBuzz(94)).toEqual(94);
  	expect(fizzBuzz(97)).toEqual(97);
  	expect(fizzBuzz(98)).toEqual(98);
  });

});
