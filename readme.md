# mine

> A custom React hoc for data fetching.

## Install

```bash
npm i mine
```

## Usage

```jsx
import React from 'react';
import withDataFetch from 'mine';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const AppWrapper = () => {
  const getData = React.useCallback(() => {
    return ['my data']
  }, []);
  
  return <App />
}

const App = ({data}) => {
	return <span>{JSON.stringify(data)}</span>
};


export default withDataFetch(AppWrapper);
```
