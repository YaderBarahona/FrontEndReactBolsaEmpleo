import React from 'react'

function LoadSkills() {
    const { data, isLoading, isError } = useQuery("skill", getSkills, {
        enabled: true,
      });
    
      if (isLoading) return <div>Loading...</div>;
    
      if (isError) return <div>Error</div>;
  return (
    <div>LoadSkills</div>
  )
}

export default LoadSkills