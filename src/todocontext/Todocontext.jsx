import {  createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';




const ToDoContext = createContext();
const usetodocontext = () => useContext(ToDoContext)

const TodoProvider = ({children}) => {


    


    const removeall =()=>{
        settask([]);
      }
      const handalchange = (e) => {
        console.log(e.target.value);
        setactivity(e.target.value);
      };
    
      const changeupdate = () => {
    
    
        if(activity == ""){
          alert("please fill the input box")
        }
       else if(!update){
          settask(task.map((newele)=>{
            if(newele.id === edit){
              return{...newele,title:activity}
            }
            return newele
          }))
          setactivity("")
          setupdate(true)
          setedit(null)
        }
        else{
          const allactivity ={id:uuidv4() , title:activity ,completed: false}
        console.log(allactivity)
        settask([...task, allactivity]);
        
        setactivity('');
        }
      };


      const removehandler = (i) => {
        const filteritem = task.filter((item) => i !== item.id);
        console.log(filteritem);
        settask(filteritem);
      };
    
      const handalcomplete = (i) => {
        const updatedTasks = task.map((item) => {
          if (item.id === i) {
            return { ...item, completed: !item.completed };
          }
          return item;
        });
        settask(updatedTasks);
      }
    
      const handaledit = (i) => {
        const finditem = task.find((item) => (
          i === item.id
        ))
        setupdate(false);
        setactivity(finditem.title);
        setedit(i);
      }
    



    const [activity, setactivity] = useState('');
  const [task, settask] = useState([]);
  const [update,setupdate] = useState(true);
  const [edit,setedit] = useState(null);

  const alltask = {activity,setactivity,task,settask,edit,setedit,update,setupdate,removeall,handalchange,handalcomplete,handaledit,changeupdate,removehandler}

    return(
        
        <ToDoContext.Provider value={alltask}>
            {children}
        </ToDoContext.Provider>
    )
}




export {ToDoContext , TodoProvider , usetodocontext}