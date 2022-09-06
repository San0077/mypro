import './App.css';
import { Routes,Route,useNavigate } from 'react-router';
import React, { useEffect, useState, useContext,} from 'react';
import {Toolsbar,Admin} from './toolsbar'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AddMovie } from './AddMovie.1';
import { api } from './api.1';
import { MyContext } from "./context";
import { Getmovies } from './Getmovies';
import { BookYourSeats } from './BookYourSeats';
import { BookedYourSeats } from './BookedYourSeats';


export var dum=[]
function App() {
  const navigate = useNavigate()

    
  return (
   <div>
        <Routes>
          <Route path="/" element={<Toolsbar/>}>
          <Route index path="home" element={<Movies />}></Route>
          <Route  path="/bookYourSeats/:id" element={<BookYourSeats />}></Route>
          <Route  path="/login" element={<Login/>}></Route>
          <Route  path="/signup" element={<SignUp/>}></Route>
          <Route  path="bookedYourSeats/" element={<Checking/>}></Route>
          </Route>
          <Route  path="/admin" element={<Admin/>}>
          <Route  path="addMovie" element={<AddMovie/>}></Route>
          <Route index path="home" element={<Movies />}></Route>
          
          </Route>
        </Routes>

    
    
   

   </div>

  );
}
    function Checking(){
      const { setUser,user,setbutton1 } = useContext(MyContext)
      return(
           user==null? <Login/>: <BookedYourSeats/>
      )
    }

function SignUp(){
  const navigate = useNavigate()
  let [username, setemail] = useState()
  let [password, setpassword] = useState()
  let signin =()=>{
        let newusers = {
          username,
          password
        }
    fetch(`${api}/signup`, {
      method: "POST",
      body: JSON.stringify(newusers),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json()).then(() => navigate("/login"));
  }
  return(
   
 <div>
      <div className="document">
        <div className='container'>
          <div className='heading'>
            <i className="fa fa-book fa-4x" aria-hidden="true"></i>
            <span className='heading-name'>Book yours</span>
          </div>
          <div className='form'>
            <div>
              <form className='form-details'>
                <TextField id="outlined-basic"
                  label="username" variant="outlined"
                  style={{ width: 300 }}
                  onChange={(e) => setemail(e.target.value)}
                />

                <TextField id="outlined-basic"
                  label="password" variant="outlined"
                  style={{ width: 300 }}
                  onChange={(e) => setpassword(e.target.value)}
                />

                <div className='button'>
                  <Button variant="contained" type="button"
                    style={{ marginRight: 20 }}
                    onClick={signin}
                    >sign up</Button>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function Login(){

  const navigate = useNavigate()
  let adminkey = 123456;
  let [username, setusername] = useState()
  let [password, setpassword] = useState()
  let [key, setkey] = useState()
  let [state , setsetstate] = useState(false)
     
const { setUser,user,setbutton1 } = useContext(MyContext)

  let loginn =()=>{

    let oldusers = {
      username,
      password
    }
    setUser(oldusers);
fetch(`${api}/login`,{
  method: "POST",
  body: JSON.stringify(oldusers),
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(data =>data.json()).then(res=>{
    if(res.msg =="invalid creditial"){
     setsetstate(true)
    }else{
          if(key==adminkey){
            setbutton1(false)
            navigate("/admin")
          }else{
            setbutton1(false)
            navigate("/bookedYourSeats")
          }
        
    }
});
}
  return(
   
 <div>
      <div className="document">
        <div className='container'>
          <div className='heading'>
            <i className="fa fa-book fa-4x" aria-hidden="true"></i>
            <span className='heading-name'>Book yours</span>
          </div>
          <div className='form'>
            <div>
              <form className='form-details'>
                <TextField id="outlined-basic"
                  label="username" variant="outlined"
                  style={{ width: 300 }}
                  onChange={(e) => setusername(e.target.value)}
                />

                <TextField id="outlined-basic"
                  label="password" variant="outlined"
                  style={{ width: 300 }}
                  onChange={(e) => setpassword(e.target.value)}
                />
                  <TextField id="outlined-basic"
                  label="optional for admin" variant="outlined"
                  style={{ width: 300 }}
                  onChange={(e) => setkey(e.target.value)}
                />

                <div className='button'>
                  <Button variant="contained" type="button"
                    style={{ marginRight: 20 }}
                    onClick={loginn}
                    >Log In</Button>
                  <Button variant="contained" type="button" onClick={()=>navigate("/signup")} >Sign in</Button>

                </div>
                <div>{state?"invalid credential":""}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 export function Movies(){

  const [movie,setmovie]=useState([])
    
  fetch(`${api}/home`)
  .then(data=>data.json().then(mov=>setmovie(mov)))
 
      return(
        <div className='row'>
          {movie.map(mov=> <Getmovies mov={mov}/> )}
          </div>
   
      )         
}
export default App;