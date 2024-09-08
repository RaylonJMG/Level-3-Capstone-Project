echo "# raylon-capstone-project-irvisacoltutoenzxcvbnmjkl" >> README.md
git init
git add README.md
git config user.name "RaylonJMG"
git config user.email "ryj2213@gmail.com"
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/RaylonJMG/raylon-capstone-project-irvisacoltutoenzxcvbnmjkl.git
curl -sS https://webi.sh/gh | sh
gh auth login
git push --set-upstream origin main



//SYNCS CHANGES IN FILES AND FOLDERS TO GITHUB SPECIFYING THE ORIGIN AND MAIN BRANCH FOR STORAGE 
git push -u origin main
//SAME AS ABOVE. THIS ONE IS MORE SPECIFIC AND PREFERRED
git push --set-upstream origin main 

//SYNCS CHANGES TO GITHUB
git push

//COPIES FILES FROM GITHUB
git pull --set-upstream origin main

//COPIES FILES FROM GITHUB WITH THE DEFAULT PARAMETERS
git pull

//CHANGES ALL FILES AND FOLDERS
git add .

//CREATES SAVE POINT AND ATTACHES A MEMO DESCRIBING THE CHANGES --ADD USER INFO TO README
git commit -m "I added user info to README"

//VIEW THE VALUE OF ORIGIN
git remote -v

//DECLARES AND SETS THE ORIGIN
git remote add origin

//CHANGES THE VALUE OF THE ORIGIN VARIABLE
git remote set-url origin https://github.com/repositoryName

//ACTIVATES OR INITIALIZES GIT SOURCE CONTROL
git init

//RENAMES THE CURRENT BRANCH TO MAIN
git branch -M main

//SHOWS CURRENT VERSION OF GIT
git --version

//ADDS USERNAME TO SAVE POINT
git config user.name "myName"

//ADDS USER EMAIL TO SAVE POINT
git config user.email "my@email.com"
