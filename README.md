# Cocktail Search App

This project is a web application that allows users to search for cocktail recipes using the [CocktailDB API](https://www.thecocktaildb.com/api.php). It was developed using React and CSS to build on both frontend and styling skills. This README provides an overview of the project and its features.

## Installation and Setup

1. Clone the repository to your local machine using `git clone`.

```bash
git clone <repository-url>
cd cocktail-search-app
```

2. Install the project dependencies using `npm`.

```bash
npm install
```

3. Start the development server.

```bash
npm start
```

This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Overview

This project is a showcase of skills development and learning in both React and CSS. It started as one of the first projects to build and reinforce these skills.

The application leverages the CocktailDB API to search for cocktail recipes. It provides CRUD (Create, Read, Update, Delete) functionality, initially focusing on the "Read" part.

### Features

- **Cocktail Search**: The app allows users to search for cocktails by their name, providing a basic search feature.

- **Ingredient-Based Search**: A more advanced feature was added to search for cocktails based on specific ingredients, such as alcohol or fruit.

- **Recipe Display**: Once a cocktail is selected, the app displays detailed information, including an image, list of ingredients, and a recipe.

### Challenges

- **Ingredient Processing**: Parsing and processing the ingredients from the API response was a challenge. It required techniques like `Object.entries` and the `reduce` method to filter and format the data for display.

- **CSS Styling**: Styling the app posed its own set of challenges. Understanding how different components and CSS rules interact and affect each other was part of the learning curve.

### CSS Design

The CSS design went through multiple iterations to achieve the desired look and feel. From animated cocktails to the more stream lined image used. Learning to target specific components and understanding the CSS hierarchy was an important part of this project. The development process led to the creation of a well-structured CSS file.

### Lighthouse performance

Above 90% although due to multiple searchs and the random generator in action the performance is lower at 80 which will need to be improved.

## Future Improvements

While the project has reached a functional state, there is always room for improvement. Some potential enhancements include:

- **User Authentication**: Allowing users to create accounts and save their favorite cocktail recipes.

- **Advanced Search Filters**: Expanding the search capabilities with more advanced filters, such as by glass type or category.

- **Responsive Design**: Ensuring the app looks and works well on different devices and screen sizes.

- **Performance Optimization**: Enhancing the performance of the app, especially when dealing with a large number of cocktails.

## Conclusion

This project represents a journey of learning and skill development. It showcases the ability to build a functional web application while also paying attention to design and user experience. It's a testament to the dedication and hard work that goes into becoming a proficient developer.

Thank you for your time and interest in this project. Your feedback and contributions are always welcome.
