// ========================================== CLASS COMPONENT ====================================================


// import './App.css';
// import React, {Component} from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nameInputValue:"",
//       phoneInputValue:0,
//       emailInputValue:"",
//       students: [],
//       editIndex: null,

//     }
//   }

//   handleChangeValueName=(event)=> {
//     this.setState({nameInputValue: event.target.value})
//   }

//   handleChangeValuePhone=(event)=> {
//     this.setState({phoneInputValue: event.target.value})
//   }
  
//   handleChangeValueEmail=(event)=> {
//     this.setState({emailInputValue: event.target.value})
//   }

//   handleSubmit=()=>{
//     const {students, nameInputValue, phoneInputValue, emailInputValue, editIndex} = this.state;
//     const updatedStudents = [...students, {name: nameInputValue, phone: phoneInputValue, email: emailInputValue, completed: false}]
//       if(editIndex === null) {
//         if(nameInputValue&&phoneInputValue&&emailInputValue) {
//           this.setState ({
//             students: updatedStudents, 
//             nameInputValue: "",
//             phoneInputValue: 0,
//             emailInputValue: "",
//           })
//           console.log(students)
//         } else {
//           alert("Please, enter enough information in all 3 fields")
//         }
//       }else {
//         if(editIndex !== null&&nameInputValue&&phoneInputValue&&emailInputValue) {
//           this.setState((prevState) => {
//             const updatedEditStudents = [...prevState.students];
//             updatedEditStudents[editIndex].name = nameInputValue;
//             updatedEditStudents[editIndex].phone = phoneInputValue;
//             updatedEditStudents[editIndex].email = emailInputValue;
//             return{students, editIndex:null, nameInputValue:"", phoneInputValue:0, emailInputValue:""}

//           })
//         } else {
//           alert("Please, enter enough information in all 3 fields")
//         }
//       }

//     }

//   deleteStudent=(index)=> {
//     const {students} = this.state;
//     const updatedStudents = [...students]
//     updatedStudents.splice(index, 1)
//     this.setState({
//       students: updatedStudents,
//     })
//   }

//   editStudent=(index)=> {
//     const {editIndex, students} = this.state;
//     const updatedStudents =[...students]
//     this.setState({
//       editIndex: index,
//       nameInputValue: updatedStudents[index].name,
//       phoneInputValue: updatedStudents[index].phone,
//       emailInputValue: updatedStudents[index].email
//     })


//   }
  

//   render() {
//     const {nameInputValue, phoneInputValue, emailInputValue, students} = this.state
//     return (
//       <div className='container'>
//         <div className='container-input'>
//           <h1>Student List</h1>
//           <div className='nameInput'>
//             Name:
//             <input type="text" value={nameInputValue} onChange={this.handleChangeValueName} placeholder='Enter a your name...' required/>
//           </div>
//           <div className='phoneInput'>
//             Phone: 
//             <input type="number" value={phoneInputValue} onChange={this.handleChangeValuePhone} placeholder='Enter a your phone...' required/>
//           </div>
//           <div className='emailInput'>
//             Email:
//             <input type="email" value={emailInputValue} onChange={this.handleChangeValueEmail} placeholder='Enter a your email...' required/>
//           </div>
//           <button onClick={this.handleSubmit}>Submit</button>
//         </div>
        
//         <table className='container-table'>
//           <tr>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Action</th>
//           </tr>
          
//           {students && 
//             (students.map((student, index) => 
//               <tr key={index} className='table-item'>
//                 <td>{student.name}</td>
//                 <td>{student.phone}</td>
//                 <td>{student.email}</td>
//                 <td>
//                   <button onClick={()=> this.editStudent(index)}>Edit</button>
//                   <button onClick={()=>this.deleteStudent(index)}>Delete</button>
//                 </td>
//               </tr>
//             ))
            
//           }
          
//         </table>
       


//       </div>
//     )
//   }
// }
// export default App;


//=================================================   REACT HOOK   ==============================================

// import './App.css';

// import React, {useState} from "react";

// const App =()=> {
//   const [students, setStudents] = useState([]);
//   const [formData, setformData] = useState({
//     name: '',
//     phone: 0,
//     email: "",
//   })
//   const [editIndex, seteditIndex] = useState(null);
  
  
//   const handleChangeForm=(e)=> {
//     const {name, value} = e.target;
//     setformData({
//       ...formData,
//       [name]: value,
//     }) 
//   }

//   const handleSubmit=(e)=> {
//     e.preventDefault();
//     const updatedStudents = [...students, {names: formData.name, phones: formData.phone, emails: formData.email, completed: false}];
//     if(editIndex===null) {
//       if(formData.name&&formData.phone&&formData.email) {
//         setStudents(updatedStudents)
//         setformData({
//           name: "",
//           phone: 0,
//           email: "",
//         })
//       } else {
//         alert("Please, enter enough information in all 3 fields")     
//       }
//     } else {
//       if(editIndex!==null&&formData.name&&formData.phone&&formData.email) {
//         const updatedEditStudents = [...students]
//         updatedEditStudents[editIndex].names = formData.name
//         updatedEditStudents[editIndex].phones = formData.phone
//         updatedEditStudents[editIndex].emails = formData.email
//         setStudents(updatedEditStudents)
//         seteditIndex(null)
//         setformData({name: "", phone:"", email:""})
//         // return {students, editIndex:null, name:"", phone:"", email:""}
//       }else{
//         alert("Please, enter enough information in all 3 fields") 
//       }
//     }
//   }
  
