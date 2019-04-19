import { useEffect, useState } from "react";

export default () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState({
    key: "",
    gitlab: "",
    interval: 15000,
    projects: []
  });

  useEffect(() => {
    try {
      const options = JSON.parse(localStorage.getItem("gld-config"));
      setConfig({ ...config, ...options });
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(true);
      setLoading(false);
    }
  }, []);

  return { configError: error, configLoading: loading, config };
};
