// let str='abc';
// let str1="abc";
// let str2= "abc";

// // let str4=new str4('abc');
// // let str5=new str5(`abc`);


// console.log(str);
// console.log(str2)

// ! 15-09-2025  

// ! split()
// split is used to convert string into array based on the separator....

// let str='this is javascript';
// let arr='this';
// // if we do not pass separtor , it will retun the complete string as the single element of the array
// console.log(str.split());
// //' ' as a separator will retun all the words as the elements of the array
// console.log(str.split(' '));
// //  '' as a seperator will return all the chracters of the elements of the array
// console.log(str.split(''));
// console.log(str.at(-1));

// console.log(arr.split(' '));
// console.log(arr.split(''));

// console.log(arr.at(-1));

                                            //===concat()
                                            //concat is used to join multiple strings together
                                            let firstname='rahul';
                                            let lastname='choudhary';
                                            let fullname=firstname.concat(' ',lastname);
                                            console.log(fullname);

//--->>charCodeAt()
// it will return the ascii value of a charcter present ata a particular index

// let str='java';
// console.log(str.charAt(1));
// console.log(str.charCodeAt(1));

// endsWith()
//it will return a boolean value , based on if a string ends with a particular substrings

// let str= 'java';
// console.log(str.endsWith(va));






// Q1.wap to retun the number of volwels present inside a String 

// Q@ wap to return the nnuber of words inside a String

// Q3. wap to return the number of  ' ' within a String 

// q4. wap to retun the longest wword from  a string

// Q5. wap to reverse the letters word from a string
//     this is java -> avaj si siht

// q6. wap to reverse the words of the string 
//     'this is java'-> 'java is this'

// q7. wap to idendify if a name starts with a vowel




// function countVowels(str) {

//     str = str.toLowerCase();

    
//     let vowels = "aeiou";

//     // Count
//     let count = 0;
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }


// let input = "aeiou";
// console.log("Number of vowels:", countVowels(input));



//**** longest word from the string
// function longestWord(str){
//     let max=0;
//     let maxLenghtword='';
//     let words =str.split(' ');
//     console.log(words);

//     for(let i=0; i<=words.length-1;i++){
//         if(words[i].length>max){
//             max=words[i].length;
//             maxLenghtword=words[i]
//         }
//     }
//     return maxLenghtword
// }
// console.log(longestWord('we love javascript today hello'));

// let str='this is java';
// let reversed='';
// for (let i=str.length-1;i>=0;i--){
//     reversed=reversed+str[i]
// }
// console.log(reversed);





