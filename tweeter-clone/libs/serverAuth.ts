import { NextApiRequest } from 'next';

import prisma from '@/libs/prismadb';
// import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getSession } from 'next-auth/react';

 // to get current session from the request
const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({req});

  // check if user login by email
  if (!session?.user?.email) {
    throw new Error('Not signed in');
  } 

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    }
  });

  if (!currentUser) {
    throw new Error('Not signed in');
  }

  return { currentUser };
};

export default serverAuth;