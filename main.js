
//Generate random number 

const GenerateRandomNumber = (number) => Math.floor(Math.random() * number); 

const messages = {
    "fisrtMessage": ['lawyer', 'musicain','footballer'],
    "secondMessage": ['armed robber', 'pick pocket', 'serial killer'],
    "thirdMessage": ['amazing', 'beautiful', 'sexy'],
    "fourthMessage": ['ugly', 'dirty', 'nuissance']
};

// to store genearted message for display
let generatedMessage = [];

//The length of the object messages
let objectLength = Object.keys(messages).length;

let optionIdx = GenerateRandomNumber(objectLength);

let properties = Object.keys(messages);

for (let prop in properties){
    switch (prop){
        case 'firstMessage': generatedMessage.push(`You are a/an ${messages.fisrtMessage[optionIdx]}`);
        break;
    
        case 'secondMessage' : generatedMessage.push(`You are a/an ${messages.secondMessage[optionIdx]}`);
        break;

        case 'thirdMessage' : generatedMessage.push(`You are a/an ${messages.thirdMessage[optionIdx]}`);
        break;

        case 'fourthMessage' : generatedMessage.push(`You are a/an ${messages.fourthMessage[optionIdx]}`);
        break;

        default : generatedMessage.push('You have no messages');
    }
}

console.log(generatedMessage);
