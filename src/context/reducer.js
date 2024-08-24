export const initialState = {
    new_user: [],
    email: '',
    password: '',
    image: '',
    cart_products: []
  }




  export const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart_products: [...state.cart_products, action.product]
            };

        case "ADD_TO_USER":
            return {
                ...state,
                new_user: [...state.new_user, { 
                    email: action.email, 
                    password: action.password, 
                    image: action.image 
                }]
            };

        case "CHANGE_EMAIL":
            return {
                ...state,
                email: action.email
            };

        case "CHANGE_PASSWORD":
            return {
                ...state,
                password: action.password
            };

        default:
            return state;
    }
};
