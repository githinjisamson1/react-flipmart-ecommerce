
# FlipMart E-Commerce

This web app includes user authentication(not completely implemented) for a safe login process, CRUD operations that are effective for managing products and categories, and a smooth interaction with a DUMMY list API for retrieving realistic product data. Before making a purchase(purchase yet to be implemented), users can examine specific product views, add goods to their shopping cart, and assess the items they have chosen. Our app offers a user-friendly platform for a seamless e-commerce experience, whether you're an admin managing inventory or a customer accessing product information.


## API Reference

Endpoint: https://dummyjson.com

#### Get all items

```https
  GET /products
```

#### Get items by category

```https
  GET /products/category/smartphones
```

#### Post item 

```https
  POST /products/add
```

#### Update item

```https
  PATCH /products/1
```

#### Delete item

```https
  DELETE /products/1
```

## Authors

- [@githinjisamson1](https://www.github.com/githinjisamson1)


## Contributing

Contributions are always welcome!




## Features

- Navigate to /products after login
- See a list of products based on category
- Create a new product item
- Navigate to /details/:id upon clicking a product image
- Add product to cart upon clicking shopping cart icon
- View items added in cart
- Increase/decrease/delete a cart item whilst updating shopping cart count
- View total price for items in cart
- View about page upon /about navigation



## Feedback

If you have any feedback, please reach out to us at githinjisamson148@gmail.com


## Installation



```bash
  copy ssh
  git clone flipmart-ecommerce
  cd flipmart-ecommerce
  open using an editor e.g., vs code: code .
  run npm install in your terminal.
  in a new terminal, run npm start. This will run your React app on port 3000.
```
    
## Lessons Learned

- useState hook usage
- useEffect hook usage
- useContext hook usage
- useNavigate hook usage
- useReducer hook usage
- routing using react-router-dom
- array methods (map(), filter(), find(), reduce())
- props, components, importing/exporting components

## Tech Stack

**Client:** ``` HTML, CSS, JS, REACT ```

**Version control:** ``` Git ```


## Used By

For practice :)

