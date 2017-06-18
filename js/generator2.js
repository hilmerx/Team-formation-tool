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
function generate(noofGroups, numberz){
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
  var dudes


  var rand = Math.floor(Math.random() * (numbers.length - 0) + 0);
  // console.log(hyperGenders[numbers[rand]])
  var latestG = hyperGenders[numbers[rand]];

  var genderSw = true;
  // console.log(hyperGenders[numbers[rand]] !== startG)

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
  function tryAgain(){
    rand = Math.floor(Math.random() * (numbers.length - 0) + 0);
    tries++;
    if(tries>40){
     numbers = numberz.slice(0);
     groups = [];
     chunk = [];
     tries=0;
    //  startG=0;
    //  latestG=0;
     whileloops++;
    //  console.log("whileloops: " +whileloops)
    }
  }
  function allguyz(){
    dudes = [];
      for(var i = 0; i < numbers.length; i++){
          if (hyperGenders[numbers[i]] === true){
             dudes.push(numbers[i]);
              ;}
              }
      if (dudes.length===numbers.length){
      return true;
    }else{
    return false;
    }

  }
    while(numbers.length>0 && whileloops<100000){
         conflictvar = isConflict(chunk, hyperTeams[numbers[rand]], hyperTeams)
         conflictvar1 = isConflict(chunk, hyperTeams1[numbers[rand]], hyperTeams1)
         conflictvar2 = isConflict(chunk, hyperTeams2[numbers[rand]], hyperTeams2)
         conflictvar3= isConflict(chunk, hyperTeams3[numbers[rand]], hyperTeams3)
         var allguyzvar = allguyz();
        //  console.log(allguyzvar.length);


      // if(conflictvar ||conflictvar1 ||conflictvar2 ||conflictvar3||hyperNames[numbers[rand]]===undefined){
          if(conflictvar ||conflictvar1 ||conflictvar2 ||conflictvar3||hyperNames[numbers[rand]]===undefined||latestG===hyperGenders[numbers[rand]]){
        tryAgain();
      }else if(dudes.length===6){
        for(var i=0; i<dudes.length;i++){
          // console.log(hyperNames[dudes[i]])
          // console.log(groups[1])

          for(var j=0; j<groups.length;j++){
            // console.log(groups[j])

            conflictvar = isConflict(groups[j], hyperTeams[dudes[i]], hyperTeams)
            conflictvar1 = isConflict(groups[j], hyperTeams1[dudes[i]], hyperTeams1)
            conflictvar2 = isConflict(groups[j], hyperTeams2[dudes[i]], hyperTeams2)
            conflictvar3= isConflict(groups[j], hyperTeams3[dudes[i]], hyperTeams3)
              if(!conflictvar && !conflictvar1 && !conflictvar2 && !conflictvar3){
                groups[j].push(dudes[i]);
                numbers.splice(dudes[i],1)

                dudes.splice(i,1)

                break;
                break;
              }

break;
            }
      }
      if(dudes.length>0){
        whileloops++;
      }
    }
      else{

        // console.log("chunk length is: "+chunk.length + " already in chunk is: "+ hyperNames[chunk[chunk.length-1]]+hyperGenders[chunk[chunk.length-1]]+" new chunkee is:"+hyperNames[numbers[rand]]+hyperGenders[numbers[rand]])
        // console.log("PUSH!")
        // console.log(hyperNames[numbers[rand]])
        chunk.push(numbers[rand]);
        // console.log("gender: "+hyperGenders[chunk[chunk.length-1]])
        // console.log("latest G: "+latestG)
        latestG =!latestG;

        // latestG = hyperGenders[chunk[chunk.length-1]]
        numbers.splice(rand,1)
      //   if(groups.length>8){
      //   console.log(groups)
      // }
        if (chunk.length===Math.floor(hyperNames.length/noofGroups) || numbers.length===0){
          groups.push(chunk);
          chunk = [];
        }
        // if (chunk.length===noofGroups || numbers.length===0){
        //   groups.push(chunk);
        //   chunk = [];
        // }

        rand = Math.floor(Math.random() * (numbers.length - 0) + 0);
        tries=0;
        // tryAgain();
        // console.log(numbers.length + " "+numbers)


      }

  }
    console.log("stopped caring")
  if(whileloops<10000){
    document.write("BOOM"+"<br>")
  }

};

generate(12, hyperNumbers);
// console.log(Math.floor(hyperNames.length/10))
document.write("<br><br>");
for (var i = 0; i<groups.length;i++){
  for (var j = 0; j<groups[i].length;j++){

  document.write(hyperNames[groups[i][j]] + " ")
  }
  document.write("<br>")

};
