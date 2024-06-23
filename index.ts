import inquirer from "inquirer";

let Converter = {
    "PKR": {
        "USD": 0.004,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    }
};

async function convertCurrency() {
    const answer: {
        from: "PKR" | "USD" | "GBP",
        to: "PKR" | "USD" | "GBP",
        amount: number
    } = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["PKR", "USD", "GBP"],
            message: "Select your currency:"
        },
        {
            type: "list",
            name: "to",
            choices: ["PKR", "USD", "GBP"],
            message: "Select target currency:"
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your conversion amount:"
        }
    ]);

    const { from, to, amount } = answer;

    if (from && to && amount) {
        let result = Converter[from][to] * amount;
        console.log(`Your conversion from ${from} to ${to} is ${result}`);
    } else {
        console.log("Invalid inputs");
    }
}

convertCurrency();
