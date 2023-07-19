let btn = document.querySelector("button#done");
btn.addEventListener("click", function () {
  let firstname = document.querySelector("input#firstname").value;
  let lastname = document.querySelector("input#lastname").value;
  let age = Number(document.querySelector("input#age").value);
  let id = Number(document.querySelector("input#id").value);
  let dad = document.querySelector("input#dad").value;
  let location = document.querySelector("input#location").value;
  let phonenumber = Number(document.querySelector("input#phonenumber").value);
  let year = Number(document.querySelector("input#year").value);
  let mounth = document.querySelector("select#mounth").value;
  console.log(firstname);
  console.log(lastname);
  console.log(age);
  console.log(id);
  console.log(location);
  console.log(dad);
  
  let sen;
  if (age === 1) {
    document.querySelector("h1").innerHTML = Number("2021");
  } else if (age === 2) {
    document.querySelector("h1").innerHTML = Number("2020");
  } else if (age === 3) {
    document.querySelector("h1").innerHTML = Number("2019");
  } else if (age === 4) {
    document.querySelector("h1").innerHTML = Number("2018");
  } else if (age === 5) {
    document.querySelector("h1").innerHTML = Number("2017");
  } else if (age === 6) {
    document.querySelector("h1").innerHTML = Number("2016");
  } else if (age === 7) {
    document.querySelector("h1").innerHTML = Number("2015");
  } else if (age === 8) {
    document.querySelector("h1").innerHTML = Number("2014");
  } else if (age === 9) {
    document.querySelector("h1").innerHTML = Number("2013");
  } else if (age === 10) {
    document.querySelector("h1").innerHTML = Number("2012");
  } else if (age === 11) {
    document.querySelector("h1").innerHTML = Number("2011");
  } else if (age === 12) {
    document.querySelector("h1").innerHTML = Number("2010");
  } else if (age === 13) {
    document.querySelector("h1").innerHTML = Number("2009");
  } else if (age === 14) {
    document.querySelector("h1").innerHTML = Number("2008");
  } else if (age === 15) {
    document.querySelector("h1").innerHTML = Number("2007");
  } else if (age === 16) {
    document.querySelector("h1").innerHTML = Number("2006");
  } else if (age === 17) {
    document.querySelector("h1").innerHTML = Number("2005");
  } else if (age === 18) {
    document.querySelector("h1").innerHTML = Number("2004");
  } else if (age === 19) {
    document.querySelector("h1").innerHTML = Number("2003");
  } else if (age === 20) {
    document.querySelector("h1").innerHTML = Number("2002");
  } else if (age === 21) {
    document.querySelector("h1").innerHTML = Number("2001");
  } else if (age === 22) {
    document.querySelector("h1").innerHTML = Number("2000");
  } else if (age === 23) {
    document.querySelector("h1").innerHTML = Number("1999");
  } else if (age === 24) {
    document.querySelector("h1").innerHTML = Number("1998");
  } else if (age === 25) {
    document.querySelector("h1").innerHTML = Number("1997");
  } else if (age === 26) {
    document.querySelector("h1").innerHTML = Number("1996");
  } else if (age === 27) {
    document.querySelector("h1").innerHTML = Number("1995");
  } else if (age === 28) {
    document.querySelector("h1").innerHTML = Number("1994");
  } else if (age === 29) {
    document.querySelector("h1").innerHTML = Number("1993");
  } else if (age === 30) {
    document.querySelector("h1").innerHTML = Number("1992");
  } else if (age === 31) {
    document.querySelector("h1").innerHTML = Number("1991");
  } else if (age === 32) {
    document.querySelector("h1").innerHTML = Number("1990");
  } else if (age === 33) {
    document.querySelector("h1").innerHTML = Number("1989");
  } else if (age === 34) {
    document.querySelector("h1").innerHTML = Number("1988");
  } else if (age === 35) {
    document.querySelector("h1").innerHTML = Number("1987");
  } else if (age === 36) {
    document.querySelector("h1").innerHTML = Number("1986");
  } else if (age === 37) {
    document.querySelector("h1").innerHTML = Number("1985");
  } else if (age === 38) {
    document.querySelector("h1").innerHTML = Number("1984");
  } else if (age === 39) {
    document.querySelector("h1").innerHTML = Number("1983");
  } else if (age === 40) {
    document.querySelector("h1").innerHTML = Number("1982");
  } else if (age === 41) {
    document.querySelector("h1").innerHTML = Number("1981");
  } else if (age === 42) {
    document.querySelector("h1").innerHTML = Number("1980");
  } else if (age === 43) {
    document.querySelector("h1").innerHTML = Number("1979");
  } else if (age === 44) {
    document.querySelector("h1").innerHTML = Number("1978");
  } else if (age === 45) {
    document.querySelector("h1").innerHTML = Number("1977");
  } else if (age === 46) {
    document.querySelector("h1").innerHTML = Number("1976");
  } else if (age === 47) {
    document.querySelector("h1").innerHTML = Number("19875");
  } else if (age === 48) {
    document.querySelector("h1").innerHTML = Number("1974");
  } else if (age === 49) {
    document.querySelector("h1").innerHTML = Number("1973");
  } else if (age === 50) {
    document.querySelector("h1").innerHTML = Number("1972");
  } else if (age === 51) {
    document.querySelector("h1").innerHTML = Number("1971");
  } else if (age === 52) {
    document.querySelector("h1").innerHTML = Number("1970");
  } else if (age === 53) {
    document.querySelector("h1").innerHTML = Number("1969");
  } else if (age === 54) {
    document.querySelector("h1").innerHTML = Number("1968");
  } else if (age === 55) {
    document.querySelector("h1").innerHTML = Number("1967");
  } else if (age === 56) {
    document.querySelector("h1").innerHTML = Number("1966");
  } else if (age === 57) {
    document.querySelector("h1").innerHTML = Number("1965");
  } else if (age === 58) {
    document.querySelector("h1").innerHTML = Number("1964");
  } else if (age === 59) {
    document.querySelector("h1").innerHTML = Number("1963");
  } else if (age === 60) {
    document.querySelector("h1").innerHTML = Number("1962");
  } else if (age === 61) {
    document.querySelector("h1").innerHTML = Number("1961");
  } else {
    document.querySelector("h1").innerHTML = ":)";
  }

  if (mounth === "farvardin") {
    document.querySelector("h2").innerHTML = "april";
  } else if (mounth === "ordibehesht") {
    document.querySelector("h2").innerHTML = "may";
  } else if (mounth === "khordad") {
    document.querySelector("h2").innerHTML = "june";
  } else if (mounth === "tir") {
    document.querySelector("h2").innerHTML = "july";
  } else if (mounth === "mordad") {
    document.querySelector("h2").innerHTML = "august";
  } else if (mounth === "shahrivar") {
    document.querySelector("h2").innerHTML = "september";
  } else if (mounth === "mehr") {
    document.querySelector("h2").innerHTML = "october";
  } else if (mounth === "aban") {
    document.querySelector("h2").innerHTML = "november";
  } else if (mounth === "azar") {
    document.querySelector("h2").innerHTML = "december";
  } else if (mounth === "dey") {
    document.querySelector("h2").innerHTML = "january";
  } else if (mounth === "bahman") {
    document.querySelector("h2").innerHTML = "faburary";
  } else if (mounth === "esfand") {
    document.querySelector("h2").innerHTML = "march";
  }
});
