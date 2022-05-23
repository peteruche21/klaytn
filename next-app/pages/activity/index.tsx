import type { NextPage } from "next";
import React, { useMemo, useState, useEffect } from "react";
import useStore from "../../store";
import styles from "../../styles/Home.module.css";
import TransactionsTable from "../../components/Activity/TransactionsTable";
import ActivityBarChart from "../../components/Activity/ActivityBarChart";

const Activiy: NextPage = () => {
  const state = useStore((state) => state);
  const [activityBarChart, setActivityBarChart] = useState({});
  const [activity, setActivity] = useState<{}[]>([]);

  useEffect(() => {
    setActivityBarChart(state.activityGraph);
    setActivity(state.walletActivity);
  }, [state.activityGraph, state.walletActivity]);

  return (
    <div>
      {activityBarChart && activity ? (
        <div>
          <ActivityBarChart dataArr={activityBarChart} />
          <TransactionsTable data={activity} />
        </div>
      ) : (
        <div>Trouble Fetching Onchain Activity</div>
      )}
    </div>
  );
};

export default Activiy;
