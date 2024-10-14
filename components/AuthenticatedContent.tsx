import { AdminDashboard } from './AdminDashboard';
import { UserDashboard } from './UserDashboard';

export function AuthenticatedContent({ user }: { user: any }) {
  const isAdmin = user?.signInUserSession?.accessToken?.payload?.['cognito:groups']?.includes('Admin') || false;

  return (
    <div>
      {isAdmin ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
}

