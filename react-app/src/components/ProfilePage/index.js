import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { allArtistPages } from '../../store/artistPage';
import { allJobs } from '../../store/job';
import { deleteArtist } from '../../store/artistPage';
import { editUser } from '../../store/session';
import { allUsers } from '../../store/user';
import CreateArtistPageModal from '../CreateArtistPageModal';
import JobCard from '../JobCard';
import './ProfilePage.css'

function ProfilePage() {
  const [user, setUser] = useState({});
  const [jobsClicked, setJobsClicked] = useState(true)
  const { userId }  = useParams();
  const currentUser = useSelector(state => state.session.user);
  const artistPages = useSelector(state => state.artistPageReducer.artistPages)
  const users = useSelector(state => state.userReducer.users)
  const artistPageId = artistPages?.filter(page => page?.userId === currentUser?.id)[0]?.id
  const jobs = useSelector(state => state.jobReducer.jobs)
  const myJobs = jobs?.filter(job => ((job?.userId === +userId) || (job?.artistId === +userId )))
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
    dispatch(allJobs())
    dispatch(allUsers())
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
    <div className='profilePage'>
      <div className='profilePage-sidebar'>
        <button className='profilePage-sidebar-btn' onClick={() => {
          setJobsClicked(false)
        }}
        >INBOX</button>
        <button className='profilePage-sidebar-btn' onClick={() => {
          setJobsClicked(true)
        }}
        >JOBS</button>
        {!currentUser.isArtist ?
          <CreateArtistPageModal />
          :
            <button className='delete-artistPage' onClick={deleteArtistPage}>Delete Artist Page</button>
        }
      </div>
      <div className='profilePage-content'>
        {jobsClicked ?
          <div className='profilePage-jobs'>
            {myJobs?.length ? myJobs?.map(job => {
              let artist = users.find(user => user.id === job.artistId)
              let otherUser = users.find(user => user.id === job.userId)
              return (
                <JobCard key={job?.id} job={job} artist={artist} otherUser={otherUser}/>
              )}):
            <div className='profilePage-noJob'>No Jobs :(</div>
            }
          </div>
        :
        <div>
          <div>INBOX CONTENT</div>
        </div>}
      </div>
    </div>
  );
}
export default ProfilePage;
