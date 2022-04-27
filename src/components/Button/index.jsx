import { useDispatch } from "react-redux"
import { addCommentThunk } from "../../store/modules/user/thunks"

const Button = ({comment}) =>{
    const dispatch = useDispatch()

    return(
        <button onClick={() => dispatch(addCommentThunk({comment}))}>
            new comment
        </button>
    )
}

export default Button