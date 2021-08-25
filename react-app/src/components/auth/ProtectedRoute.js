import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect} from 'react-router-dom';

const ProtectedRoute = props => {
  const user = useSelector(state => state.session.user)
  const userId = parseInt(props.location.pathname.slice(7))

  return (
    <Route {...props}>
      {(user?.id === userId) ? props.children  : <Redirect to='/' />}
    </Route>
  )
};


export default ProtectedRoute;
