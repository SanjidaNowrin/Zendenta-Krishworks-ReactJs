import DashboardHome from "./components/Dashboard/DashboardHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientList from "./components/Dashboard/PatientList";
import Overview from "./components/Dashboard/Overview";
import Calendar from "./components/Dashboard/Calendar";
import Messages from "./components/Dashboard/Messages";
import PaymentInformation from "./components/Dashboard/PaymentInformation";
function App() {
  return (
    <div sx={{ background: "#F2F5F9 !important" }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<DashboardHome />}>
            <Route path="/patientList" element={<PatientList />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/paymentInfo" element={<PaymentInformation />} />
            <Route path="/settings" element={<PaymentInformation />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
