
import React,{useEffect,useState} from 'react'

// 3 method for object destructuring
const Useritems = ({users}) => {
   console.log(users,"users")

    // 2nd method ---obj destructuring
    const {ant,login,current_user_url,id}= users

// const Useritems = (props) => {
   

//       // 2nd method ---obj destructuring
//       const {ant,login,current_user_url,id}= props.users
  return (
    <div className='card text-center' style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)",gridGap:"1rem"}} >  
     {/* by obj destructuring */}
        <img src={ant} className="round-img" alt=''   style={{width:"60px"}} ></img>
        {/* by taking obj.data method */}
        <h3>{login}</h3>
        <h3>{id}</h3>
        <div>
            <a href={current_user_url} className='btn btn-dark btn-sm my-1'>More</a>
        
        </div>
    </div>
  )
}

export default Useritems























//basics

// import React,{useEffect,useState} from 'react'

// const Useritems = () => {
//     const [userdata, setuserdata] = useState(
//         [{
//         id:'id',
//         login:'mommo',
//         current_user_url:"https://api.github.com/user",
//         ant:"https://github.githubassets.com/images/icons/emoji/unicode/1f41c.png?v8"
//       },
//       {
//         id:'id',
//         login:'mommo',
//         current_user_url:"https://api.github.com/user",
//         ant:"https://github.githubassets.com/images/icons/emoji/unicode/1f41c.png?v8"
//       },
//       {
//         id:'id',
//         login:'mommo',
//         current_user_url:"https://api.github.com/user",
//         ant:"https://github.githubassets.com/images/icons/emoji/unicode/1f41c.png?v8"
//       },
//     ]
    
//       )

//       // 2nd method ---obj destructuring
//       const {ant}= userdata
//   return (
//     <div className='card text-center'>  
//      {/* by obj destructuring */}
//         <img src={ant} className="round-img" alt=''   style={{width:"60px"}} ></img>
//         {/* by taking obj.data method */}
//         <h3>{userdata.login}</h3>
//         <div>
//             <a href={userdata.current_user_url} className='btn btn-dark btn-sm my-1'>More</a>
        
//         </div>
//     </div>
//   )
// }

// export default Useritems