git init
    --initializes source control
git remote add origin https://github.com/RaylonJMG/raylon-capstone-project-irvisacoltutoenzxcvbnmjkl.git
    1. open GitHub
    2. open the repository
    3. copy the repository link

git pull origin main
    --pulls files from GitHub

PUSHING TO GITHUB FOR THE FIRST TIME
gh auth login
    --connects the project to GitHub

git remote set-url origin https://github.com/RaylonJMG/Raylon-Level-2-Capstone-Project.git
  --changes the origin

git push --set-upstream origin main
    --pushes files to new GitHub and makes origin and main the default options

PUSHING TO GITHUB IN GENERAL

git add .
git commit -m "the changes made"
git push

IF BRANCH IS MASTER
git branch -M main
    --renames the branch from master to main
git add .
git commit -m "renamed the branch"
git push --set-upstream origin main
