import { useEffect, useRef } from 'react';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

const useViewer = (options = {}) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    let viewer;
    if (viewerRef.current) {
      viewer = new Viewer(viewerRef.current, options);
    }

    return () => {
      if (viewer) {
        viewer.destroy();
      }
    };
  }, [options]);

  return viewerRef;
};

export default useViewer;
