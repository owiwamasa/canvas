import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { allArtistPages } from '../../store/artistPage';
import { deleteArtist } from '../../store/artistPage';
import { editUser } from '../../store/session';
import CreateArtistPageModal from '../CreateArtistPageModal';
import './ProfilePage.css'

function ProfilePage() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const currentUser = useSelector(state => state.session.user);
  const artistPages = useSelector(state => state.artistPageReducer.artistPages)
  const artistPageId = artistPages?.filter(page => page?.userId === currentUser?.id)[0]?.id
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  useEffect(() => {
    dispatch(allArtistPages())
  }, [dispatch])

  if (!user) {
    return null;
  }

  const deleteArtistPage = (e) => {
    e.preventDefault()
    dispatch(deleteArtist(artistPageId))
    dispatch(editUser(currentUser))
  }

  return (
    <div>
      <div>
        <strong>User Id</strong> {userId}
      </div>
      <div>
        <strong>Username</strong> {user.username}
      </div>
      {!currentUser.isArtist ?
        <CreateArtistPageModal />
        :
          <button className='delete-artistPage' onClick={deleteArtistPage}>Delete Artist Page</button>
      }
    </div>
  );
}
export default ProfilePage;
