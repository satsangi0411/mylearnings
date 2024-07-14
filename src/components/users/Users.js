import React ,{useEffect,useState} from 'react'
import Useritems from './Useritems'
const Users = () => {
    const [userdata, setuserdata] = useState(
        [{
        id:'1',
        login:'mommo',
        current_user_url:"https://api.github.com/user",
        ant:"https://github.githubassets.com/images/icons/emoji/unicode/1f41c.png?v8"
      },
      {
        id:'2',
        login:'mommo',
        current_user_url:"https://api.github.com/user",
        ant:"https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9b2.png?v8"
      },
      {
        id:'3',
        login:'mommo',
        current_user_url:"https://api.github.com/user",
        ant:"https://github.githubassets.com/images/icons/emoji/unicode/1f424.png?v8"
      },
    ]
    
      )

  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",gridGap:"1rem"}}>
        {userdata.map((user)=>(
           // console.log(user.id,"user")
          <Useritems  key={user.id}  users = {user}/>
)

        )}
    </div>
  )
}

export default Users