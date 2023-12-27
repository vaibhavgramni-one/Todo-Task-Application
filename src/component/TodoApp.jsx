import { useState } from 'react';
import {AddTaskButton} from './AddTaskButton';
import {DeleteTask} from './DeleteTask';

export const TodoApp = () => {
    const [inputTask , setInputTask] = useState('');
    const [taskList , setTaskList] = useState([]);

    const addTaskToList = () => {
        if(!inputTask.length){
            alert(`
            Hello User,
            Please Provide Some Task in Input !!
            `)

            return;
        }

        
        const taskAlreadyAvailable = taskList.filter((task) => task.name === inputTask.toUpperCase())
        
        if(taskAlreadyAvailable.length){
            alert(`
            Hello User, \n
            This Task is Already Available \n
            Task : ${inputTask} 
            `)
            setInputTask('');    
            return;
        }
        
        
        const newTask = {
            id : taskList.length + 1,
            name : inputTask.toUpperCase()
        }

        setTaskList([...taskList , newTask]);
        setInputTask('');
    }

    const deleteTask = (taskIdToDelete) => {
        
        const newTaskList = taskList.filter((task) => task.id !== taskIdToDelete)
        setTaskList(newTaskList)
    }

    return (
        <div className='todo'>
            <div>
                <h1 style={{ color : 'burlywood' }}>Todo Task Application</h1>
                <input type='text'  value={inputTask} placeholder="Please add your task...." onChange={(event) => setInputTask(event.target.value)}/>
                <br></br>
                <AddTaskButton addTaskToList={addTaskToList}/>
            </div>
            <div style={{borderColor : !!taskList.length && 'burlywood'}} className='task-list'>
                
                { !!taskList && taskList.map((task , index) => {
                    return <div key={task.id} className='delete'>
                                <h5 className='delete-items'>{task.name}</h5> <DeleteTask taskId={task.id} deleteTask={deleteTask} />
                            </div>
                })}
                
            </div>
        </div>
    )   
}