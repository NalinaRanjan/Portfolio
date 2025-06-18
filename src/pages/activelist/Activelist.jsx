import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Activelist.scss';
import { useNavigate } from 'react-router-dom';

const Activelist = () => {

  const navigate = useNavigate();

  const [date, setDate] = useState(new Date());
  const [active, setActive] = useState("Active Appointments");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [msg, setmsg] = useState(" NO Data Found ")
  const [selected, setSelected] = useState()
  const [search, setSearch] = useState(false)

  useEffect(() => {
    // Fetch data from JSON endpoint when component mounts
    getData();
  }, []);

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => {
        setData(response.employee);
        setFilteredData(response.employee); // Initial setting of filtered data
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleDateChange = (date) => {
    debugger

    const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
    const filtered_Data = data.filter(item => item.date === formattedDate);
    setDate(date);
    setFilteredData(filtered_Data.length > 0 ? filtered_Data : []);
    if (filtered_Data.length === 0) {
      setmsg('No Data Found');
    }
  };

  const handleActiveClick = () => {
    setActive("Active Appointments");
    setFilteredData(data)
  };

  const handleTodayAppointmentsClick = () => {
    setActive("Today's Appointments");
    const today = new Date();
    const todayFormatted = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
    const filtered_Data = data.filter(item => item.date === todayFormatted);
    setFilteredData(filtered_Data.length > 0 ? filtered_Data : []);
    if (filtered_Data.length === 0) {
      setmsg('No Data Found');
    }
  };

  const handleSelected = (e) => {
    const status = e.target.value;
    setSelected(status)

    if (status) {
      const filteredByStatus = data.filter(item => item.status === status);
      setFilteredData(filteredByStatus.length > 0 ? filteredByStatus : []);
      if (filteredByStatus.length === 0) {
        setmsg('No Data Found');
      }
    } else {
      setFilteredData(data);
    }
  }
  const handlesearch = () => {
    setSearch(!search)
  }


  const advancedSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filtered_Data = data.filter(item => 
      item.name.toLowerCase().includes(searchValue) ||
      item.uhid.toLowerCase().includes(searchValue) ||
      item.opno.toLowerCase().includes(searchValue) ||
      item.visittype.toLowerCase().includes(searchValue) ||
      item.diagnosis.toLowerCase().includes(searchValue) ||
      item.status.toLowerCase().includes(searchValue) ||
      item.doctorname.toLowerCase().includes(searchValue) ||
      item.speciality.toLowerCase().includes(searchValue)
    );
    setFilteredData(filtered_Data.length > 0 ? filtered_Data : []);
    if (filtered_Data.length === 0) {
      setmsg('No Data Found');
    }
  };

   const handleplaybtnclick = (item)=>{debugger
    navigate("/process", {state:[
      {name:item.name,
      uhid:item.uhid,
      opno:item.opno,
      phno:item.phno,
      whatsappno:item.wno}
    ]})
   }

  return (
    <div className='container-fluid'>
      <div className='row mt-3'>
        {/* Left Side Content */}
        <div className='col-lg-8 col-sm-12'>
          <div className='maindiv'>
            <div className='leftsidecontent'>
              <div className='pageheaderdiv'>
                <span className="material-symbols-outlined Activelistcontent">
                  calendar_today
                </span>
                <span className={active === "Active Appointments" ? "active" : ""} onClick={handleActiveClick}>
                  Active Appointments
                </span>
              </div>
              <div className='pageheaderdiv'>
                <span className="material-symbols-outlined Activelistcontent">
                  schedule
                </span>
                <span className={active === "Today's Appointments" ? "active" : ""} onClick={handleTodayAppointmentsClick}>
                  Today's Appointments
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Content */}

        {active == "Today's Appointments" ? (<div></div>) : (<div className='col-lg-4 col-sm-12'>
          <div className='maindiv'>
            <div className='rightsidecontent'>
              <div className='pageheaderdiv'>
                <DatePicker
                  selected={date}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  className="datepicker-input"
                />
              </div>
              <div className='pageheaderdiv'>
                <select className="form-control" placeholder='Search' onChange={handleSelected}>
                  <option value="" hidden selected>Search.......</option>
                  <option>Completed</option>
                  <option>In Progress</option>
                  <option>Booked</option>
                  <option>Waiting</option>
                </select>
              </div>
              {search ? (<input type="search" className='advancedSearch' onChange={advancedSearch} placeholder='Advanced. Search'></input>) : (<div></div>)}
              <div className='pageheaderdiv' onClick={handlesearch}>
                <span className="material-symbols-outlined Activelistcontent">
                  search
                </span>
              </div>

            </div>
          </div>
        </div>)}
      </div>
      <div>
        {filteredData.length > 0 ? (
          <table className="table table-striped text-start">
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={item.id} >
                  <td>{index + 1}</td>
                  <td><span className="material-symbols-outlined usericon">
                    person
                  </span></td>
                  <td><span className='primarycolor'>{item.name}</span><br />{item.uhid}</td>
                  <td>{item.opno}<br />{item.visittype}</td>
                  <td>
                    Diagnosis: {item.diagnosis}<br />
                    Status: <span className={item.status === "In Progress" ? "text-primary" : item.status === "Completed" ? "text-success" : item.status === "Booked" ? "text-warning" : "black"}>
                      {item.status}
                    </span>
                  </td>
                  <td>Dr.{item.doctorname}<br /><span className='primarycolor'>Speciality: {item.speciality}</span></td>
                  <td>{item.date}</td>
                  <td>{item.icon === "Play icon" && <span onClick={()=>handleplaybtnclick(item)} className="material-symbols-outlined">play_circle</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (<h6>{msg}</h6>)}
      </div>
    </div>
  );
};

export default Activelist;
