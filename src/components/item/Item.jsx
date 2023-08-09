import propTypes from 'prop-types'
import './item.scss'
import { BiEdit , BiTrash } from "react-icons/bi";

export const Item = (props) => {
    const {data,deleteTask,editTask} = props

    return (
        <div className={`list-items`}>
            <p className='title'>{data.title}</p>
            <p className={`priority ${data.priority}`}>{data.priority}</p>
            <div className='button-container'>
                <BiEdit className='btn' onClick={() => editTask(data.id)}>Edit</BiEdit>
                <BiTrash className='btn' onClick={() => deleteTask(data.id)} >Delete</BiTrash>
            </div>
        </div>
    )
}


Item.propTypes = {
    data: propTypes.object.isRequired,
    deleteTask: propTypes.func,
    editTask: propTypes.func,
    priority: propTypes.string,
    setPriority: propTypes.func,
}