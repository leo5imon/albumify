'use client'
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = async (event: MouseEvent<HTMLButtonElement>) => {
    router.push("/api/auth/signout");
  };

  return (
    <div className="absolute bottom-5 right-5">
      <button onClick={handleLogout}>Log-out</button>
    </div>
  );
};

export default LogoutButton;