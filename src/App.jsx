import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Jobs from "./jobs";
import Loading from "./loading";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);

  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const jobs = await response.json();
      setLoading(false);
      setJobs(jobs);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    return (
      <main>
        <Jobs jobs={jobs} />
      </main>
    );
  }
}

export default App;
