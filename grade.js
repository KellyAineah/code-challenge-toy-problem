
//student grade generator

//create a funtion named studentGradeGenerator that prompts user to input student marks

function studentGradeGenerator (studentMarks){
    //use conditional statements 
    //check if the studentMarks are between 80 and 100 and assigns grade 'A'
    if(studentMarks >79 && studentMarks <= 100){
        return "A";
    }
    //check if the studentMarks are between 60 and 79 and assigns grade 'B'
    else if(studentMarks >=60 && studentMarks <=79){
        return "B";
    }
    //check if the studentMarks are between 50 and 59 and assigns grade 'C'
    else if(studentMarks >=50 && studentMarks <= 59){
        return "c";
    }
    //check if the studentMarks are between 40 and 49 and assigns grade 'D'
    else if(studentMarks >=40 && studentMarks <= 49){
        return "D";
    }
    //if the studentMarks are less than 40, assign grade 'E'
    else if(studentMarks < 40){
        return "E";
    }else{
        const defaultMessage= "The input should be between 0 to 100"
        return defaultMessage;
    }
      
}
//invokes the function studentGradeGenerator
studentGradeGenerator();

 