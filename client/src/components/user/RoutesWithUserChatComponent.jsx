import { Outlet } from 'react-router-dom';
import UserChatComponent from './UserChatComponent';

const RoutesWithUserchatComponent = () => {
  return (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  );
};

export default RoutesWithUserchatComponent;

/* What This Actually Is

This is a layout route component.

It is not protecting routes.

It is not deciding authentication.

It is defining shared UI for a group of routes.

So What Is This Pattern Called?

This is called a layout route in React Router.

It allows you to:

Share UI across multiple routes

Avoid repeating components on every page

Keep routing declarative

What It Means Architecturally

You are saying:

“Every route nested inside this wrapper should always display the chat component.”

This is different from:

Header/Footer layout (global layout)

Protected route (authorization logic)

This is feature-scoped layout composition.

That’s a higher-level architectural pattern.

2️⃣ Why This Pattern Exists

Instead of doing this on every page:

<>
  <UserChatComponent />
  <UserProfilePage />
</>

You centralize it in routing.

Routing becomes responsible for layout structure.

This is cleaner and scales better.*/