const names = ["Dominic","Mario","Marwa","Matthias","Wolfgang"];

console.log(whoPays(names) + " zahlt heute das Abendessen!");

function whoPays(names) {
    return names[Math.floor(Math.random()*(names.length))];
}