  // for (var i = 0; i<hyperNames.length;i++){
  //   document.write(hyperNumbers[i]+" " +hyperNames[i]+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + hyperGenders[i]+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + hyperTeams[i] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + hyperTeams2[i] + "<br>");
  //
  // }

var groups =[];

//
// function generate(groupSize, teams, gender, names, numberz){
//   var numbers = numberz.slice(0);
//   var chunk = [];
//   var tries = 0;
//   var whileloops=0;
//   var compareSpot = Math.floor(Math.random() * (numbers.length-1 - 0) + 0);
//
//     while(numbers.length>0 && whileloops<1000){
//       if (hyperTeams[numbers[numbers.length-1]]===hyperTeams[numbers[compareSpot]] || hyperTeams1[numbers[numbers.length-1]]===hyperTeams1[numbers[compareSpot]] || hyperTeams2[numbers[numbers.length-1]]===hyperTeams2[numbers[compareSpot]] || hyperTeams3[numbers[numbers.length-1]]===hyperTeams3[numbers[compareSpot]]){
//         compareSpot = Math.floor(Math.random() * (numbers.length-1 - 0) + 0);
//         tries++;
//         console.log("try nr: "+tries)
//         console.log("compareSpot "+compareSpot +"and numbers is this long: "+numbers.length)
//         if(tries>20){
//          numbers = numberz.slice(0);
//          groups = [];
//          chunk = [];
//          compareSpot = Math.floor(Math.random() * (numbers.length-1 - 0) + 0);
//          tries=0;
//          whileloops++;
//          console.log("whileloops: " +whileloops)
//         }
//       }else{
//       chunk.push(numbers[numbers.length-1],numbers[compareSpot]);
//
//       numbers.splice(numbers.length-1,1)
//       numbers.splice(compareSpot,1)
//
//       groups.push(chunk);
//       compareSpot = Math.floor(Math.random() * (numbers.length-1 - 0) + 0);
//       chunk = [];
//       tries=0;
//     }
//
//
//   }
// };
function generate(groupSize, teams, gender, names, numberz){
  var numbers = numberz.slice(0);
  var chunk = [];
  var tries = 0;
  var whileloops=0;
  var startG;
  var conflictvar
  var conflictvar1
  var conflictvar2
  var conflictvar3
  var conflictvar4


  var rand = Math.floor(Math.random() * (numbers.length - 0) + 0);
  var latestG = hyperGenders[numbers[rand]];

  var genderSw = true;
  console.log(hyperGenders[numbers[rand]] !== startG)

  function isConflict(arr, val, sets) {
      var indexes = [], i;
      for(i = 0; i < arr.length; i++){
          if (sets[arr[i]] === val){
             indexes.push(i);
              ;}
              }
			if (indexes.length>0){
			return true;
    }else{
    return false;
    }
  }
  function isGenderSame(arr, val, sets) {
    if(chunk.length===0&&hyperNames[numbers[rand]]){
      return false
    }
    // console.log(hyperNames[chunk[chunk.length-1]] + hyperNames[numbers[rand]] )
    if(hyperGenders[chunk[chunk.length-1]]===hyperGenders[numbers[rand]]){
      // console.log("true")
      return true

    }else{
      // console.log("false")

      return false
    }
  }
  function trying(){
    rand = Math.floor(Math.random() * (numbers.length - 0) + 0);
    // console.log(numbers.length + " "+rand)
    tries++;
    // console.log(tries)
    // console.log("try nr: "+tries)
    // console.log("rand "+rand +"and numbers is this long: "+numbers.length)
    if(tries>3000){
     numbers = numberz.slice(0);
     groups = [];
     chunk = [];
    //  rand = Math.floor(Math.random() * (numbers.length - 0) + 0);
     tries=0;
     startG=0;
     latestG=0;
     whileloops++;
     console.log("whileloops: " +whileloops)
    //  generate();
    }
  }
    while(numbers.length>0 && whileloops<100000){
      // if (chunk.length===0){
      // if (chunk.length===0 && hyperGenders[numbers[rand]] !== startG){

// console.log(startG)
        // chunk.push(numbers[rand]);
        // startG = hyperGenders[numbers[rand]];
        // latestG = hyperGenders[numbers[rand]];
        // startG
        // numbers.splice(rand,1)

        // rand = Math.floor(Math.random() * (numbers.length - 0) + 0);
      // }else{

        // console.log(chunk.length)

      // console.log("test this new person "+hyperNames[numbers[rand]] +" "+hyperGenders[numbers[rand]])
         conflictvar = isConflict(chunk, hyperTeams[numbers[rand]], hyperTeams)
         conflictvar1 = isConflict(chunk, hyperTeams1[numbers[rand]], hyperTeams1)
         conflictvar2 = isConflict(chunk, hyperTeams2[numbers[rand]], hyperTeams2)
         conflictvar3= isConflict(chunk, hyperTeams3[numbers[rand]], hyperTeams3)
         conflictvar4= isGenderSame();
        // console.log(rand +" is the number "+ numbers.length+ "är hur lång numbers är"+ hyperNames[numbers[rand]]  + conflictvar+" "+conflictvar1+" "+conflictvar2+" "+conflictvar3+" "+conflictvar4 +" "+chunk.length);
        // console.log(hyperGenders[chunk[chunk.length-1]] +" "+hyperGenders[numbers[rand]] + conflictvar4)
        // console.log(hyperNames[numbers[rand]])
      // if(hyperNames[numbers[rand]]===undefined || conflictvar4){
        if(conflictvar ||conflictvar1 ||conflictvar2 ||conflictvar3||hyperNames[numbers[rand]]===undefined){
// console.log("testa igen")

        trying();
      }else {

        // console.log("chunk length is: "+chunk.length + " already in chunk is: "+ hyperNames[chunk[chunk.length-1]]+hyperGenders[chunk[chunk.length-1]]+" new chunkee is:"+hyperNames[numbers[rand]]+hyperGenders[numbers[rand]])
        // console.log("PUSH!")
        // console.log(hyperNames[numbers[rand]])
        chunk.push(numbers[rand]);

        // latestG = hyperGenders[chunk[chunk.length-1]]
        numbers.splice(rand,1)
      //   if(groups.length>8){
      //   console.log(groups)
      // }
        if (chunk.length===groupSize || numbers.length===0){
          // console.log(chunk)
          groups.push(chunk);
          chunk = [];
          //

        }
        rand = Math.floor(Math.random() * (numbers.length - 0) + 0);
        tries=0;
        // trying();
        // console.log(numbers.length + " "+numbers)


      }

  }
    console.log("stopped caring")
  if(whileloops<10000){
    // document.write("BOOM"+"<br>")
  }

};

generate(3, hyperTeams, hyperGenders, hyperNames, hyperNumbers);

document.write("<br><br>");
for (var i = 0; i<groups.length;i++){
  document.write((i+1)+".&#09;")

  for (var j = 0; j<groups[i].length;j++){

  document.write(hyperNames[groups[i][j]] + ". ")
  }
  document.write("<br>")

};
