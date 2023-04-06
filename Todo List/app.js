const todo = [];
let input = prompt("What would you like to do?");
while(input.toLowerCase() !== "quit"){
    if (input === "add"){
        let add = prompt("Add new Todo")
        todo.push(add);
    }
    else if (input === "list"){
        for (let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i]}`)
        }
    }
    else if (input === "delete"){
        let remove = parseInt(prompt("choose which Todo to remove"));
        todo.splice(remove, 1)
    }
    else{
        console.log("Invalid option!")
    }
    console.log("-------")
    console.log(todo)
    input = prompt("What would you like to do?");
}