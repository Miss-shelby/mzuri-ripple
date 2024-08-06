'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/_components/Providers/Providers';

const ProjectIdSetter = ({ projectId }) => {
  const { setProjectId } = useAuth();
  useEffect(() => {
    setProjectId(projectId);
  }, [projectId, setProjectId]);

  return null;
};

export default ProjectIdSetter;
