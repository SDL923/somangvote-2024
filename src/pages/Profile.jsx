import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileDetails from '../components/ProfileDetails';

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // profiles.json에서 해당 ID의 프로필을 가져옵니다.
    fetch('/profiles.json')
      .then((response) => response.json())
      .then((data) => {
        const foundProfile = data.find((p) => p.id === parseInt(id));
        setProfile(foundProfile);
      });
  }, [id]);

  return (
    <div>
      {profile ? (
        <ProfileDetails profile={profile} />
      ) : (
        <p>해당 프로필을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default Profile;