//   const editStudent=(index)=> {
//     const updatedEditStudents = [...students]
//     seteditIndex(editIndex=>editIndex=index)
//     setformData({
//       name: updatedEditStudents[index].names,
//       phone: updatedEditStudents[index].phones,
//       email: updatedEditStudents[index].emails,
//     })
//   }

  
//   const deleteStudent=(index) => {
//     const updatedStudents = [...students];
//     updatedStudents.splice(index, 1);
//     setStudents(updatedStudents);
//   }

//   const handleChangeCheckbox=(index)=> {
//     const updatedCheckStudents = [...students]
//     updatedCheckStudents[index].completed =!updatedCheckStudents[index].completed;
//     setStudents(updatedCheckStudents)
//   }

//   return (
//     <div className='container'>
//       <form onSubmit={handleSubmit} className='container-form'>
//         <h1>Students List</h1>
//         <div><label>Name: </label><input type="text" name='name' value={formData.name} onChange={handleChangeForm} placeholder='Enter a your name' /></div>
//         <div><label>Phone: </label><input  type="number" name='phone' value={formData.phone} onChange={handleChangeForm} placeholder='Enter a your phone number' /></div>
//         <div><label>Email: </label> <input  type="email" name='email' value={formData.email} onChange={handleChangeForm} placeholder='Enter a your email' /></div>
//         <button type='submit'>Submit</button>
//       </form>

//       <table className='container-table'>
//           <tr>
//             <th><input type="checkbox"/></th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Action</th>
//           </tr>
//           {students&& 
//             students.map((student, index) => 
//               <tr key={index} style={{background: student.completed? "#aaaa":"none"}}>
//                 <td><input type="checkbox" checked={student.completed} onChange={()=>handleChangeCheckbox(index)} /></td>
//                 <td>{student.names}</td>
//                 <td>{student.phones}</td>
//                 <td>{student.emails}</td>
//                 <td>
//                   <button onClick={()=>editStudent(index)}>Edit</button>
//                   <button onClick={()=>deleteStudent(index)}>Delete</button>
//                 </td>
//               </tr>
//             )
//           }

//       </table>

//     </div>

//   )
// }
// export default App;


// ================================================SPACE =============================================================

import './App.css';

import React, {useState} from "react";

const App =()=> {
  const [formData, setformData] = useState({
    name: "",
    phone: 0,
    email: "",

  });
  const [students, setStudents] = useState([]);
  const [editIndex, seteditIndex] = useState(null)

  const handleChange=(e)=> {
    const {name, value} = e.target;
    setformData({
      ...formData,
      [name]: value,
    })
  }
  const handleSubmit=(e)=> {
    e.preventDefault();
    const updatedStudents = [...students, {yourName: formData.name, yourPhone: formData.phone, yourEmail: formData.email, completed: false}];
    if(editIndex === null) {
      if(formData.name && formData.phone && formData.email) {
        setStudents(updatedStudents);
        console.log(updatedStudents)
        setformData({
          name: "",
          phone: 0,
          email: "",
        })
      } else {
        alert("Please, Enter enough information all in 3 fields")
      }

    } else {
      if(editIndex !== null && formData.name && formData.phone && formData.email) {
        const updatedEditStudent = [...students];
        updatedEditStudent[editIndex].yourName = formData.name;
        updatedEditStudent[editIndex].yourPhone = formData.phone;
        updatedEditStudent[editIndex].yourEmail = formData.email;
        setStudents(updatedEditStudent);
        seteditIndex(null);
        setformData({
          name: "",
          phone: 0,
          email: "",
        })
      } else {
        alert("Please, Enter enough information all in 3 fields")
      }
    }
  }

  const editStudent = (index) => {
    const updatedEditStudent = [...students]
    seteditIndex(index);
    console.log(editIndex)
    setformData({
      name: updatedEditStudent[index].yourName,
      phone: updatedEditStudent[index].yourPhone,
      email: updatedEditStudent[index].yourEmail,
    })
    
  }

  const deleteStudent=(index)=> {
    const updatedDeleteStudent = [...students]
    updatedDeleteStudent.splice(index, 1);
    setStudents(updatedDeleteStudent);
  }

  const handleChangeCheckbox=(index)=> {
    const updatedCheckboxStudent = [...students];
    updatedCheckboxStudent[index].completed = !updatedCheckboxStudent[index].completed;
    setStudents(updatedCheckboxStudent)

  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='container-form'>
        <h1>Students List</h1>
        <label>Name: <input type="text" name='name' value={formData.name}  onChange={handleChange} placeholder='Enter your name...'/></label>
        <label>Phone:<input type="number" name='phone' value={formData.phone}  onChange={handleChange} placeholder='Enter your name...'/></label>
        <label>Email: <input type="email" name='email' value={formData.email}  onChange={handleChange} placeholder='Enter your name...'/></label>
        <button type='submit' className='sumitForm'>Submit</button>
      </form>

      <table className='container-table'>
        <tbody>
          <tr className='container-table-title'>
            <th><input type="checkbox" /></th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          {students&&
            students.map((student, index) =>
              <tr key={index} style={{background: student.completed ? "#aaaa" : "none",}}>
                <td style={{textAlign: "center"}}><input type="checkbox" checked={student.completed} onChange={()=>handleChangeCheckbox(index)} /></td>
                <td>{student.yourName}</td>
                <td>{student.yourPhone}</td>
                <td>{student.yourEmail}</td>
                <td>
                  <button onClick={()=>editStudent(index)}>Edit</button>
                  <button onClick={()=>deleteStudent(index)}>Delete</button>
                </td>   
              </tr> 
            )          
          }
        </tbody>
      </table>
    </div>

  )
}

export default App;