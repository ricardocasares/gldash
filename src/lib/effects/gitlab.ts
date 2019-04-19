import { useEffect, useState } from "react";
import { json } from "../util";
import useConfig from "./config";

export default resource => {
  const [loading, setLoading] = useState(true);
  const [fetchError, setError] = useState(false);
  const [response, setResponse] = useState();
  const [timestamp, setTimestamp] = useState(new Date());
  const { configError, configLoading, config } = useConfig();
  const { key, gitlab } = config;

  useEffect(() => {
    if (configLoading || configError) return;

    setLoading(true);
    fetch(`${gitlab}${resource}`, {
      headers: { "Private-Token": key }
    })
      .then(json)
      .then(setResponse)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [resource, timestamp, key, gitlab, configError]);

  const refresh = () => setTimestamp(new Date());

  return [response, fetchError, loading, refresh];
};
