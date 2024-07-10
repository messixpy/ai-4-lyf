import SummaryBoxes from "./components/SummaryBoxes";
import PatientTable from "./components/patientData";
import Header from "./layout/Header";
function App() {
  return (
    <div className="flex-col w-[100%] items-center justify-center">
      <Header />

      <div className="mx-8 mb-10 ">
      <SummaryBoxes />
      <PatientTable />
      </div>
    </div>
  );
}

export default App;
