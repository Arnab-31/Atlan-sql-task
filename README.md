# Online SQL Query Runner

This is a web application made using the React framework that helps in executing sql queries on any number of databaase.

## Features

- Run any query using the dropdown interface on any of the available database. Syntax validation is ensured by the dropdown interface.
- A query can be saved for future use which saves time required to run multiple queries for the user.
- Tables are displayed with inbuilt navigation, which helps the user in deciding the number of rows to be displayed at a time in the table. The table is divided into multople pages to which the user can navigate to, this helps in rendering a lot of data without breaking the UI.
- The user can search for any word in the current choosen database using the search bar.

## Performance

Lighthouse has been used to measure the performance metrics of the application

- First Contentful Paint - 0.5s
- Time to Interactive - 0.6s
- Speed Index - 1.4s
- Total blocking time - 0ms
- Largest Contentful Paint - 0.5s
- Cumulative Layout Shift - 0.15

## Optimization

- The useMemo hook is being used which reduces the number of recomputations by storing the results of computations with the same dependencies.
- Images are optimized by using the avif format.
- No external styling library has been used to keep the code lightweight and inline styles have been avoided wherever possible


## How to run

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.