// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (moviesArr) => moviesArr.map((movie) => movie.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesArr) => {
  return moviesArr.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
};
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArr) {
    const avgRate = moviesArr.filter(movie => movie.rate).reduce((acc, val) => acc + val.rate, 0) / moviesArr.length;
    return Number(avgRate.toFixed(2)) || 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArr) {
    let dramas = moviesArr.filter(movie => movie.genre.includes("Drama"));
    return ratesAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
    return [...moviesArr].sort((a, b) => a.year > b.year ? 1 : -1);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
