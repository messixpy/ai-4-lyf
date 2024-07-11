import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import CustomDropdown from "./customDropdown";
import { content } from "../data";
import Pagination from "./Pagination";

const initialPatients = content?.layout.initialPatients;
const statusClasses = {
  Attend: "bg-green-100 text-green-800",
  Missed: "bg-gray-100 text-gray-800",
  Cancelled: "bg-red-100 text-red-800",
  "No Appointment": "bg-yellow-100 text-yellow-800",
};

const PatientTable = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const handleDelete = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleFilterChange = (e) => setFilterStatus(e.target.value);
  const handleSortChange = (e) => setSortOption(e.target.value);

  const sortPatients = (patients, sortOption) => {
    if (sortOption === "Name") {
      return patients.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "Date") {
      return patients.sort(
        (a, b) =>
          new Date(a.previousAppointment) - new Date(b.previousAppointment)
      );
    }
    return patients;
  };
  const filteredPatients = sortPatients(
    patients.filter((patient) => {
      const matchesSearch = patient.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus =
        filterStatus === "All" || patient.status === filterStatus;
      return matchesSearch && matchesStatus;
    }),
    sortOption
  );

  return (
    <div className="p-4 w-[100%] border rounded-lg shadow-md overflow-x-auto">
      <div className="flex flex-col md:flex-row  justify-between ">
        <div>
          <h1 className="text-2xl font-semiBold ">Patients</h1>
          <p className="text-gray-600">Patient Details & Activity Log</p>
        </div>
        <div className="w-[80%] md:w-[30%]">
          <input
            type="text"
            className="border w-[100%] bg-slate-200 border-gray-300 rounded p-2"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <hr className="flex w-full border my-4" />
      <div className="flex md:flex-row flex-col md:justify-between justify-center gap-3 items-center mb-4">
        <div className="flex border rounded-lg md:mt-0 mt-2 ">
          <button className="bg-blue-100  text-blue-700 px-4 py-2 ">
            General Info
          </button>
          <button className="bg-gray-100 hover:bg-blue-100 hover:text-blue-700 text-gray-700 px-4 py-2 ">
            Monitoring Status
          </button>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center md:space-y-0 space-y-2 md:space-x-4">
          <CustomDropdown
            value={filterStatus}
            onChange={handleFilterChange}
            option={"Show only"}
            option1={"Attend"}
            option2={"Missed"}
            option3={"Cancelled"}
          />
          <CustomDropdown
            value={sortOption}
            onChange={handleSortChange}
            option={"Sort By"}
            option1={"Name"}
            option2={"Date"}
          />

          <CustomDropdown
            option={"Bulk Action"}
            option1={"Make Attend"}
            option2={"Make Missed"}
            option3={"Make Cancelled"}
            option4={"Delete Selected"}
          />
        </div>
      </div>

      <table className="min-w-full bg-white border border-gray-200">
        <tr className="text-md !justify-start !items-start !font-light">
          <th className="py-5 lg:py-2 px-4 gap-4 border-b font-light flex items-center justify-start">
            <input type="checkbox" className="form-checkbox h-4 w-4" /> Name
          </th>
          <th className="py-2 px-4 text-start font-light border-b">Diseases</th>
          <th className="py-2 px-4 text-start font-light border-b">
            Previous Appointment
          </th>
          <th className="py-2 px-4 text-start font-light border-b">Status</th>
          <th className="py-2 px-4 text-start font-light border-b">
            Next Appointment
          </th>
          <th className="py-2 px-4 border-b"></th>
        </tr>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.id} className="border-b">
              <td className="py-2 px-2 gap-4 text-md font-light flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4" />
                <div className="flex items-center justify-center">
                  <img
                    src={patient.profileImage}
                    alt={patient.name}
                    className="w-7 h-7 rounded-full mr-3"
                  />
                  {patient.name}
                </div>
              </td>
              <td className="py-2 px-4 ">
                {patient.diseases.map((disease, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 font-light text-blue-800 px-2 py-1 rounded-full text-xs mr-2"
                  >
                    {disease}
                  </span>
                ))}
              </td>
              <td className="py-2 px-4 font-light">
                {patient.previousAppointment}
              </td>
              <td className="py-2 px-4">
                <span
                  className={`px-2 py-1  rounded-full text-xs ${
                    statusClasses[patient.status]
                  }`}
                >
                  {patient.status}
                </span>
              </td>
              <td className="py-2 px-4 font-light">
                {patient.nextAppointment}
              </td>
              <td className="py-2 px-4 text-center">
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(patient.id)}
                >
                  <FaTrashAlt className="w-3 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination totalPages={10} />
    </div>
  );
};

export default PatientTable;
