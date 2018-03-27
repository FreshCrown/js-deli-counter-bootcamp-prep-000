

function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(theLine){
   if(theLine.length > 0){
    return `Currently serving ${theLine.shift()}.`;
}else{
     return "There is nobody waiting to be served!";
}

}

function currentLine(line){
  if(line.length > 0){
 
  return "This line is currently empty.";
  
  } else {
    var message = 'The line is currently:'
    var counter = 1
  //iterate through the line and add to a message # and name `${counter}. ${name}, `
  return `The line is currently:, `${counter},${name} , 2. Jane, 3. Ann`;
  
}

}



