
//Generate random number 

const GenerateRandomNumber = (number) => {
    return Math.floor(Math.random() * number); 
}
    

const messages = {
    "fisrtMessage": ['lawyer', 'musicain','footballer'],
    "secondMessage": ['armed robber', 'pick pocket', 'serial killer'],
    "thirdMessage": ['amazing', 'beautiful', 'sexy'],
    "fourthMessage": ['ugly', 'dirty', 'clean']
};

// to store genearted message for display
let generatedMessage = [];

//The length of the object message

for (let prop in messages){

    let optionIdx = GenerateRandomNumber(messages[prop].length);

    switch (prop){
        case 'firstMessage': generatedMessage.push(`You are a/an ${messages[prop][optionIdx]}`);
        break;
    
        case 'secondMessage' : generatedMessage.push(`You are a/an ${messages[prop][optionIdx]}`);
        break;

        case 'thirdMessage' : generatedMessage.push(`You are ${messages[prop][optionIdx]}`);
        break;

        case 'fourthMessage' : generatedMessage.push(`You are ${messages[prop][optionIdx]}`);
        break;

        default : generatedMessage.push('You have no messages');
    }
}

// Function to format message
function formatMessage(m){
    const mf = generatedMessage.join('\n');
}

console.log(formatMessage(generatedMessage));