# In-class Notes from 1/30

git is useful to maintain back ups and help find bugs this is step 1 of git 
    "files are like space and git is time"

jupiter notebook for AI

steps for git will be published on blackboard

git allows for branches to work on different features at the same time allowing to bug fix in one branch while working on a new feature in another 

branch merger will allow for changes made after the a branch was created to still be in place after committing the branch to main. Git will notify you if there is any merge conflict.

#### .gitignore is important for the final 10%

You do not want to edit a repo from anywhere but VS Code 

making a gitignore:
    go to gitignore.io
    add what tools you will be using in the project (VS code, Vue, Node) and press create
    make a .gitignore file in the root directory copy and paste the result of gitignore.io into the file

in node there is a package manager that creates a file that is a list of all the packages that are being used. while the list itself should be the packages should not be in the repo

__Rule: If it is a file you personally made then it probably should be in the repo but something made by someone else or by the computer should be in the .gitignore__

Branches: 
1. Main branch does not get touched it is the stable version
2. a Dev branch with the most recent version 
3. other branches for fixes and features

"git checkout -b NAME" makes a new branch with NAME 

"git checkout NAME" switches between branches

### Static vs Dynamic files
these terms are used from a server point of view. While a page might seem dynamic in browser if the file themselves don't change it is still considered static

there will be two version of each file one for the way the programer wants to see it and one that is optimized for server hosting 

C.I.C.D: Continues integration continues deployment
    a computers that automate the process for updating software

Render is the lightweight CICD we will be using 

Github actions are a C.I.C.D

.yml (yet another markup language) 
    on: 
        push:
            branch: ["main:"]
    means runs on push to main branch

