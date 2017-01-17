## Hack-jam (part 1)
*You'll build a working web application with Angular!*

![logo](images/part1/result.png)


## Getting started (1/2)
*You can find the [repo on Github](https://github.com/OrdinaNederland/hackjam-angular)*

1. Clone the repo
2. Install 'Angular CLI' 
3. (optional) install [Yarn](https://yarnpkg.com/en/docs/install) from yarnpkg.com
   - or use npm instead 

```
git clone https://github.com/OrdinaNederland/hackjam-angular
npm i angular-cli@latest -g
```


## Getting started (2/2)

#### Bootstrap your application

```
yarn install
yarn start
```

![data-binding](images/confused-emoticon-small.png)

Oops...
- This application doesn't work 
- Your job: fix the bugs
- Until it looks OK


###  Tasks (1/2)
1. Fix all the bugs before trying to implement any other features
2. Display all categories on the menu
   - Learn about structural directive
   - Learn how to create a class and create a typed array in TypeScript
3. Display all books on the main area
   - Learn about property bindings
4. When a category is clicked
  - The list of books should be updated and the class changed to `selected`
  - The filter should be apply to the category of the book
  - The css class should be applied to the anchor:
    - hint `[class.selected]`


##  Tasks (2/2)
1. On click on the filter button, open the sidebar filter component
2. Implement the search
   - Learn about `Forms` and `NgModel`
   - The search should be applied to the title and the category
3. Architecture: Split your app into small components (bonus)


## If you need help?
- Ask us!
- Check the [presentation slides](https://ordinanederland.github.io/hackjam-angular)
  - https://ordinanederland.github.io/hackjam-angular
- Google is your friend, and
  - [https://angular.io](https://angular.io)
  - [https://angular.io/docs/ts/latest/guide/cheatsheet.html](https://angular.io/docs/ts/latest/guide/cheatsheet.html)
- Or cheat ...  
  - docs / Guide_hackjam.docx
  
*Happy Coding!!*
