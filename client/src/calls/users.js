const {axiosInstance} = require('./index')

//Register new User

export const RegisterUser = async (value) => {
    try{
        const response = await axiosInstance.post("api/users/register", value);
        return response.data;
    }catch(error){
        console.log(error);
    }
}


// login user

export const LoginUser = async (value) =>{
    try {
        const response = await axiosInstance.post("api/users/login", value);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

// get current user from the frontend

export const GetCurrentUser = async () =>{
       try {
           const response = await axiosInstance.get('api/users/get-current-user')
           return response.data
       } catch (error) {
          console.log(error)
       }
}


/// Forget and Reset Password

export const ForgetPassword = async (value) => {
    try {
        const response = await axiosInstance.patch("api/users/forgetpassword", value);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const ResetPassword = async (value) => {
    try {
        const response = await axiosInstance.patch("api/users/resetpassword", value);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}












