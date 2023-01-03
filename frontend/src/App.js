import axios from "axios";
import { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import { Form, Button } from "react-bootstrap";

function App() {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState("Bar");
  const [dataScource, setDataScource] = useState("language");
  const [showPieChart, setShowPieChart] = useState(false);

  useEffect(() => {
    if (dataScource === "language") {
      axios.get("http://localhost:4000/languages").then((response) => {
        const { data } = response;
        const trans = [];
        data.result.map((item) =>
          trans.push({ title: item.LANGUAGE, value: item.total_bytes })
        );
        console.log(trans);
        setData(trans);
      });
    } else {
      axios.get("http://localhost:4000/licenses").then((response) => {
        const { data } = response;
        const trans = [];
        data.result.map((item) =>
          trans.push({ title: item.license, value: item.total })
        );
        console.log(trans);
        setData(trans);
      });
    }
  }, [chartType, dataScource]);

  return (
    <div className="App">
      <Form.Group controlId="Chart">
        <Form.Label>Select Chart Type</Form.Label>
        <Form.Control
          as="select"
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
        >
          <option value="bar">Bar Chart</option>
          <option value="pie">Tie Chart</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="datasources">
        <Form.Label>Select Data Type</Form.Label>
        <Form.Control
          as="select"
          value={dataScource}
          onChange={(e) => setDataScource(e.target.value)}
        >
          <option value="language">languages</option>
          <option value="licence">licences</option>
        </Form.Control>
      </Form.Group>
      <Button
        variant="primary"
        onClick={() => setShowPieChart(chartType === "pie")}
      >
        show
      </Button>
      {!showPieChart && <BarChart data={data} />}
      {showPieChart && <PieChart data={data} />}
    </div>
  );
}

export default App;
