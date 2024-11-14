const base_url = "https://vehicle-vault-backend.vercel.app";
console.log(base_url)
export const auth ={
    LOGIN_API: base_url + '/auth/login',
    SIGNUP_API: base_url + '/auth/signup'
}

export const car ={
    REGISTER_CAR_API: base_url + '/car/registerCar',
    GET_USER_CARS_API: base_url + '/car/getUserCars',
    EDIT_CAR_API : base_url + '/car/editCar',
    DELETE_CAR_API : base_url + '/car/deleteCar',
    GET_ALL_CARS_API: base_url + '/car/getAllCars',
    FETCH_CAR_DATA: base_url + '/car/getCarDetail'
}