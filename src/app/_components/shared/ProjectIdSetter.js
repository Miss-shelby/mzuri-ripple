'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/_components/Providers/Providers';
import Cookies from 'js-cookie';

const ProjectIdSetter = ({ projectId }) => {
  const { setProjectId } = useAuth();
  useEffect(() => {
    setProjectId(projectId);
    Cookies.set("projectId", projectId);
  }, [projectId, setProjectId]);

  return null;
};

export default ProjectIdSetter;
