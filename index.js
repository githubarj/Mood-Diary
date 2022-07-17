var provider = new ethers.providers.Web3Provider(
  window.ethereum,
  "ropsten"
);

provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    MoodContract = new ethers.Contract(
      MoodContractAddress,
      MoodContractABI,
      signer
    );
  });
});

var MoodContractAddress = "0x3740F7Cb4819116c5C2A8293C0eE422469767dec";
var MoodContractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_mood",
        type: "string",
      },
    ],
    name: "setMood",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMood",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
var MoodContract;
var signer;


async function getMood() {
  getMoodPromise = MoodContract.getMood();
  var mood = await getMoodPromise;
  console.log(mood);
  let display = document.getElementById("got");
  display.textContent = mood;
}

async function setMood() {
  let mood = document.getElementById("mood").value;
  let setMoodPromise = MoodContract.setMood(mood);
  await setMoodPromise;
}
