# Lesson 1

## Lesson Overview

1. Install Windows Terminal
2. Execute basic commands
3. Set up workspace folder
4. Install GitHub CLI
5. Pull down GitHub repository
6. Install NodeJs
7. Introduction to NodeJs REPL
8. Basic operators with numbers
9. Logical evaluation
10. Introduction to strings
11. String operators
12. Introduction to variables
13. Data types
14. Parsing strings to numbers
15. Conditional logic
16. Break for 10 minutes
17. Introduction to Coding (16 minutes)
18. Install Visual Studio Code
19. Visual Studio Code overview
20. Hello world program
21. Addition program
22. Conditional statements
23. Age categorization program
24. Questions
25. Closing notes

## Lesson Steps

### 1. Install Windows Terminal

Windows Terminal is a new, convenient, and powerful tool giving you access to system and third-party tools. Terminal uses Command Prompt and Powershell under the hood to execute commands. 

- Open the `Microsoft Store`
- Search for `Windows Terminal`
  - This link can be used to quickly find [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701) in the store
- Click Get/Install

### 2. Execute basic commands

- Launch Windows Terminal
- Use _echo_ command to print message

  `echo "Hello World"`

- Use _ping_ command to check communication

  `ping google.com`

- Use _ipconfig_ command to check local IP address 

  `ipconfig`

- Use _Invoke-RestMethod_ command to get public IP address and location

  `Invoke-RestMethod ipinfo.io`

- Use _chrome.exe_ command to launch Chrome and open a website

  `"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" ipinfo.io`

### 3. Set up workspace folder

- Execute the `dir` command to see the files and folders in the current directory
- Create a new folder called _"workspace"_ by executing the command `mkdir workspace`
- Navigate into the workspace folder by executing command `cd workspace`
- Create another folder called _"repositories"_ by executing the command `mkdir repositories`
- Navigate into the repositories folder by executing command `cd repositories`

### 4. Install GitHub CLI

