// 1: ana to vori ||
function anaToVori(ana) {
    if (typeof (ana) != "number" || ana < 0) {
        return "You provided incorrect input. Please give the number 0 or more."
    }
    const vori = ana / 16;
    return vori;
};
/* const totalVori = anaToVori(64);
console.log(totalVori); */


// 2: panda cost ||
function pandaCost(singgara, somucha, jilapi) {
    if ((typeof (singgara) != "number" || singgara < 0) || (typeof (somucha) != "number" || somucha < 0) || (typeof (jilapi) != "number" || jilapi < 0)) {
        return "You provided incorrect input. Please give the number 0 or more."
    }
    // food price
    const perSinggaraPrice = 7;
    const perSomuchaPrice = 10;
    const perJilapiPrice = 15;
    // per food total price
    const totalSinggaraPrice = singgara * perSinggaraPrice;
    const totalSomuchaPrice = somucha * perSomuchaPrice;
    const totalJilapiPrice = jilapi * perJilapiPrice;
    // total cost
    const totalCost = totalSinggaraPrice + totalSomuchaPrice + totalJilapiPrice;
    return totalCost;
};
/* const totalCost = pandaCost(4, 5, 3);
console.log(totalCost); */


// 3: picnic budget ||
function picnicBudget(peoples) {
    if (typeof (peoples) != "number" || peoples < 0) {
        return "You provided incorrect input. Please give the number 0 or more."
    }
    // per people cost
    const first100PerPeopleCost = 5000;
    const second100PerPeopleCost = 4000;
    const restPerPeopleCost = 3000;
    // total budget calculation
    if (peoples >= 0 && peoples <= 100) {
        const first100Cost = peoples * first100PerPeopleCost;
        return first100Cost;
    }
    else if (peoples >= 101 && peoples <= 200) {
        const first100Cost = 100 * first100PerPeopleCost;
        const restPeoples = peoples - 100;
        const second100Cost = restPeoples * second100PerPeopleCost;
        const under200PeoplesCost = first100Cost + second100Cost;
        return under200PeoplesCost;
    }
    else if (peoples >= 201) {
        const first100Cost = 100 * first100PerPeopleCost;
        const second100Cost = 100 * second100PerPeopleCost;
        const restPeoples = peoples - 200;
        const restPeoplesCost = restPeoples * restPerPeopleCost;
        const totalBudgetTaka = first100Cost + second100Cost + restPeoplesCost;
        return totalBudgetTaka;
    }
};
/* const totalBudget = picnicBudget(230);
console.log(totalBudget); */


// 4: odd friend ||
function oddFriend(names) {
    if (!Array.isArray(names)) {
        return "Please input an array."
    }
    let oddNames = [];
    for (const oddElement of names) {
        if (typeof (oddElement) != "string") {
            return "Please place string inside the array."
        }
        else if (oddElement.length % 2 != 0) {
            oddNames.push(oddElement);
        }
    }
    // oddName check in an new array
    let oddName = "";
    for (const name of oddNames) {
        if (name.length % 2 != 0) {
            oddName = name;
            break;
        }
    }
    return oddName;
};
/* const names = oddFriend(["tony", "karolina", "jason", "jack", "willium", "elina", "kerk"]);
console.log(names); */