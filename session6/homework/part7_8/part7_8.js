let character = {
    name : "light",
    age : 17,
    strength: 8,
    defence: 10,
    HP : 100,
    backPack: [
        "shield",
        "bread loaf",
    ],
    gold: 100,
    level: 2,
}
character.gold += 50;
character.backPack.push("FlintStone")
character.pocket =["MonsterDex","Flashlight"]
let skill = [
    {
        name : "Tackle",
        minimumLevel: 1,
        damage : 5,
        hitRate : 0.3,
    },
    {
        name: "Quick attack",
        minimumLevel: 2,
        damage: 3,
        hitRate: 0.5,
    },
    {
        name: "Strong Kick",
        minimumLevel: 4,
        damage: 9,
        hitRate: 0.2

    }
]
for( let i = 0; i < skill.length; i++){
    console.log(skill[i]);
    console.log(`${i + 1}. ${skill[i].name}`);
}
let checkSkill = Number(prompt("Enter the skill you want to use? (chose 1,2 or 3)"))
if (character.level >= skill[checkSkill - 1 ].minimumLevel ){
    if (skill[checkSkill - 1].hitRate > Math.random){
    console.log(skill[checkSkill - 1].damage);
    }
    else{
        console.log("your skill is miss");    
    }
    
}
else {
    console.log("you have not enough lever to use this skill");
    }