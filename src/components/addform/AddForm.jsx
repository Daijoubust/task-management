import './Addform.scss'
import propTypes from 'prop-types'

export const AddForm = (props) => {
    const {title,setTitle,saveTask,editId,priority, setPriority} = props

    const handlePrioritySelectChange = (e) => {
        const newPriority = e.target.value
        setPriority(newPriority)
    }

    return (
        <>
            <h2>Add your task here</h2>
            <form onSubmit={saveTask}>
                <div className='form-container'>
                    <input
                    type="text"
                    className="text-input"
                    value={title} onChange={(e) => setTitle(e.target.value)}
                    />
                    <select name="priority" value={priority} onChange={handlePrioritySelectChange}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <button type="submit" className="submit-btn">{editId ? 'Update' : 'Add'}</button>
                </div>
            </form>
        </>
    )
}

AddForm.propTypes = {
    title: propTypes.string.isRequired,
    setTitle: propTypes.func,
    saveTask: propTypes.func,
    editId: propTypes.number,
    priority: propTypes.string,
    setPriority: propTypes.func,
}