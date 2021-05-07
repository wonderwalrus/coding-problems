(function () {

    "use strict";

    function findLowestMissingNumber(numbers) {
        // store positive inputs in a hash
        var hash = {};
        numbers.forEach(function(n) {
            if (n >= 0 && hash[n] === undefined) {
                hash[n] = true;
            }
        });
        
        // find the first missing number in the hash
        var curr = 1;
        while (hash[curr]) {
            ++curr;
        }
        
        return curr;
    }

    function calculate() {
        var txtNumbers = document.getElementById("txtNumbers").value;
        var numbers = txtNumbers.split(" ").map(n => Number(n));

        var lowestNum = findLowestMissingNumber(numbers);
        document.getElementById("output").innerHTML = lowestNum;
    }
    
    $(function() {
        $("#btnGo").click(calculate);
    });
    
})();

function reverseAnArrayWithoutAffectingSpecialCharacters (str) {
    var arr = Array.from(str),
        i = 0,
        j = arr.length - 1,
        temp;
    
    while (i < j) {
        while (!isLetter(arr[i])) { i++; }
        while (!isLetter(arr[j])) { j--; }
        if (i < j) {
            // swap
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            
            i++;
            j--;
        }
    }
    return arr.join("");

    function isLetter(c) {
        return c.match(/[a-z|A-Z]/i);
    }

}

function calculateNumberOfSticksInGrid_Method1(sideA, sideB) {
    var numberOfSquares = sideA * sideB;
    var numberOfSticks = (numberOfSquares * 2) + sideA + sideB;
    return numberOfSticks;
}

function calculateNumberOfSticksInGrid_Method2(height, width) {
    var verticalSticksPerRow = width + 1;
    var horizontalSticksPerColumn = height + 1;

    var verticalSticks = verticalSticksPerRow * height;
    var horizontalSticks = horizontalSticksPerColumn * width;

    return verticalSticks + horizontalSticks;
}
