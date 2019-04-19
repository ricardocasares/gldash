import { useEffect, useState } from "react";

export default () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState({ interval: 15000, projects: [] });

  useEffect(() => {
    try {
      const options = JSON.parse(localStorage.getItem("gld-config"));
      setConfig({ ...config, ...options });
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(
        "There was an error retrieving your configuration, please check it is set and is valid json"
      );
    }
  }, []);

  return [error, loading, config];
};
