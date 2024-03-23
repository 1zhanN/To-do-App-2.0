
export default function AddTask({children}){

    function handleAddTask(){
        console.log("helloworld")
    }

    return(
        <li>
        <button onClick={handleAddTask}>{children}</button>
        </li>
    );
}
