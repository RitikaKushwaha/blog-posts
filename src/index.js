import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import profile1 from './images/pic0.jpeg'
import profile2 from './images/pic1.jpeg'
import profile3 from './images/pic2.png'
import UserCard from './UserCard';

const App = () => {
  return(
    <div className='ui comments'>
    <UserCard>
       <SingleComment
       name='Aman'
       date='Today at 5:00 PM'
       text='it is amazing '
       picture={profile1}/>
       </UserCard>
       <UserCard>
       <SingleComment
       name='Jhanvi'
       date='Today at 6:00 PM'
       text='Great job'
       picture={profile2}/>
       </UserCard>
       <UserCard>
       <SingleComment
       name='Ritika'
       date='Today at 7:00 pm'
       text='Thanks...'
       picture={profile3}/>
       </UserCard>
  </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
