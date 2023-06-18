import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.css';   ------for bootsrapcss



export const ShowTask = ({ tasklist, setTasklist,task,setTask}) => {

  const handleDelete=(id)=>{
 
    const updatedTasklist = tasklist.filter(todo =>todo.id !==id)
   
    setTasklist(updatedTasklist);

  }


  const handleEdit=(id)=>{

   const selectedTask= tasklist.find(todo=>todo.id ===id)

   setTask(selectedTask);
   
  }
 

  return (
    <section className='showtask'>

      <div className='head'>
        <div>
          <span className='title'>Todo</span>
          <span className='count'>{tasklist.length}</span>
        </div>

        <button className='clearAll' onClick={() => setTasklist([])} >Clear All</button>

      </div>

      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id} >
            <div>

              <span className='name'>{todo.name}</span>
              <span className='time'>{todo.time}</span>


            </div>


            <div>   
              <i onClick={()=>handleEdit(todo.id)} className="bi bi-pencil-square"></i>

              <i onClick={()=>handleDelete(todo.id)}  className="bi bi-trash"></i></div>




          </li>))}





      </ul>





    </section>
  )
}
