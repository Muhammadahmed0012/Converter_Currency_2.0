#! usr\bin\env node
import inquirer from "inquirer";
let Currency_Names = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.76,
    INR: 74.57,
    PKR: 287.92,
    MYR: 58.59
};
for (let i = 1; i < 5;) {
    let user_requirement = await inquirer.prompt([
        {
            name: "From",
            message: "Enter From Currency Name!",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "MYR"]
        },
        {
            name: "To",
            message: "Enter To Currency Name!",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "MYR"]
        },
        {
            name: "amount",
            message: "Enter the amount to converte of your choice Currency!",
            type: "number"
        }
    ]);
    //conditional statement
    let from_amount = Currency_Names[user_requirement.From];
    let to_amount = Currency_Names[user_requirement.To];
    let Amount = user_requirement.amount;
    let base_amount = Amount / from_amount;
    let converte_amount = base_amount * to_amount;
    console.log(converte_amount.toFixed(3));
}
console.log("Thank you so much to use my cli curreny converter app!");
