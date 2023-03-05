
import jwtDecode from "jwt-decode";
const accessTokenSecret = "mysupersecretkeymysupersecretkey"

export default class JwtHelper {

    verifyAccessToken() {
        try {
            const token = localStorage.getItem("userToken")
            var decodedToken = jwtDecode(token, accessTokenSecret)
            return (Date.now() < decodedToken.exp*1000) ? true : false
        } catch (error) {
            return false;
        }
    }
}
