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

Windows Terminal is a new, convient, and powerful tool giving you access to system and third-party tools. Terminal uses Command Prompt and Powershell under the hood to execute commands. 

- Open the `Microsoft Store`
- Search for `Windows Terminal`
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

- Go to the GitHub CLI website [https://cli.github.com/](https://cli.github.com/)
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

- Go to the NodeJs website [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
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



### 9. Logical evaluation

### 10. Introduction to strings

### 11. String operators

### 12. Introduction to variables

### 13. Data types

### 14. Parsing strings to numbers

### 15. Conditional logic

### 16. Break for 10 minutes

### 17. Introduction to Coding (16 minutes)

### 18. Install Visual Studio Code

### 19. Visual Studio Code overview

### 20. Hello world program

### 21. Addition program

### 22. Conditional statements

### 23. Age categorization program

### 24. Questions

### 25. Closing notes


## Installing Tools Setup

### Install Windows Terminal

https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701
https://github.com/microsoft/terminal/releases
add-appxpackage ...

### Install Visual Studio Code

https://code.visualstudio.com/download