- Go to the [GitHub CLI website](https://cli.github.com/)
- Click download
  - If the download button doesn't appear, [use this direct link](https://github.com/cli/cli/releases/download/v1.7.0/gh_1.7.0_windows_amd64.msi)
- Install the CLI by running the executable
- Go to [https://github.com/](https://github.com/) and create an account if you don't have one already
- Close and reopen Windows Terminal
- Navigate back to the repository folder using the command `cd workspace/repositories`
- Execute `gh auth login` to login
- Follow the on-screen prompts

### 5. Pull down GitHub repository

- Go to the _learnToCodeWithPeter_ repo [https://github.com/peter-otoole/learn-to-code-with-peter](https://github.com/peter-otoole/learn-to-code-with-peter)
- Click the green `Code` button
- Click `GitHub CLI` button
- Click the clipboard button at the end of the next line

  `gh repo clone peter-otoole/learn-to-code-with-peter`

- Paste the command in Windows Terminal to download/clone the repository to your local working directory
- Navigate into the repository using `cd learn-to-code-with-peter`

### 6. Install NodeJs

- Go to the [NodeJs website](https://nodejs.org/en/download/)
- Download the LTS version for your OS type
- Run the downloaded installer choosing default options
- Close and reopen Windows Terminal
- Navigate back to the repository folder using the command `cd workspace/repositories`

### 7. Introduction to NodeJs REPL

>REPL also known as Read Evaluate Print Loop is a programming language environment(Basically a console window) that takes single expression as user input and returns the result back to the console after execution.
~[NodeJS docs](https://nodejs.dev/learn/how-to-use-the-nodejs-repl)

We will use the REPL to execute some basic commands and operations. As mentioned above, each line entered will be _"run"_ almost as if it were an individual program. The output of each line entered will be printed to the console. Test this out by entering some numbers and words.

```Javascript
> "Hello World"
> 1
> 2
> hello
```

_Note: We expect the last line to fail with an error stating "hello is not defined." We will come back to this later._

### 8. Basic operators with numbers

In most programming languages, the mathematical operators for addition, subtraction, multiplication, and division work *almost as you would expect. 

We can test using the NodeJs REPL. Try entering some basic mathematical expressions.

```Javascript
> 1 + 2
> 3 - 2
> 1 - 3
> 3 * 5
> 20 / 4
```

Mathematical operators can also be used in other situations. For example, the addition operator can be used to attach two words together. _Note: we need to include a space so the words don't get smashed together._

```Javascript
> 'hello' + ' ' + 'world'
```

A lesser well known operator is the modulo (a.k.a. mod) operator. In programming, this is represented by the percentage symbol. This operator gives the remainder after one number is divided by another. For example, if you divide 17 by 5, 3 is the number of times 5 first evenly into 17, 2 is the remainder left over after 3 * 5 is removed from 17. 


```Javascript
> 17 % 5
```

### 9. Logical evaluation

In this context, logical evaluation means to take an expression and evaluate it to either `true` or `false`. A subset of this logic is known as Boolean logic. Boolean logic is the subset where expressions consisting of `true` and `false` can be evaluated to give a final, single value of either `true` or `false`.

In JavaScript, all values can be evaluated to either `true` or `false`. From here, Boolean operations can be performed to get the final, single value.

The most common logical operators are:

- The and operator, this is represented by `&&` and it returns true if the two inputs are two e.g. `true && true => true`
- The or operator, this is represented by `||` and it returns true if either input is true e.g. `true || false => true`
- The not operator, this is represented by `!` and it returns the opposite of the input e.g. `!true => false`
- The comparison operator, this is represented by `==` and it returns true if the two inputs are the same e.g. `1 == 1 => true`
  - Note, in JavaScript, we will use `===` instead of `==`. The reasoning will be clearing as you learn more about the language
- The "not" comparison operator, this is represented by `!=` and it returns true if the two input values are not the same  e.g. `1 != 1 => false`
  - Note, in JavaScript, we will use `!==` instead of `!=`. The reasoning will be clearing as you learn more about the language
- The greater than operator, this is represented by `>` and it returns true if the first value is larger than the second e.g. `2 > 1 => true` 
- The greater than or equal operator, this is represented by `>=` and it returns true if the first value is larger than or the same as the second e.g. `2 >= 2 => true` 
- The less than operator, this is represented by `<` and it returns true if the first value is smaller than the second e.g. `1 < 2 => true` 
- The less than or equal operator, this is represented by `<=` and it returns true if the first value is less than or the same as the second e.g. `1 <= 1 => true` 

### 10. Introduction to strings

A string is a representation of an arbitrary list of characters. There is no limitation for what can be stored in a string. Strings are denoted with quotes. In JavaScript, either single or double quotes can be used. For example `'hello world'` and `"hello world"` are both valid strings.

### 11. String operators

Operators can be performed on more than just numbers and Boolean values. As we saw above, the plus operator (`+`) can be used to merge two strings into a single string.

```JavaScript
'hello' + ' ' + 'world' => 'hello world'
```

The comparison operator (`===`) and "not" comparison operator (`!==`) can also be used on strings.

```JavaScript
'hello' === 'world' => false
'hello' !== 'world' => true
```

### 12. Data types

As we have seen already, there are several data types. Each programming language has a different list of data types and how they are handled. The following data types are available in most languages:

- Number: used to represent all real numbers
- String: used to represent an a list of arbitrary characters
- Boolean: used to represent either a true or false value
- Array: used to represent a list of any data types
- Object: used to represent a container of any data type where each value has a unique name or key

In JavaScript, the `typeof` operator can be used to check the data type of a value.

```JavaScript
typeof 1 => number
typeof true => boolean
typeof 'hello' => string
typeof {} => object
typeof [] => object
```

_Note: in JavaScript, the `typeof` operator will return 'object' for both objects and arrays. This is because arrays are a subset of object. Instead, there is another way of checking if a value is an array: `Array.isArray([]) => true`_

### 13. Introduction to variables

One of the (~4) core pillars of programming is variables. The concept of variables is not specific to programming; for example, in mathematics, you will have expressions such as `"3x + 10 = 19"` and be asked to solve for `x`. This usage of variables is very similar to programming as you will see later.

In the context of programming, a variable is a labelled container to store a value. To create a variable, you declare it using a keyword (or syntax) and give it a label. A variable cannot be created without a label. In JavaScript, variables are declared using one of the keywords `let`, `const`, or `var`. For now, we will focus on `let`. In most languages, a variable label must start with a letter and can only contain letters and numbers. Their typically no other limitations so the following are all valid labels: `x`, `y`, `x123`, `firstName`, `james`, `James1`. 

Once a variable is declared, values can be placed inside the variable using the assignment operator which is represented with the equals symbol (`=`). This is not to be confused with the comparison operator (`==`). The value stored within a variable (the container) can be changed an unlimited number of times. 

The value stored within a variable (the container) can be referenced using the variable label. The value can be referenced/used simply by providing the label. 

Putting all this together:

```JavaScript
let x

x = 3
x + 2 => 5

x = 27
x + 15 => 42

x => 27
```

### 14. Parsing strings to numbers

When a number is stored within a string, the computer does not know the value is a number so if you try to add two numbers together but the numbers are within strings, the computer will simply smash them together (known as concatenation) rather than summing the numerical values. 

```JavaScript
'22' + '11' => '2211'
```

When we want to generate the mathematical sum of the two numbers (i.e. `33` rather than `"2211"`), we must first tell the computer that these values are actually numbers. We do this by parsing the string as a number. In JavaScript, we use a built in function called `parseInt()`:

```JavaScript
parseInt('22') + parseInt('11') => 33
```

### 15. Break for 10 minutes

You have done very well so far, take a break.

### 16. Introduction to Coding (16 minutes)

Watch this YouTube video on [Introduction to Coding](https://www.youtube.com/watch?v=5HaJPpihkBI&t).

### 18. Install Visual Studio Code

- Go to the Visual [Studio Code website](https://code.visualstudio.com/download)
- Download the installer for your OS type
- Run the downloaded installer making sure to select the two options for _"Add "Open with Code"..."_ on the "Select Additional Tasks" screen

### 19. Visual Studio Code overview

Visual Studio Code or VSCode is a hybrid between a text editor and a IDE (Integrated Development Environment). The tool has most of the features of a typical IDE with providing the lightweight benefits of a text editor. Look over the user interface to understand some of the basic features.

### 20. Hello world program

We are now going to create our first JavaScript/NodeJs program. It's easy thank you may think. 

As we say early in this lesson, use Windows Terminal to execute a program and we can pass that program a parameter such as `ping google.com`; in this example, `ping` is the program and `google.com` is the parameter. We also saw for NodeJs, to launch the REPL, we simply call the program without any parameters. The node program does accept parameters, however. We can run and tell it the name of a script to execute so if we had a script file called `hello.js`, we tell node to execute this script by running the command `node hello.js`.

The second recall here is that the P in REPL stands for print so, when we run our own scripts, the outputs are not automatically printed. Instead we have to rely on a build in function which is called `console.log()`. As the name implies, this prints (or logs) a message to the console (the terminal). 

Inside the `./lessons/lesson-1/` folder, create a new file called `hello.js`. Inside this file, enter the following content and save the file.

```JavaScript
let message = "hello world"
console.log(message)
```

In the terminal, navigate to the same folder `./lessons/lesson-1/` and execute the command `node hello.js`.

### 21. Addition program

We will now write a program to add two numbers. These numbers will be passed to the script when the script is called. Like we saw in the previous program, values can be passed to programs (for `node hello.js`, hello.js is passed to node). We can build on this and pass values to a script simply by chaining the values in the command. The values can then be accessed within the script using `process.argv`. Note: `process.argv` is an array where the first two values are the name of the program executing the script and the name of the script. The third and successive values are the arguments passed to the script. So, if the command `node script.js x y`, the `x` and `y` arguments can be accessed using `process.argv[2]` and `process.argv[3]` respectively.

Using the knowledge gained so far, write a program which takes two input numbers and outputs the sum of those values i.e. when the command below is executed, the output matches below.

```
> node addition.js 2 7
The sum of 2 and 7 is 9
```

_Hint: use the file "./skeleton/addition.js" as your starting point. Here, the challenge of reading input arguments is somewhat taken care of for you._

### 22. Conditional statements

The conditional (decision) statement is the second (~4) core programming concepts. These statements are a way to tell the computer to do a task if a condition is met. The statement is referenced using the `if` keyword. Conditional statements are written differently in each programming language but generally speaking, there will always be the `if` keyword, a condition to evaluate, and a task to execute if the condition is true.

In JavaScript (and all C-family languages), the condition to evaluate is given in parentheses `( ...condition... )` and the task to execute is given in braces `{ ...task... }`. For example:

```JavaScript
if ( x === 2 ) {
    console.log( "The value of x is 2" )
}
```

If we want to do one task if the condition is two and a different task if it's false, you can chain the `else` keyword after the first task i.e. 

```JavaScript
if ( x === 2 ) {
    console.log( "The value of x is 2" )
}
else {
    console.log( "The value of x is NOT 2" )
}
```

We can also chain `if` statements by using `else if`. This will allow us to do any number of actions based on multiple conditions. We can still use just `else` at the end to do the final action if non of the prior conditions are true.


```JavaScript
if ( x < 0 ) {
    console.log( "The value of x is a negative number" )
}
else if ( x === 0 ) {
    console.log( "The value of x is 0" )
}
else {
    console.log( "The value of x is a positive number" )
}
```

### 23. Age categorization program

Using what we have learnt about writing scripts so far and the above conditional statements, write a program which gives you a classification based on your age. The output should look something like this: 

```PowerShell
> node age.js 15
You are very young

> node age.js 22
You are a budding adult

> node age.js 35
You are an adult. Well done, you now have scary responsibilities and people expect things of you

> node age.js 70
You are probably senile
```

### 24. Questions

Ageist jokes aside, hope you enjoyed this lesson. You have done great to get this far. Do you have any questions?

## Supplementary Information

### Installing Windows Terminal

If you do not have Microsoft Store on your computer, you can still install Windows Terminal using these steps: 

- Go to the Windows Terminal [GitHub releases page](https://github.com/microsoft/terminal/releases)
- Scroll down to the `Assets` section under Windows Terminal (Note: not Windows Terminal Preview)
- Download the `.msixbundle` file by clicking on it
- Windows may recognize this file type and allow you to double-click it to install
- If not, you can use the PowerShell command `add-appxpackage <filename>`
