import React from 'react';
import { useQuery } from "@tanstack/react-query";

const withDataFetch = (Component) => (props) => {
  const { fetchCommand = 'getAll', fetchParamCollection, fetchParamId, queryKey, DBService } = props;
  const getData = React.useCallback(() => {
    return DBService[fetchCommand](fetchParamCollection, fetchParamId);
  }, [fetchCommand, fetchParamCollection, fetchParamId]);

  const query = useQuery({ queryKey: [queryKey], queryFn: getData });

  if (query.isError) {
    return (
      <div>
        <div>{query.error.toString()}</div>
      </div>
    );
  }

  if (query.isFetching) {
    return <div>Loading...</div>;
  }

  if (!query.data || !query.data.length) {
    return <div>Data is empty.</div>;
  }

  return <Component {...props} data={query.data} />;
};

export default withDataFetch;