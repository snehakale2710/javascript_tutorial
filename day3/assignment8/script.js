// 1. Nullish Coalescing (??) Assign a default username if the variable is null or undefined
let username = null;
let result1 = username ?? "Guest";
console.log("1. Nullish Coalescing (??)");
console.log("Username:", result1);

// 2. Difference between || and ??
let value1 = "";
let value2 = 0;
console.log("2. OR (||) vs Nullish Coalescing (??)");
console.log("Empty String with || :", value1 || "Default");
console.log("Empty String with ?? :", value1 ?? "Default");
console.log("Zero with || :", value2 || 100);
console.log("Zero with ?? :", value2 ?? 100);

// 3. Optional Chaining (?.) Safely access a nested property
let student = {
    name: "Sneha",
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
};
console.log("3. Optional Chaining");
console.log(student.address?.city);
console.log(student.address?.country);

// 4. Optional Chaining with Method
let user = {
    name: "Rahul"
};
console.log("4. Optional Chaining with Method");
user.getDetails?.();
console.log("Method called safely without error.");

// 5. Logical Nullish Assignment (??=)
let city = null;
city ??= "Mumbai";
console.log("5. Nullish Assignment (??=)");
console.log("City:", city);

// 6. Logical OR Assignment (||=)
let message = "";
message ||= "Welcome User";
console.log("6. OR Assignment (||=)");
console.log("Message:", message);

// 7. Logical AND Assignment (&&=)
let status = "Active";
status &&= "Logged In";
console.log("7. AND Assignment (&&=)");
console.log("Status:", status);