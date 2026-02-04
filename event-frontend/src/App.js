import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInSignUp from './components/SignInSignUp';
import CreateEvents from './components/CreateEvents';
import CreateClubs from './components/CreateClub';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import HackathonsPage from './pages/HackathonsPage';
import RecruitmentsPage from './pages/RecruitmentsPage';
import EventDetailsPage from './pages/EventDetailsPage';
import ClubDetailsPage from './pages/ClubDetailsPage';
import ClubsPage from './pages/ClubsPage';

const clientId = '361933842826-brilkrt4sknm1m2fpho0fue8pq658grj.apps.googleusercontent.com';

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInSignUp />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/create-events" element={<CreateEvents />} />
          <Route path="/create-club" element={<CreateClubs />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/hackathons" element={<HackathonsPage />} />
          <Route path="/recruitments" element={<RecruitmentsPage />} />
          <Route path="/events/:id" element={<EventDetailsPage />} />
          <Route path="/clubs/:id" element={<ClubDetailsPage />} />
          <Route path="/clubs" element={<ClubsPage />} /> */
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
