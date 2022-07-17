// SPDX-License-Identifier: MIT  
pragma solidity ^0.8.4;

contract MoodDiary{

    string mood;

    //this will set the mood
    function setMood(string memory _mood) public {
        mood = _mood;
    }

    //this will get the mood
    function getMood() public view returns(string memory){
        return mood;
    }
}

// abi is a way to express your classes or contracts in a small and compact way
//it just needs the function definition so that external parties know how to use your functions
//only includes public function
//veiw - not changing state of the blockchain- doesent require gas
