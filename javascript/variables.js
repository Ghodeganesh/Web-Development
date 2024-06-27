let accountId=12346;
// console.log(accountId);

//cant reassign value of Const
const id="2021FHCO085";
//  id="2021FHCO0845";


// console.log(id)

satateName="Maharashtra"
// console.log(satateName)


//var can be reassign
var val=30;
var val=40
// console.log(val)


//let can not redeclare but can be used in diffrent scopes
let score=350;
{
let score=34;
console.log(score)
}
console.log(score)

console.table([accountId,id,satateName,val,score])

// OutPut of console.table:
// ┌─────────┬───────────────┐
// │ (index) │    Values     │
// ├─────────┼───────────────┤
// │    0    │     12346     │
// │    1    │ '2021FHCO085' │
// │    2    │ 'Maharashtra' │
// │    3    │      40       │
// │    4    │      350      │
// └─────────┴───────────────┘