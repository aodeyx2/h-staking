import React from "react";
import rarity333 from "../config/rarity333.json";
import rarity3333 from "../config/rarity3333.json";

const apple = () => {
  const steps333 = [118, 218, 418, 818, 1500, 2680];
  const steps3333 = [84, 110, 125, 152, 190, 982]

  const rarityOf333 = [];
  const rarityOf3333 = [];
  const obj333 = []
  const obj3333 = []

  const result333 = []
  const result3333 = []

  const range333 = []
  const range3333 = []

  let rararr = []

  rarity333.map((item) =>
    rarityOf333.push({
      rarity: item.Rarity,
      id: item.token_id,
    })
  );

  rarity3333.map((item) =>
    rarityOf3333.push({
        rarity: item.Rarity,
        id: item.token_id,
      })
  );

  function checkStage(item, startIndex, stopIndex, array) {
    if (item.rarity > array[startIndex] && item.rarity < array[stopIndex]) {
      return item;
    }
  }

  function min(arr) {
    const rarity = []
    arr.map(item => (
      rarity.push(Number(item.rarity))
    ))

    let min = Math.min(...rarity)
    return(min)
  }

  function max(arr) {
    const rarity = []
    arr.map(item => (
      rarity.push(Number(item.rarity))
    ))

    let max = Math.max(...rarity)
    return(max)
  }

function chechSteps(arr, rarity, result) {
  const result1 = rarity.filter(item => checkStage(item, 0, 1, arr));
  const result2 = rarity.filter(item => checkStage(item, 1, 2, arr));
  const result3 = rarity.filter(item => checkStage(item, 2, 3, arr));
  const result4 = rarity.filter(item => checkStage(item, 3, 4, arr));
  const result5 = rarity.filter(item => checkStage(item, 4, 5, arr));

  result.push(result1, result2, result3, result4, result5)
}

chechSteps(steps333, rarityOf333, result333)
chechSteps(steps3333, rarityOf3333, result3333)

 result333.map(obj => (
    range333.push([min(obj), max(obj)])
  ))

  result3333.map(obj => (
    range3333.push([min(obj), max(obj)])
  ))


  result3333[0].map(item => rararr.push(parseInt(item.id)))
  // remain hac333 index 2 and 3 gas is 24$ + 14$

  console.log(rararr)
  //console.log(result3333)





  return <div>apple</div>;
};

export default apple;


