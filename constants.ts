const getServerEndpoint = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://api.example.com' as const;
  } else {
    return 'http://localhost:3000' as const;
  }
}

export { getServerEndpoint };
