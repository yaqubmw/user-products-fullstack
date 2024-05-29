import { useDispatch } from "react-redux"
import { clearUser } from "../../redux/slices/userSlice"
import { persistor } from "../../redux/store"
import { clearProducts } from "../../redux/slices/productSlice"

const useLogout = () => {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(clearUser())
        dispatch(clearProducts())
        persistor.purge()
        window.location.href = "/"
    }
    return logout
}

export default useLogout