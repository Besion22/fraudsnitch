import type { FraudDataProps, FraudReport } from "../../data/fraudData";
import "../../assets/styles/frauddashboard.less";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  DARK_BACKGROUND_CARD: string;
  ACCENT_BLUE_DARK: string;
  TEXT_GREY: string;
  CHART_SECONDARY_COLOR: string;
}

const CustomTooltip = ({
  active,
  payload,
  label,
  DARK_BACKGROUND_CARD,
  ACCENT_BLUE_DARK,
  TEXT_GREY,
  CHART_SECONDARY_COLOR,
}: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: DARK_BACKGROUND_CARD,
          border: "1px solid " + ACCENT_BLUE_DARK,
          borderRadius: "5px",
          padding: "10px",
          color: TEXT_GREY,
          boxShadow: "0px 0px 15px rgba(0,0,0,0.4)",
          fontSize: "13px",
        }}
      >
        <p
          className="label"
          style={{
            color: CHART_SECONDARY_COLOR,
            marginBottom: "5px",
            fontWeight: "bold",
          }}
        >
          {label}
        </p>
        {payload.map((entry, index) => (
          <p
            key={`item-${index}`}
            style={{ color: entry.color || TEXT_GREY }}
          >
            {`${entry.name}: `}
            <span style={{ fontWeight: "bold", color: entry.color || "white" }}>
              {entry.name === "Amount Lost"
                ? `$${entry.value.toLocaleString()}`
                : entry.value}
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function FraudDashboard({ fraudData }: FraudDataProps) {
  if (!fraudData || fraudData.length === 0) {
    return (
      <div className="fraud-dashboard no-data">
        <p>No fraud data available to display the dashboard.</p>
      </div>
    );
  }

  const fraudTypeCounts: { [key: string]: number } = fraudData.reduce(
    (acc: { [key: string]: number }, fraud: FraudReport) => {
      acc[fraud.type] = (acc[fraud.type] || 0) + 1;
      return acc;
    },
    {}
  );
  const fraudTypeChartData = Object.entries(fraudTypeCounts)
    .map(([name, value]) => ({
      name,
      value,
    }))
    .sort((a, b) => b.value - a.value);

  const sortedDates = fraudData
    .map((fraud: { date: string }) => new Date(fraud.date))
    .sort(
      (a: { getTime: () => number }, b: { getTime: () => number }) =>
        a.getTime() - b.getTime()
    );

  const minDate = sortedDates.length > 0 ? sortedDates[0] : null;
  const maxDate =
    sortedDates.length > 0 ? sortedDates[sortedDates.length - 1] : null;

  const fraudIncidentsOverTime: { [key: string]: number } = {};

  if (minDate && maxDate) {
    let currentDate = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
    const endDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);

    while (currentDate <= endDate) {
      const yearMonth = `${currentDate.getFullYear()}-${(
        currentDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}`;
      fraudIncidentsOverTime[yearMonth] = 0;
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
  }

  fraudData.forEach((fraud: FraudReport) => {
    const yearMonth = fraud.date.substring(0, 7);
    if (fraudIncidentsOverTime.hasOwnProperty(yearMonth)) {
      fraudIncidentsOverTime[yearMonth]++;
    } else {
      fraudIncidentsOverTime[yearMonth] =
        (fraudIncidentsOverTime[yearMonth] || 0) + 1;
    }
  });

  const sortedTimeData = Object.entries(fraudIncidentsOverTime)
    .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
    .map(([date, count]) => ({ date, count }));

  const fraudLocationCounts: { [key: string]: number } = fraudData.reduce(
    (acc: { [key: string]: number }, fraud: FraudReport) => {
      acc[fraud.location] = (acc[fraud.location] || 0) + 1;
      return acc;
    },
    {}
  );
  const sortedLocations = Object.entries(fraudLocationCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);
  const fraudLocationChartData = sortedLocations.map(([name, value]) => ({
    name,
    value,
  }));

  const allDescriptions = fraudData
    .map((fraud: { description: string }) => fraud.description.toLowerCase())
    .join(" ");
  const commonWords = [
    "email",
    "call",
    "online",
    "scam",
    "account",
    "money",
    "link",
    "login",
    "website",
    "bank",
    "personal",
    "info",
    "password",
    "urgent",
    "security",
    "transfer",
    "verification",
    "payment",
    "fee",
    "investment",
    "support",
    "remote",
    "delivery",
    "shipping",
    "tax",
    "irs",
    "fraud",
    "official",
    "phishing",
    "impersonation",
    "offer",
    "promise",
    "guaranteed",
    "police",
    "government",
    "prize",
    "lottery",
    "sweepstakes",
    "refund",
  ];
  const tacticCounts: { [key: string]: number } = {};
  commonWords.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "g");
    const matches = (allDescriptions.match(regex) || []).length;
    if (matches > 0) {
      tacticCounts[word] = matches;
    }
  });

  const tacticChartData = Object.entries(tacticCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8)
    .map(([name, value]) => ({ name, value }));

  const moneyLossByType: { [key: string]: number } = fraudData.reduce(
    (acc: { [key: string]: number }, fraud: FraudReport) => {
      acc[fraud.type] = (acc[fraud.type] || 0) + fraud.amount;
      return acc;
    },
    {}
  );
  const moneyLossChartData = Object.entries(moneyLossByType)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  const ACCENT_BLUE_LIGHT = "#6e78ff";
  const ACCENT_BLUE_DARK = "#5860bd";
  const ACCENT_GREEN = "#64ffda";
  const TEXT_GREY = "#aeaeae";
  const DARK_BACKGROUND_CARD = "#1f1f3a";

  const CHART_PRIMARY_COLOR = ACCENT_BLUE_LIGHT;
  const CHART_SECONDARY_COLOR = ACCENT_GREEN;
  const CHART_TERTIARY_COLOR = ACCENT_BLUE_DARK;

  const PIE_PALETTE = [
    CHART_PRIMARY_COLOR,
    CHART_SECONDARY_COLOR,
    "#FFC658",
    "#FF7F50",
    "#AF64F7",
    "#00BCD4",
    "#FF69B4",
    "#20B2AA",
  ];

  return (
    <div className="fraud-dashboard">
      <div className="dashboard-grid">
        <div className="dashboard-card main-chart-card">
          <h3>Fraud Type Distribution</h3>
          <p className="card-description">
            Detailed breakdown of reported fraud incident types.
          </p>
          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <BarChart
              data={fraudTypeChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="name"
                stroke={TEXT_GREY}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={80}
                tick={{ fontSize: 11 }}
              />
              <YAxis
                stroke={TEXT_GREY}
                allowDecimals={false}
              />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.1)" }}
                content={
                  <CustomTooltip
                    DARK_BACKGROUND_CARD={DARK_BACKGROUND_CARD}
                    ACCENT_BLUE_DARK={ACCENT_BLUE_DARK}
                    TEXT_GREY={TEXT_GREY}
                    CHART_SECONDARY_COLOR={CHART_SECONDARY_COLOR}
                  />
                }
              />
              <Legend wrapperStyle={{ paddingTop: "15px", color: TEXT_GREY }} />
              <Bar
                dataKey="value"
                name="Incidents"
                fill={CHART_PRIMARY_COLOR}
                barSize={40}
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card">
          <h3>Fraud Incidents Over Time</h3>
          <p className="card-description">
            Monthly reporting trends and frequency.
          </p>
          <ResponsiveContainer
            width="100%"
            height={200}
          >
            <LineChart
              data={sortedTimeData}
              margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
            >
              <XAxis
                dataKey="date"
                stroke={TEXT_GREY}
                tick={{ fontSize: 11 }}
                angle={-30}
                textAnchor="end"
                height={50}
              />
              <YAxis
                stroke={TEXT_GREY}
                allowDecimals={false}
              />
              <Tooltip
                cursor={{ stroke: CHART_SECONDARY_COLOR, strokeWidth: 2 }}
                content={
                  <CustomTooltip
                    DARK_BACKGROUND_CARD={DARK_BACKGROUND_CARD}
                    ACCENT_BLUE_DARK={ACCENT_BLUE_DARK}
                    TEXT_GREY={TEXT_GREY}
                    CHART_SECONDARY_COLOR={CHART_SECONDARY_COLOR}
                  />
                }
              />
              <Legend wrapperStyle={{ paddingTop: "10px", color: TEXT_GREY }} />
              <Line
                type="monotone"
                dataKey="count"
                name="Incidents"
                stroke={CHART_SECONDARY_COLOR}
                activeDot={{
                  r: 6,
                  fill: CHART_SECONDARY_COLOR,
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card">
          <h3>Total Money Loss by Type</h3>
          <p className="card-description">
            Aggregated financial impact by fraud category.
          </p>
          <ResponsiveContainer
            width="100%"
            height={200}
          >
            <BarChart
              data={moneyLossChartData}
              margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
            >
              <XAxis
                dataKey="name"
                stroke={TEXT_GREY}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={60}
                tick={{ fontSize: 10 }}
              />
              <YAxis
                stroke={TEXT_GREY}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.1)" }}
                content={
                  <CustomTooltip
                    DARK_BACKGROUND_CARD={DARK_BACKGROUND_CARD}
                    ACCENT_BLUE_DARK={ACCENT_BLUE_DARK}
                    TEXT_GREY={TEXT_GREY}
                    CHART_SECONDARY_COLOR={CHART_SECONDARY_COLOR}
                  />
                }
              />
              <Legend wrapperStyle={{ paddingTop: "10px", color: TEXT_GREY }} />
              <Bar
                dataKey="value"
                name="Amount Lost"
                fill={CHART_TERTIARY_COLOR}
                barSize={20}
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card">
          <h3>Top Fraud Locations</h3>
          <p className="card-description">
            Geographic hotspots for reported incidents.
          </p>
          <ResponsiveContainer
            width="100%"
            height={200}
          >
            <PieChart>
              <Pie
                data={fraudLocationChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="75%"
                fill="#82ca9d"
                labelLine={false}
                label={({ name, percent, x, y, midAngle }) => {
                  const radius = 90;
                  const RADIAN = Math.PI / 180;
                  const sin = Math.sin(-RADIAN * midAngle);
                  const cos = Math.cos(-RADIAN * midAngle);

                  const mx = x + radius * cos;
                  const my = y + radius * sin;
                  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
                  const ey = my;
                  const textAnchor = cos >= 0 ? "start" : "end";

                  return (
                    <text
                      x={ex + (cos >= 0 ? 1 : -1) * 12}
                      y={ey}
                      textAnchor={textAnchor}
                      fill={TEXT_GREY}
                      fontSize={11}
                    >
                      {`${name} (${(percent * 100).toFixed(0)}%)`}
                    </text>
                  );
                }}
              >
                {fraudLocationChartData.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={PIE_PALETTE[index % PIE_PALETTE.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                content={
                  <CustomTooltip
                    DARK_BACKGROUND_CARD={DARK_BACKGROUND_CARD}
                    ACCENT_BLUE_DARK={ACCENT_BLUE_DARK}
                    TEXT_GREY={TEXT_GREY}
                    CHART_SECONDARY_COLOR={CHART_SECONDARY_COLOR}
                  />
                }
              />
              <Legend wrapperStyle={{ paddingTop: "10px", color: TEXT_GREY }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card full-width-card">
          <h3>Common Scammer Tactics & Keywords</h3>
          <p className="card-description">
            Frequently used methods and terms by fraudsters.
          </p>
          <ResponsiveContainer
            width="100%"
            height={250}
          >
            <BarChart
              data={tacticChartData}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 30, bottom: 5 }}
            >
              <XAxis
                type="number"
                stroke={TEXT_GREY}
                allowDecimals={false}
                tick={{ fontSize: 11 }}
              />
              <YAxis
                type="category"
                dataKey="name"
                stroke={TEXT_GREY}
                width={120}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.1)" }}
                content={
                  <CustomTooltip
                    DARK_BACKGROUND_CARD={DARK_BACKGROUND_CARD}
                    ACCENT_BLUE_DARK={ACCENT_BLUE_DARK}
                    TEXT_GREY={TEXT_GREY}
                    CHART_SECONDARY_COLOR={CHART_SECONDARY_COLOR}
                  />
                }
              />
              <Legend wrapperStyle={{ paddingTop: "10px", color: TEXT_GREY }} />
              <Bar
                dataKey="value"
                name="Occurrences"
                fill={CHART_TERTIARY_COLOR}
                barSize={25}
                radius={[0, 8, 8, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
