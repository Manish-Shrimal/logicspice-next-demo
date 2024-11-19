// hooks/useCurrentPathname.js
"use client";
import { useRouter } from 'next/router';

const useCurrentPathname = () => {
  const router = useRouter();
  return router.pathname;
};

export default useCurrentPathname;
