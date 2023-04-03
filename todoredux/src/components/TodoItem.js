import React from 'react'

const TodoItem = ({id, title, comleted}) => {
  return (
    <li className={`list-group-item ${comleted && 'list-group-item-success'}`}>
        <div className='d-flex justify-content-between'>
            <span className='d-flex aling-items-center'>
                <input type='checkbox' className='mr-3' checked={comleted}></input>
                title
            </span>
        </div>
    </li>
  )
}

export default TodoItem;