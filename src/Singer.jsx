import './App.css'
export default function singer({singer}){
    return (
        <div className='singer'>
            <p>name: {singer.name}</p>
            <p>age: {singer.age}</p>
        </div>
    )
}