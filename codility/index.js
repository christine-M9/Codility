// declare a function that takes a list of R.
function solution(R) {
    let max_indicator = 0; // keeps track of max pothole
    let pothole_depth = 0; // keeps depth of current pothole
    let pothole_count = 0; // keeps count of consecutive potholes

 // a loop that iterates through R elements.
    for (let i = 0; i < R.length; i++) {

         let segment = R[i];  //assigns the value of the element at index i in the array R to the variable segment.

// if the current seg is smooth , calculate current pothole (p.d * p.c ) & update max indicator if its larger.
        if (segment === 0) {
            max_indicator = Math.max(max_indicator, pothole_depth * pothole_count);
            pothole_depth = 0;
            pothole_count = 0;
        }
// else if current segment has a pothole, update p.d to be max of current depth.increment p.c to account for the consecutive potholes.
 
        else {
            pothole_depth = Math.max(pothole_depth, segment);
            pothole_count++;
        }
    }

// ensure any remaining pothole is handled 
    max_indicator = Math.max(max_indicator, pothole_depth * pothole_count);

    return max_indicator;
}

console.log(solution([0, 4, 1, 1, 0, 9, 1]));
console.log(solution([1, 5, 3, 0, 5, 2, 3, 0, 8, 3, 7]))  
console.log(solution([0, 0, 0, 7, 0]))