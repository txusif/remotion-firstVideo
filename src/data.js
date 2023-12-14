import data from './sampleData.json' assert {type: 'json'};

const questionsArray = data.input.questions;
// console.log('Questions:', questionsArray);

// questionsArray.forEach((question, index) => {
// 	console.log(`${index + 1}. ${question}`);
// });

const outputSentencesArray = Object.values(data.output).map(
	(entry) => entry.sentence
);
// console.log('Sentences:', outputSentencesArray);

// outputSentencesArray.forEach((sentence, index) => {
// 	console.log(`${index + 1}. ${sentence}`);
// });

const keywords = Object.values(data.output).map((entry) => entry.keywords);
// console.log(keywords);

export {questionsArray, outputSentencesArray, keywords};
