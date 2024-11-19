import React from 'react';

const JsonLd = ({ data }) => {
  if (!data) return null;
  return (
    <script >
      {JSON.stringify(data)}
    </script>
  );
};

export default JsonLd;
