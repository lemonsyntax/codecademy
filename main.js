
//Generate random number 

const GenerateRandomNumber = (number) => {
    return Math.floor(Math.random() * number); 
}
    

const messages = {
    "fisrtMessage": ['lawyer', 'musicain','footballer'],
    "secondMessage": ['armed robber', 'pick pocket', 'serial killer'],
    "thirdMessage": ['amazing', 'beautiful', 'sexy'],
    "fourthMessage": ['ugly', 'dirty', 'nuissance']
};

// to store genearted message for display
let generatedMessage = [];

//The length of the object message

let properties = Object.keys(messages);

for (let prop in properties){

    let objectLength = Object.keys(messages).length;

    let optionIdx = GenerateRandomNumber(objectLength);

    switch (prop){
        case 'firstMessage': generatedMessage.push(`You are a/an ${messages[prop][optionIdx]}`);
        break;
    
        case 'secondMessage' : generatedMessage.push(`You are a/an ${messages[prop][optionIdx]}`);
        break;

        case 'thirdMessage' : generatedMessage.push(`You are a/an ${messages[prop][optionIdx]}`);
        break;

        case 'fourthMessage' : generatedMessage.push(`You are a/an ${messages[prop][optionIdx]}`);
        break;

        //default : generatedMessage.push('You have no messages');
    }
}

console.log(generatedMessage);
