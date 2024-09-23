import { Routes, Route } from 'react-router-dom';
import React from 'react';
// import React, { useEffect } from 'react';
import BoardPage from 'page/BoardPage/BoardPage';
import RegistraionPage from 'page/RegistraionPage/RegistraionPage';
import ParticipantsPage from 'page/ParticipantsPage/ParticipantsPage';

const App = () => {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refresThunk());
  // }, [dispatch]);

  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />}> */}
      <Route path="/" element={<BoardPage />} />
      <Route path="register" element={<RegistraionPage />} />
      <Route path="view" element={<ParticipantsPage />} />

      {/* </Route> */}
    </Routes>
  );
};

export default App;
