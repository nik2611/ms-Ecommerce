# Milestone-8: E-commerce

Deployed here: https://ms-e-commerce.herokuapp.com/

## Learning Competencies

At the end of this milestone you will learn

### Backend

- How to retain the session information as HTTP is stateless
- How to authorize third party applications like Google, facebook, github etc.
- Understanding the usage and functions of Cache memory
- How do you run a script in background in the browser using Service workers

### Frontend

- Creating Single page applications using React
- Handling DOM using React
- Handling Events in React
- Understanding the data flow in ReactJS

## Problem Statement

Let's build a fully functional e-commerce site on MERN stack!! You will be building a replica of one of your favourite e-commerce website.

### What's an e-commerce website?

[Wiki](https://en.wikipedia.org/wiki/E-commerce) says

> E-commerce is the activity of buying or selling online. Electronic commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems.

## **Releases**

**Frontend**

1.  Start With Design
    1. Study other e-commerce websites. But instead of jumping deep into making an Amazon clone, look at more **specialized website. One good example is the website for myntra.**
    2. Create a rough sketch of the various views and screens that the user/customer may encounter.
    3. The home screen (landing page), the products screen, the shopping cart, the checkout screen and the individual product pages are mostly the frames that matter.
    4. Create a rudimentary design on **excalidraw** if you can. It brings clarity and a blueprint.
2.  Start with a NavBar Component, which contains all the necessary links and a cart button, as shown below:

    ![Untitled (4)](https://user-images.githubusercontent.com/19927261/175979233-27d3fa30-99e0-4ea2-a523-3ad87cf6b2fe.png)

3.  Before diving further into individual components, set up the routing for your app.
    Add Links in the navbar to all the components like: 1. Product Listing Page, 2. Product Description Page, 3. checkout, 4. cart, 5. reviews and 6. landing page, 7. sign in page.
    Add placeholder information inside them to test if the routing works.
4.  Add a redirect to the login route, that redirects a user to a login/signup page if they click on the cart and are not logged in. Add routes for more user behaviour actions → review, add to cart, and click on account icon.
5.  Add a login/signup components to the login page, as shown below:

    ![Untitled (5)](https://user-images.githubusercontent.com/19927261/175979335-b65b0d5b-ebbf-49a6-9075-c82754b2f1ce.png)

6.  Create components for showcasing as many products as you want in the products view, like shown below:
    _don't forget to add hover animations for the menus_

        ![Untitled (6)](https://user-images.githubusercontent.com/19927261/175979405-f828457f-09d7-4b1e-9473-f6cd357311f8.png)

          each product description page should have a reviews section, and an add review button.

7.  add a cart page, along with a three step process for Cart → Address → Payment. Add

![Untitled (7)](https://user-images.githubusercontent.com/19927261/175979480-810d49a7-1cc0-45f6-901c-71fd78fe1dac.png)

8. add a review component in every product description page, create a gallery of review cards as shown below:

   ![Untitled (8)](https://user-images.githubusercontent.com/19927261/175979558-2aed5751-5175-4f2e-b19b-4cc2aee192e2.png)

9. Create a Cart component, providing it with subcomponents for listing all the products a user chooses as well as a separate checkout box.

   ![Untitled (9)](https://user-images.githubusercontent.com/19927261/175979689-0fac1415-e800-4c51-841c-8d164f3bba66.png)

10. Now that routing and components are complete, make it responsive.

---

**Backend**

1.  set up your node project, create an `index.js` file inside our current working directory. Add the necessary git files and modules and once you start the application, get it to print something in the terminal.
2.  Create a server for the "/" route. Make it return a placeholder value when queried, and test it using Postman so that you know it's working.
3.  Deploy your server using Heroku, ensuring that the API URL can be accessed from [Postman.](https://www.postman.com/)
4.  Set up your database with mongoose and mongoDB.
5.  explore remote databases - as - a - service, and set it up with your API.
    _hint: mlab and elephantSQL sree great examples with generous free plans_
    We are going to design the database to store image metadata, user informations, likes and comments.
    → Inside our main directory let's create a folder called `utils` and make a file called `db.js`
6.  switch between local and remote database using your config variables
    _hint: how would you set up config variables in your env file?_
7.  Let's now create a schema for our post.

    Create a `models` folder inside your project and add a file `item.model.js`

    _This Mongoose Model represents "item" collection in MongoDB database._

    Ensure these CRUD functions are supported in your Mongoose model:

8.  Addig a product to cart:

    **object.[save()]** [docs](https://mongoosejs.com/docs/api/model.html#model_Model-save)

9.  Accessing and listing products in the cart
    1. **find a Product by id: [findById]** [docs](https://mongoosejs.com/docs/api/model.html#model_Model.findById)
    2. **retrieve all Posts: [find()]** [docs](https://mongoosejs.com/docs/api/model.html#model_Model.find)
10. Updating the product quantity or type.

    **update a Post by id: [findByIdAndUpdate]** [docs](https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndUpdate)

11. Removing the product from the cart.
    1. **remove a Post: [findByIdAndRemove]** [docs](https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndRemove)
    2. **remove all Posts: [deleteMany()]** [docs](https://mongoosejs.com/docs/api/model.html#model_Model.deleteMany)
12. In a separate controllers folder, add the controllers necessary to perform the actions for all your CRUD functions.
13. Create RESTful routes for all your CRUD operations. Test each of them using Postman.
