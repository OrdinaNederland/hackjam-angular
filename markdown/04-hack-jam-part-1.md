## Hack-jam (part 1)
*You'll build a working web application with Angular!*

![logo](images/part1/result.png)


## Getting started (1/2)
*You can find the [repo on Github](https://github.com/OrdinaNederland/hackjam-angular)*

1. Clone the repo
2. Install 'Angular CLI' 
3. (optional) install [Yarn](https://yarnpkg.com/en/docs/install) from yarnpkg.com
   - or used npm instead 

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

#### Bootstrap your application

:confounded:

- This application doesn't work 
- Your job: fix the bugs :ok_hand:
- Until it looks like this:
[Final app](http://hackjam.hackages.io)


###  Where do we start?
- Fix all the bugs before trying to implement any other features
- Display all categories on the menu
  - Learn about structural directive
  - Learn how to create a class and create a typed array in TypeScript
- Display all books on the main area
  - Learn about property bindings
- On click on a category, update the list of books and change the class to selected
  - The filter should be apply to the category of the book
  - The css class should be applied to the anchor:
    - hint `[class.selected]`
- On click on the filter button, open the sidebar filter component
- Implement the search
  - Learn about `Forms` and `NgModel`
  - The search should be applied to the title and the category
- Architecture: Split your app into small components (bonus)

- The [presentation slides](https://ordinanederland.github.io/hackjam-angular)

Happy Coding!!
